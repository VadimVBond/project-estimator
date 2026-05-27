from __future__ import annotations

from flask import Blueprint, jsonify

from routes.api_utils import get_json_body, validation_error_response
from services.event_service import pricing_calculated_event
from services.pricing_service import (
    estimate_project,
    estimate_project_for_session,
    get_pricing_rules,
    validate_pricing_input,
)

bp = Blueprint("pricing", __name__, url_prefix="/api/pricing")


@bp.get("/rules")
def pricing_rules():
    return jsonify({"data": get_pricing_rules()})


@bp.post("/validate")
def validate_pricing():
    data, error_response = get_json_body()
    if error_response:
        return error_response, 400

    validation = validate_pricing_input(data or {})
    return jsonify({"data": validation.to_dict()}), 200 if validation.ok else 400


@bp.post("/calculate")
def calculate_pricing():
    data, error_response = get_json_body()
    if error_response:
        return error_response, 400

    try:
        pricing = estimate_project(data or {})
        return jsonify({"data": pricing}), 200
    except ValueError as error:
        return validation_error_response(error.args[0])


@bp.post("/estimate")
def estimate_pricing():
    data, error_response = get_json_body()
    if error_response:
        return error_response, 400

    try:
        pricing = estimate_project_for_session((data or {}).get("session_id", ""))
        return jsonify({"data": pricing, "event": pricing_calculated_event((data or {}).get("session_id", ""), pricing)})
    except ValueError as error:
        return validation_error_response(error.args[0])
