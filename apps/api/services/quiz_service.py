from __future__ import annotations

from copy import deepcopy
from typing import Any
from uuid import uuid4

from schemas.validation import ValidationIssue, ValidationResult, invalid, is_non_empty_string, is_number, issue

DEFAULT_QUIZ_SCHEMA: dict[str, Any] = {
    "id": "project-estimator-v1",
    "version": "1.0.0",
    "startQuestionId": "projectType",
    "questions": [
        {
            "id": "projectType",
            "type": "single-choice",
            "title": "Project type",
            "required": True,
            "pricing": {"field": "projectType"},
            "options": [
                {"id": "landing-page", "label": "Landing page"},
                {"id": "corporate-website", "label": "Corporate website"},
                {"id": "ecommerce", "label": "E-commerce"},
                {"id": "saas", "label": "SaaS application"},
                {"id": "mobile-app", "label": "Mobile app"},
                {"id": "automation", "label": "Automation system"},
            ],
            "branches": [
                {
                    "when": {"questionId": "projectType", "operator": "equals", "value": "ecommerce"},
                    "next": "payments",
                },
                {
                    "when": {"questionId": "projectType", "operator": "equals", "value": "saas"},
                    "next": "auth",
                },
            ],
            "next": "multilingual",
        },
        {
            "id": "auth",
            "type": "boolean",
            "title": "Authentication required",
            "required": True,
            "pricing": {"featureId": "auth"},
            "next": "payments",
        },
        {
            "id": "payments",
            "type": "boolean",
            "title": "Payments required",
            "required": True,
            "pricing": {"featureId": "payments"},
            "next": "multilingual",
        },
        {
            "id": "multilingual",
            "type": "boolean",
            "title": "Multilingual content required",
            "required": True,
            "pricing": {"featureId": "multilingual"},
            "next": "complexity",
        },
        {
            "id": "complexity",
            "type": "single-choice",
            "title": "Project complexity",
            "required": True,
            "pricing": {"field": "complexity"},
            "options": [
                {"id": "low", "label": "Low"},
                {"id": "medium", "label": "Medium"},
                {"id": "high", "label": "High"},
                {"id": "enterprise", "label": "Enterprise"},
            ],
        },
    ],
}

CONDITION_OPERATORS = {"equals", "notEquals", "includes", "notIncludes", "exists", "notExists", "gt", "gte", "lt", "lte"}
QUESTION_TYPES = {"single-choice", "multi-choice", "text", "number", "boolean"}
DEFAULT_QUIZ_ID = DEFAULT_QUIZ_SCHEMA["id"]
_QUIZ_SCHEMAS: dict[str, dict[str, Any]] = {DEFAULT_QUIZ_ID: DEFAULT_QUIZ_SCHEMA}
_QUIZ_SESSIONS: dict[str, dict[str, Any]] = {}


def get_default_quiz_schema() -> dict[str, Any]:
    return deepcopy(DEFAULT_QUIZ_SCHEMA)


def get_quiz_schema(quiz_id: str | None = None) -> dict[str, Any]:
    selected_quiz_id = quiz_id or DEFAULT_QUIZ_ID
    schema = _QUIZ_SCHEMAS.get(selected_quiz_id)
    if not schema:
        raise ValueError({"ok": False, "issues": [{"path": "quiz_id", "message": "Unknown quiz id."}]})

    return deepcopy(schema)


def _question_by_id(schema: dict[str, Any], question_id: str) -> dict[str, Any] | None:
    return next((question for question in schema["questions"] if question["id"] == question_id), None)


def _evaluate_condition(condition: dict[str, Any], state: dict[str, Any]) -> bool:
    if "questionId" in condition and "operator" in condition:
        answer = state.get("answers", {}).get(condition["questionId"])
        operator = condition["operator"]
        expected = condition.get("value")

        if operator == "equals":
            return answer == expected
        if operator == "notEquals":
            return answer != expected
        if operator == "includes":
            return isinstance(answer, list) and expected in answer
        if operator == "notIncludes":
            return not isinstance(answer, list) or expected not in answer
        if operator == "exists":
            return answer not in (None, "")
        if operator == "notExists":
            return answer in (None, "")
        if operator == "gt":
            return is_number(answer) and is_number(expected) and answer > expected
        if operator == "gte":
            return is_number(answer) and is_number(expected) and answer >= expected
        if operator == "lt":
            return is_number(answer) and is_number(expected) and answer < expected
        if operator == "lte":
            return is_number(answer) and is_number(expected) and answer <= expected

    if "all" in condition:
        return all(_evaluate_condition(item, state) for item in condition["all"])
    if "any" in condition:
        return any(_evaluate_condition(item, state) for item in condition["any"])
    if "not" in condition:
        return not _evaluate_condition(condition["not"], state)

    return False


