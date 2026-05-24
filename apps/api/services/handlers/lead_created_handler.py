from __future__ import annotations

import logging

from schemas.event import Event
from services.event_bus import subscribe

logger = logging.getLogger(__name__)

def on_lead_created(event: Event) -> None:
    """Handler for lead_created events."""
    lead_id = event.payload.get("lead_id")
    
    logger.info(f"[Event: lead_created] Processing lead_id={lead_id} (event.id={event.id})")
    
    # Placeholder for Telegram integration
    # Telegram will be called here in the future
    logger.debug("Telegram handler stub: would send message to Telegram")

def register_lead_handlers() -> None:
    subscribe("lead_created", on_lead_created)
