from __future__ import annotations

import json
import sqlite3
from datetime import UTC, datetime
from pathlib import Path
from typing import Any
from uuid import uuid4

from schemas.validation import (
    ValidationIssue,
    ValidationResult,
    invalid,
    is_non_empty_string,
    issue,
)
from services.event_bus import publish
from services.event_service import lead_created_event
from services.quiz_service import get_quiz_session

DB_PATH = Path(__file__).resolve().parents[1] / "db" / "project_estimator.sqlite3"


def _connect() -> sqlite3.Connection:
    DB_PATH.parent.mkdir(parents=True, exist_ok=True)
    connection = sqlite3.connect(DB_PATH)
    connection.row_factory = sqlite3.Row
    return connection


def _table_has_column(connection: sqlite3.Connection, table: str, column: str) -> bool:
    rows = connection.execute(f"PRAGMA table_info({table})").fetchall()
    return any(row[1] == column for row in rows)


def init_lead_storage() -> None:
    with _connect() as connection:
        connection.execute(
            """
            CREATE TABLE IF NOT EXISTS leads (
                lead_id TEXT PRIMARY KEY,
                idempotency_key TEXT UNIQUE NOT NULL,
                session_id TEXT NOT NULL,
                quiz_id TEXT NOT NULL,
                contact_json TEXT NOT NULL,
                answers_json TEXT NOT NULL,
                pricing_json TEXT,
                source TEXT NOT NULL,
                status TEXT NOT NULL,
                telegram_status TEXT NOT NULL DEFAULT 'queued',
                created_at TEXT NOT NULL
            )
            """
        )

        if not _table_has_column(connection, "leads", "telegram_status"):
            connection.execute(
                "ALTER TABLE leads ADD COLUMN telegram_status TEXT NOT NULL DEFAULT 'queued'"
            )


def _row_to_lead(row: sqlite3.Row) -> dict[str, Any]:
    contact = json.loads(row["contact_json"])
    return {
        "lead_id": row["lead_id"],
        "idempotency_key": row["idempotency_key"],
        "session_id": row["session_id"],
        "quiz_id": row["quiz_id"],
        "contact": contact,
        "answers": json.loads(row["answers_json"]),
        "pricing": json.loads(row["pricing_json"]) if row["pricing_json"] else None,
        "source": row["source"],
        "status": row["status"],
        "telegram_status": row["telegram_status"]
        if "telegram_status" in row.keys()
        else row["status"],
        "created_at": row["created_at"],
    }


def validate_lead_payload(data: dict[str, Any]) -> ValidationResult:
    issues: list[ValidationIssue] = []
    contact = data.get("contact")

    if not is_non_empty_string(data.get("session_id")):
        issues.append(issue("session_id", "Session id is required."))
    if not is_non_empty_string(data.get("idempotency_key")):
        issues.append(issue("idempotency_key", "Idempotency key is required."))
    if not isinstance(contact, dict):
        issues.append(issue("contact", "Contact must be an object."))
        return invalid(issues)

    if not is_non_empty_string(contact.get("name")):
        issues.append(issue("contact.name", "Name is required."))
    if not is_non_empty_string(contact.get("email")):
        issues.append(issue("contact.email", "Email is required."))
    elif "@" not in contact["email"]:
        issues.append(issue("contact.email", "Email must contain @."))

    return ValidationResult(ok=len(issues) == 0, issues=issues)