def _is_visible(question: dict[str, Any], state: dict[str, Any]) -> bool:
    visible_when = question.get("visibleWhen")
    return visible_when is None or _evaluate_condition(visible_when, state)


def validate_quiz_schema(schema: dict[str, Any]) -> ValidationResult:
    issues: list[ValidationIssue] = []

    if not isinstance(schema, dict):
        return invalid([issue("schema", "Quiz schema must be an object.")])

    if not is_non_empty_string(schema.get("id")):
        issues.append(issue("id", "Quiz schema id is required."))
    if not is_non_empty_string(schema.get("version")):
        issues.append(issue("version", "Quiz schema version is required."))
    if not isinstance(schema.get("questions"), list):
        issues.append(issue("questions", "Questions must be an array."))
        return invalid(issues)

    question_ids: set[str] = set()
    referenced_ids: set[str] = set()

    for index, question in enumerate(schema["questions"]):
        path = f"questions.{index}"
        if not isinstance(question, dict):
            issues.append(issue(path, "Question must be an object."))
            continue

        question_id = question.get("id")
        if not is_non_empty_string(question_id):
            issues.append(issue(f"{path}.id", "Question id is required."))
        elif question_id in question_ids:
            issues.append(issue(f"{path}.id", "Question id must be unique."))
        else:
            question_ids.add(question_id)

        if question.get("type") not in QUESTION_TYPES:
            issues.append(issue(f"{path}.type", "Unsupported question type."))
        if not is_non_empty_string(question.get("title")):
            issues.append(issue(f"{path}.title", "Question title is required."))

        if question.get("next"):
            referenced_ids.add(question["next"])
        for branch in question.get("branches", []):
            if not isinstance(branch, dict) or not is_non_empty_string(branch.get("next")):
                issues.append(issue(f"{path}.branches", "Branch must contain next question id."))
            else:
                referenced_ids.add(branch["next"])

    if schema.get("startQuestionId"):
        referenced_ids.add(schema["startQuestionId"])

    for question_id in referenced_ids:
        if question_id not in question_ids:
            issues.append(issue("questions", f'Referenced question "{question_id}" does not exist.'))

    return ValidationResult(ok=len(issues) == 0, issues=issues)


def validate_answer(question: dict[str, Any], answer: Any) -> ValidationResult:
    issues: list[ValidationIssue] = []
    question_id = question["id"]

    if answer in (None, ""):
        if question.get("required"):
            issues.append(issue(question_id, "Answer is required."))
        return ValidationResult(ok=len(issues) == 0, issues=issues)

    question_type = question["type"]
    if question_type == "text" and not isinstance(answer, str):
        issues.append(issue(question_id, "Answer must be a string."))
    if question_type == "number" and not is_number(answer):
        issues.append(issue(question_id, "Answer must be a number."))
    if question_type == "boolean" and not isinstance(answer, bool):
        issues.append(issue(question_id, "Answer must be a boolean."))
    if question_type == "single-choice":
        option_ids = {option["id"] for option in question.get("options", [])}
        if answer not in option_ids:
            issues.append(issue(question_id, "Answer must match one option id."))
    if question_type == "multi-choice":
        option_ids = {option["id"] for option in question.get("options", [])}
        if not isinstance(answer, list) or any(item not in option_ids for item in answer):
            issues.append(issue(question_id, "Answer must be an array of option ids."))

    return ValidationResult(ok=len(issues) == 0, issues=issues)


def create_initial_state(schema: dict[str, Any] | None = None) -> dict[str, Any]:
    schema = schema or DEFAULT_QUIZ_SCHEMA
    validation = validate_quiz_schema(schema)
    if not validation.ok:
        raise ValueError(validation.to_dict())

    state = {"schemaId": schema["id"], "answers": {}, "history": [], "isComplete": False}
    next_question_id = resolve_next_question_id(schema, state)
    state["currentQuestionId"] = next_question_id
    state["isComplete"] = next_question_id is None
    return state


