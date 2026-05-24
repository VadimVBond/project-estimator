from __future__ import annotations

from flask import Blueprint, jsonify

from routes.api_utils import get_json_body, validation_error_response
from services.event_service import lead_created_event
from services.lead_service import create_lead, list_leads, validate_lead_payload

bp = Blueprint("leads", __name__)


@bp.get("/api/leads")
def get_leads():
    return jsonify({"data": list_leads()})


@bp.post("/api/leads/validate")
def validate_lead():
    data, error_response = get_json_body()
    if error_response:
        return error_response, 400

    validation = validate_lead_payload(data or {})
    return jsonify({"data": validation.to_dict()}), 200 if validation.ok else 400


@bp.post("/api/leads/create")
def post_lead():
    data, error_response = get_json_body()
    if error_response:
        return error_response, 400

    try:
        lead = create_lead(data or {})
        return jsonify({"data": lead}), 201
    except ValueError as error:
        return validation_error_response(error.args[0])