def create_lead(data: dict[str, Any]) -> dict[str, Any]:
    init_lead_storage()
    validation = validate_lead_payload(data)
    if not validation.ok:
        raise ValueError(validation.to_dict())

    session = get_quiz_session(data["session_id"])
    lead_id = str(uuid4())
    created_at = datetime.now(UTC).isoformat()
    lead = {
        "lead_id": lead_id,
        "idempotency_key": data["idempotency_key"],
        "session_id": session["session_id"],
        "quiz_id": session["quiz_id"],
        "contact": data["contact"],
        "answers": session["state"].get("answers", {}),
        "pricing": session.get("pricing"),
        "source": data.get("source", "api"),
        "status": "new",
        "telegram_status": data.get("telegram_status", "queued"),
        "created_at": created_at,
    }

    with _connect() as connection:
        existing = connection.execute(
            "SELECT * FROM leads WHERE idempotency_key = ?",
            (lead["idempotency_key"],),
        ).fetchone()
        if existing:
            return _row_to_lead(existing)

        connection.execute(
            """
            INSERT INTO leads (
                lead_id,
                idempotency_key,
                session_id,
                quiz_id,
                contact_json,
                answers_json,
                pricing_json,
                source,
                status,
                created_at
            )
            VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
            """,
            (
                lead["lead_id"],
                lead["idempotency_key"],
                lead["session_id"],
                lead["quiz_id"],
                json.dumps(lead["contact"], ensure_ascii=False),
                json.dumps(lead["answers"], ensure_ascii=False),
                json.dumps(lead["pricing"], ensure_ascii=False)
                if lead["pricing"] is not None
                else None,
                lead["source"],
                lead["status"],
                lead["created_at"],
            ),
        )

    publish(lead_created_event(lead))
    return lead


def list_leads() -> list[dict[str, Any]]:
    init_lead_storage()
    with _connect() as connection:
        rows = connection.execute("SELECT * FROM leads ORDER BY created_at DESC").fetchall()

    return [_row_to_lead(row) for row in rows]


def query_leads(
    search: str = "",
    status: str = "all",
    source: str = "all",
    page: int = 1,
    page_size: int = 15,
) -> dict[str, Any]:
    search = search.strip()
    where_clauses: list[str] = []
    params: list[Any] = []

    if search:
        search_pattern = f"%{search}%"
        where_clauses.append(
            "(contact_json LIKE ? OR session_id LIKE ? OR quiz_id LIKE ? OR source LIKE ? OR idempotency_key LIKE ?)"
        )
        params.extend([search_pattern] * 5)

    if status and status != "all":
        where_clauses.append("telegram_status = ?")
        params.append(status)

    if source and source != "all":
        where_clauses.append("source = ?")
        params.append(source)

    where_clause = ""
    if where_clauses:
        where_clause = "WHERE " + " AND ".join(where_clauses)

    with _connect() as connection:
        total_row = connection.execute(
            f"SELECT COUNT(*) AS total FROM leads {where_clause}",
            params,
        ).fetchone()
        total = total_row["total"] if total_row else 0

        offset = (page - 1) * page_size
        rows = connection.execute(
            f"SELECT * FROM leads {where_clause} ORDER BY created_at DESC LIMIT ? OFFSET ?",
            [*params, page_size, offset],
        ).fetchall()

    total_pages = (total + page_size - 1) // page_size if page_size else 1

    return {
        "items": [_row_to_lead(row) for row in rows],
        "pagination": {
            "page": page,
            "page_size": page_size,
            "total": total,
            "total_pages": total_pages,
        },
    }


def get_leads_page(
    search: str = "",
    status: str = "all",
    source: str = "all",
    page: int = 1,
    page_size: int = 15,
) -> dict[str, Any]:
    """Backward-compatible wrapper used by routes/admin.py.

    Returns a dict with 'items' and 'pagination' (same shape as query_leads).
    """
    return query_leads(search=search, status=status, source=source, page=page, page_size=page_size)


def get_leads_summary() -> dict[str, Any]:
    with _connect() as connection:
        status_rows = connection.execute(
            "SELECT telegram_status, COUNT(*) AS count FROM leads GROUP BY telegram_status"
        ).fetchall()
        source_rows = connection.execute(
            "SELECT source, COUNT(*) AS count FROM leads GROUP BY source"
        ).fetchall()
        total_row = connection.execute("SELECT COUNT(*) AS total FROM leads").fetchone()

    return {
        "total": total_row["total"] if total_row else 0,
        "by_status": {row["telegram_status"]: row["count"] for row in status_rows},
        "by_source": {row["source"]: row["count"] for row in source_rows},
    }
