from __future__ import annotations

import logging
from typing import Callable

from schemas.event import Event

logger = logging.getLogger(__name__)

EventHandler = Callable[[Event], None]

class EventBus:
    def __init__(self) -> None:
        self._subscribers: dict[str, list[EventHandler]] = {}

    def subscribe(self, event_type: str, handler: EventHandler) -> None:
        if event_type not in self._subscribers:
            self._subscribers[event_type] = []
        self._subscribers[event_type].append(handler)

    def publish(self, event: Event) -> None:
        if not event.type:
            logger.warning("Attempted to publish an event without a type.")
            return
        
        logger.info(f"Publishing event: [{event.type}] id={event.id}")
        
        handlers = self._subscribers.get(event.type, [])
        for handler in handlers:
            try:
                handler(event)
            except Exception as e:
                logger.error(f"Error handling event {event.type} with {handler.__name__}: {e}")

_event_bus = EventBus()

def subscribe(event_type: str, handler: EventHandler) -> None:
    """Subscribe a handler to an event type."""
    _event_bus.subscribe(event_type, handler)

def publish(event: Event) -> None:
    """Publish an event to all subscribed handlers."""
    _event_bus.publish(event)

