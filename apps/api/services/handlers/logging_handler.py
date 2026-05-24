from __future__ import annotations

import logging

from schemas.event import Event
from services.event_bus import subscribe

logger = logging.getLogger(__name__)

def handle_logging(event: Event) -> None:
    """A generic handler that logs all events for debugging and auditing."""
    logger.info(f"Event Received: [{event.type}] id={event.id}")

def register_logging_handlers() -> None:
    """Register logging handlers to the event bus."""
    subscribe("lead_created", handle_logging)
    subscribe("quiz_completed", handle_logging)
    subscribe("pricing_calculated", handle_logging)
