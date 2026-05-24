from __future__ import annotations

from typing import Any

from schemas.event import Event


def format_lead_created_message(event: Event) -> str:
    """
    Pure presentation function: converts a lead_created Event into
    a Telegram HTML-formatted message string.
    No API logic. No side effects.
    """
    payload = event.payload
    lead_id = payload.get("lead_id", "Unknown")
    answers: dict[str, Any] = payload.get("answers", {})
    pricing = payload.get("pricing")

    timestamp = event.timestamp.strftime("%Y-%m-%d %H:%M:%S UTC")

    # Quiz answers summary
    if answers:
        summary_lines = [f"  — {key}: {value}" for key, value in answers.items()]
    else:
        summary_lines = ["  — No answers provided"]
    quiz_summary = "\n".join(summary_lines)

    # Estimated price
    if pricing and "total" in pricing and "currency" in pricing:
        price_est = f"{pricing['total']} {pricing['currency']}"
    else:
        price_est = "N/A"

    # Correlation footer for debugging and retry analysis
    correlation_line = (
        f"correlation_id: {event.correlation_id}"
        if event.correlation_id
        else "correlation_id: —"
    )

    return (
        f"🚨 <b>New Lead Created</b>\n\n"
        f"<b>Lead ID:</b> <code>{lead_id}</code>\n"
        f"<b>Estimated Price:</b> {price_est}\n"
        f"<b>Timestamp:</b> {timestamp}\n\n"
        f"<b>Quiz Summary:</b>\n{quiz_summary}\n\n"
        f"<i>── Event Metadata ──</i>\n"
        f"<code>event_id: {event.id}</code>\n"
        f"<code>{correlation_line}</code>"
    )
