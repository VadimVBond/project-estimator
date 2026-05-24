from __future__ import annotations

from flask import Blueprint, jsonify

from routes.api_utils import get_json_body, validation_error_response
from services.quiz_service import (
    answer_quiz_session,
    create_quiz_session,
    get_next_question_for_session,
    get_quiz_schema,
    validate_quiz_schema,
)

bp = Blueprint("quiz", __name__, url_prefix="/api/quiz")


@bp.get("/schema")
def quiz_schema():
    try:
        schema = get_quiz_schema()
        return jsonify({"data": {"quiz_id": schema["id"], "schema": schema}})
    except ValueError as error:
        return validation_error_response(error.args[0])


@bp.post("/schema/validate")
def validate_schema():
    data, error_response = get_json_body()
    if error_response:
        return error_response, 400

    validation = validate_quiz_schema(data or {})
    return jsonify({"data": validation.to_dict()}), 200 if validation.ok else 400


@bp.post("/start")
def start_quiz():
    data, error_response = get_json_body()
    if error_response:
        return error_response, 400

    try:
        return jsonify({"data": create_quiz_session(data.get("quiz_id") if data else None)})
    except ValueError as error:
        return validation_error_response(error.args[0])


@bp.post("/next")
def next_quiz_step():
    data, error_response = get_json_body()
    if error_response:
        return error_response, 400

    try:
        return jsonify({"data": get_next_question_for_session((data or {}).get("session_id", ""))})
    except ValueError as error:
        return validation_error_response(error.args[0])


@bp.post("/answer")
def answer_quiz():
    data, error_response = get_json_body()
    if error_response:
        return error_response, 400

    try:
        return jsonify({"data": answer_quiz_session((data or {}).get("session_id", ""), (data or {}).get("answer"))})
    except ValueError as error:
        return validation_error_response(error.args[0])
