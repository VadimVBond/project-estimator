from __future__ import annotations

import logging
from typing import Any

from services.event_bus import subscribe

logger = logging.getLogger(__name__)

def on_pricing_calculated(event: dict[str, Any]) -> None:
    """Placeholder handler for pricing_calculated events."""
    payload = event.get("payload", {})
    session_id = payload.get("session_id")
    
    logger.debug(f"[Event: pricing_calculated] Session: {session_id}")

def register_pricing_handlers() -> None:
    subscribe("pricing_calculated", on_pricing_calculated)
