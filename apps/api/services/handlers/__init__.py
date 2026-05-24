from __future__ import annotations

import logging

from services.handlers.lead_created_handler import register_lead_handlers
from services.handlers.pricing_calculated_handler import register_pricing_handlers
from services.handlers.quiz_completed_handler import register_quiz_handlers
from services.handlers.telegram_handler import register_telegram_handlers

logger = logging.getLogger(__name__)

def register_all_handlers() -> None:
    """Register all event handlers to the central event bus."""
    logger.info("Registering event handlers...")
    
    register_lead_handlers()
    register_pricing_handlers()
    register_quiz_handlers()
    register_telegram_handlers()

