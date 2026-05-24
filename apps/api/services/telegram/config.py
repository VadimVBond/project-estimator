from __future__ import annotations

import logging
import os

logger = logging.getLogger(__name__)

TELEGRAM_BOT_TOKEN: str = os.getenv("TELEGRAM_BOT_TOKEN", "")
TELEGRAM_ADMIN_CHAT_ID: str = os.getenv("TELEGRAM_ADMIN_CHAT_ID", "")


def is_configured() -> bool:
    """Return True if all required Telegram credentials are present."""
    configured = bool(TELEGRAM_BOT_TOKEN and TELEGRAM_ADMIN_CHAT_ID)
    if not configured:
        logger.warning(
            "Telegram is not configured. "
            "Set TELEGRAM_BOT_TOKEN and TELEGRAM_ADMIN_CHAT_ID environment variables."
        )
    return configured
