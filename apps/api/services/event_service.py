from __future__ import annotations

from typing import Any

from schemas.event import Event


def build_event(event_type: str, payload: dict[str, Any]) -> Event:
    return Event(
        type=event_type,
        payload=payload,
    )


def lead_created_event(lead: dict[str, Any]) -> Event:
    return build_event(
        "lead_created",
        {
            "lead_id": lead["lead_id"],
            "session_id": lead["session_id"],
            "quiz_id": lead["quiz_id"],
            "status": lead["status"],
            "answers": lead.get("answers", {}),
            "pricing": lead.get("pricing"),
        },
    )


def quiz_completed_event(session: dict[str, Any]) -> Event:
    return build_event(
        "quiz_completed",
        {
            "session_id": session["session_id"],
            "quiz_id": session["quiz_id"],
        },
    )


def pricing_calculated_event(session_id: str, pricing: dict[str, Any]) -> Event:
    return build_event(
        "pricing_calculated",
        {
            "session_id": session_id,
            "total": pricing["total"],
            "currency": pricing["currency"],
        },
    )
