from __future__ import annotations

import logging
from typing import Any

from services.event_bus import subscribe

logger = logging.getLogger(__name__)

def on_quiz_completed(event: dict[str, Any]) -> None:
    """Placeholder handler for quiz_completed events."""
    payload = event.get("payload", {})
    session_id = payload.get("session_id")
    
    logger.debug(f"[Event: quiz_completed] Session: {session_id}")

def register_quiz_handlers() -> None:
    subscribe("quiz_completed", on_quiz_completed)
