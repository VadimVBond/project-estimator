from __future__ import annotations

import logging
import urllib.error
import urllib.parse
import urllib.request
import json

from services.telegram.models import TelegramDeliveryResult

logger = logging.getLogger(__name__)

# Transport-layer constants — no business logic here
_CONNECT_TIMEOUT = 3   # seconds
_READ_TIMEOUT = 10     # seconds
_TELEGRAM_API_BASE = "https://api.telegram.org"


class TelegramClient:
    """
    Pure transport adapter for the Telegram Bot API.
    Knows only about text delivery — no Event objects, no business logic.
    """

    def __init__(self, bot_token: str) -> None:
        self._bot_token = bot_token
        self._base_url = f"{_TELEGRAM_API_BASE}/bot{bot_token}"

    def send_message(
        self,
        chat_id: str,
        text: str,
        parse_mode: str = "HTML",
    ) -> TelegramDeliveryResult:
        """
        Send a text message to a Telegram chat.
        Always returns TelegramDeliveryResult — never raises.
        """
        url = f"{self._base_url}/sendMessage"
        payload = json.dumps({
            "chat_id": chat_id,
            "text": text,
            "parse_mode": parse_mode,
        }).encode("utf-8")

        req = urllib.request.Request(
            url,
            data=payload,
            headers={"Content-Type": "application/json"},
            method="POST",
        )

        try:
            with urllib.request.urlopen(
                req,
                timeout=_CONNECT_TIMEOUT + _READ_TIMEOUT,
            ) as response:
                status_code = response.status
                body = json.loads(response.read().decode("utf-8"))

                if body.get("ok"):
                    message_id = str(body["result"].get("message_id", ""))
                    logger.info(
                        f"[Telegram Client] Message delivered. "
                        f"status={status_code} message_id={message_id}"
                    )
                    return TelegramDeliveryResult(
                        success=True,
                        status_code=status_code,
                        telegram_message_id=message_id,
                    )
                else:
                    description = body.get("description", "Unknown Telegram error")
                    logger.error(
                        f"[Telegram Client] Delivery failed. "
                        f"status={status_code} error={description}"
                    )
                    return TelegramDeliveryResult(
                        success=False,
                        status_code=status_code,
                        error=description,
                    )

        except urllib.error.HTTPError as e:
            logger.error(
                f"[Telegram Client] HTTP error: status={e.code} reason={e.reason}"
            )
            return TelegramDeliveryResult(
                success=False,
                status_code=e.code,
                error=str(e.reason),
            )

        except TimeoutError as e:
            logger.error(f"[Telegram Client] Request timed out: {e}")
            return TelegramDeliveryResult(
                success=False,
                error="Request timed out",
            )

        except Exception as e:
            logger.error(f"[Telegram Client] Unexpected error: {e}", exc_info=True)
            return TelegramDeliveryResult(
                success=False,
                error=str(e),
            )
