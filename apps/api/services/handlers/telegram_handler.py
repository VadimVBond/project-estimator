from __future__ import annotations

import logging

from schemas.event import Event
from services.event_bus import subscribe
from services.telegram import config as telegram_config
from services.telegram.client import TelegramClient
from services.telegram.formatter import format_lead_created_message

logger = logging.getLogger(__name__)

# Singleton client — initialized lazily to avoid startup failures
# when env vars are not yet set during import
_client: TelegramClient | None = None


def _get_client() -> TelegramClient | None:
    """Return a configured TelegramClient, or None if not configured."""
    global _client
    if not telegram_config.is_configured():
        return None
    if _client is None:
        _client = TelegramClient(bot_token=telegram_config.TELEGRAM_BOT_TOKEN)
    return _client


def handle_telegram_notification(event: Event) -> None:
    """
    Pure event subscriber for lead_created.
    Orchestration only: format → send → log result.
    No formatting logic. No HTTP logic. No business logic.
    """
    try:
        lead_id = event.payload.get("lead_id", "unknown")

        client = _get_client()
        if client is None:
            logger.warning(
                f"[Telegram Handler] Skipping delivery — Telegram not configured. "
                f"event_id={event.id} lead_id={lead_id}"
            )
            return

        text = format_lead_created_message(event)

        result = client.send_message(
            chat_id=telegram_config.TELEGRAM_ADMIN_CHAT_ID,
            text=text,
        )

        # Delivery correlation logging
        if result.success:
            logger.info(
                f"[Telegram Handler] Delivered. "
                f"event_id={event.id} lead_id={lead_id} "
                f"status={result.status_code} "
                f"telegram_message_id={result.telegram_message_id}"
            )
        else:
            logger.error(
                f"[Telegram Handler] Delivery failed. "
                f"event_id={event.id} lead_id={lead_id} "
                f"status={result.status_code} error={result.error}"
            )

    except Exception as e:
        # Safety net: NEVER crash the Event Bus
        logger.error(
            f"[Telegram Handler] Unexpected failure for event_id={event.id}: {e}",
            exc_info=True,
        )


def register_telegram_handlers() -> None:
    """Register telegram handlers to the event bus."""
    subscribe("lead_created", handle_telegram_notification)

