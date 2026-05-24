from __future__ import annotations

from typing import Any

from flask import Response, jsonify, request

from schemas.validation import require_json_object


def get_json_body() -> tuple[dict[str, Any] | None, Response | None]:
    data = request.get_json(silent=True)
    validation = require_json_object(data)
    if not validation.ok:
        return None, jsonify({"error": "validation_error", **validation.to_dict()})

    return data, None


def validation_error_response(details: Any, status: int = 400) -> tuple[Response, int]:
    if isinstance(details, dict):
        return jsonify({"error": "validation_error", **details}), status

    return jsonify({"error": "validation_error", "message": str(details)}), status
