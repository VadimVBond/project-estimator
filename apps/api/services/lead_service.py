from __future__ import annotations

import json
import sqlite3
from datetime import UTC, datetime
from pathlib import Path
from typing import Any
from uuid import uuid4

from schemas.validation import ValidationIssue, ValidationResult, invalid, is_non_empty_string, issue
from services.quiz_service import get_quiz_session
from services.event_service import lead_created_event
from services.event_bus import publish

DB_PATH = Path(__file__).resolve().parents[1] / "db" / "project_estimator.sqlite3"


def _connect() -> sqlite3.Connection:
    DB_PATH.parent.mkdir(parents=True, exist_ok=True)
    connection = sqlite3.connect(DB_PATH)
    connection.row_factory = sqlite3.Row
    return connection


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
                created_at TEXT NOT NULL
            )
            """
        )


def _row_to_lead(row: sqlite3.Row) -> dict[str, Any]:
    return {
        "lead_id": row["lead_id"],
        "idempotency_key": row["idempotency_key"],
        "session_id": row["session_id"],
        "quiz_id": row["quiz_id"],
        "contact": json.loads(row["contact_json"]),
        "answers": json.loads(row["answers_json"]),
        "pricing": json.loads(row["pricing_json"]) if row["pricing_json"] else None,
        "source": row["source"],
        "status": row["status"],
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
                json.dumps(lead["pricing"], ensure_ascii=False) if lead["pricing"] is not None else None,
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