def create_quiz_session(quiz_id: str | None = None) -> dict[str, Any]:
    schema = get_quiz_schema(quiz_id)
    state = create_initial_state(schema)
    session_id = str(uuid4())
    session = {
        "session_id": session_id,
        "quiz_id": schema["id"],
        "schema": schema,
        "state": state,
        "pricing": None,
    }
    _QUIZ_SESSIONS[session_id] = session

    return _public_session(session)


def get_quiz_session(session_id: str) -> dict[str, Any]:
    session = _QUIZ_SESSIONS.get(session_id)
    if not session:
        raise ValueError({"ok": False, "issues": [{"path": "session_id", "message": "Unknown quiz session."}]})

    return session


def _public_session(session: dict[str, Any]) -> dict[str, Any]:
    return {
        "session_id": session["session_id"],
        "quiz_id": session["quiz_id"],
        "state": deepcopy(session["state"]),
        "pricing": deepcopy(session.get("pricing")),
    }


def resolve_next_question_id(schema: dict[str, Any], state: dict[str, Any]) -> str | None:
    if state.get("isComplete"):
        return None

    current_question_id = state.get("currentQuestionId")
    if not current_question_id:
        start_question_id = schema.get("startQuestionId")
        if start_question_id:
            start_question = _question_by_id(schema, start_question_id)
            if start_question and _is_visible(start_question, state):
                return start_question_id
        first_visible = next((question for question in schema["questions"] if _is_visible(question, state)), None)
        return first_visible["id"] if first_visible else None

    current_question = _question_by_id(schema, current_question_id)
    if not current_question:
        return None

    for branch in current_question.get("branches", []):
        if _evaluate_condition(branch["when"], state):
            return branch["next"]

    if current_question.get("next"):
        return current_question["next"]

    current_index = schema["questions"].index(current_question)
    for question in schema["questions"][current_index + 1 :]:
        if _is_visible(question, state):
            return question["id"]

    return None


def answer_current_question(schema: dict[str, Any], state: dict[str, Any], answer: Any) -> dict[str, Any]:
    current_question_id = state.get("currentQuestionId")
    if not current_question_id:
        return state

    question = _question_by_id(schema, current_question_id)
    if not question:
        raise ValueError({"ok": False, "issues": [{"path": "currentQuestionId", "message": "Unknown question."}]})

    validation = validate_answer(question, answer)
    if not validation.ok:
        raise ValueError(validation.to_dict())

    next_state = {
        **state,
        "answers": {**state.get("answers", {}), current_question_id: answer},
        "history": [*state.get("history", []), current_question_id],
    }
    next_question_id = resolve_next_question_id(schema, next_state)
    next_state["currentQuestionId"] = next_question_id
    next_state["isComplete"] = next_question_id is None
    return next_state


def answer_quiz_session(session_id: str, answer: Any) -> dict[str, Any]:
    session = get_quiz_session(session_id)
    session["state"] = answer_current_question(session["schema"], session["state"], answer)

    return _public_session(session)


def get_next_question_for_session(session_id: str) -> dict[str, Any]:
    session = get_quiz_session(session_id)
    next_question_id = resolve_next_question_id(session["schema"], session["state"])

    return {"session_id": session_id, "quiz_id": session["quiz_id"], "nextQuestionId": next_question_id}


def build_pricing_payload_for_session(session_id: str) -> dict[str, Any]:
    session = get_quiz_session(session_id)
    schema = session["schema"]
    answers = session["state"].get("answers", {})
    payload: dict[str, Any] = {"features": []}

    for question in schema["questions"]:
        answer = answers.get(question["id"])
        pricing = question.get("pricing")
        if not pricing or answer in (None, ""):
            continue

        if pricing.get("field") == "projectType" and isinstance(answer, str):
            payload["projectType"] = answer
        if pricing.get("field") == "stack" and isinstance(answer, str):
            payload["stack"] = answer
        if pricing.get("field") == "complexity" and isinstance(answer, str):
            payload["complexity"] = answer

        feature_id = pricing.get("featureId")
        if feature_id and answer is True:
            payload["features"].append(feature_id)
        if feature_id and isinstance(answer, list) and feature_id in answer:
            payload["features"].append(feature_id)

    return payload


def attach_pricing_to_session(session_id: str, pricing: dict[str, Any]) -> dict[str, Any]:
    session = get_quiz_session(session_id)
    session["pricing"] = pricing

    return _public_session(session)
