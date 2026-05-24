from __future__ import annotations

from dataclasses import dataclass


@dataclass
class TelegramDeliveryResult:
    """Structured result of a Telegram message delivery attempt."""
    success: bool
    status_code: int | None = None
    error: str | None = None
    telegram_message_id: str | None = None
