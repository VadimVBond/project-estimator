from __future__ import annotations

from copy import deepcopy
from typing import Any

from schemas.validation import ValidationIssue, ValidationResult, invalid, is_non_empty_string, is_number, issue, ok
from services.quiz_service import attach_pricing_to_session, build_pricing_payload_for_session

DEFAULT_STACK_ID = "standard"
DEFAULT_COMPLEXITY_ID = "medium"

DEFAULT_PRICING_RULES: dict[str, Any] = {
    "currency": "USD",
    "projectTypes": {
        "landing-page": {"id": "landing-page", "label": "Landing page", "basePrice": 1200},
        "corporate-website": {"id": "corporate-website", "label": "Corporate website", "basePrice": 3000},
        "ecommerce": {"id": "ecommerce", "label": "E-commerce", "basePrice": 5500},
        "saas": {"id": "saas", "label": "SaaS application", "basePrice": 9000},
        "mobile-app": {"id": "mobile-app", "label": "Mobile app", "basePrice": 8000},
        "automation": {"id": "automation", "label": "Automation system", "basePrice": 4500},
    },
    "features": {
        "auth": {
            "id": "auth",
            "label": "Authentication",
            "amount": 900,
            "appliesTo": ["saas", "mobile-app", "ecommerce", "automation"],
        },
        "payments": {
            "id": "payments",
            "label": "Payments",
            "amount": 1400,
            "appliesTo": ["saas", "mobile-app", "ecommerce"],
        },
        "dashboard": {
            "id": "dashboard",
            "label": "Dashboard",
            "amount": 1600,
            "appliesTo": ["saas", "automation", "ecommerce"],
        },
        "cms": {
            "id": "cms",
            "label": "CMS",
            "amount": 1000,
            "appliesTo": ["landing-page", "corporate-website", "ecommerce"],
        },
        "multilingual": {"id": "multilingual", "label": "Multilingual content", "amount": 700},
        "ai-assistant": {
            "id": "ai-assistant",
            "label": "AI assistant",
            "amount": 2200,
            "appliesTo": ["saas", "automation", "corporate-website"],
        },
        "integrations": {"id": "integrations", "label": "Third-party integrations", "amount": 1100},
    },
    "stacks": {
        "standard": {"id": "standard", "label": "Standard stack", "multiplier": 1},
        "custom-backend": {"id": "custom-backend", "label": "Custom backend", "multiplier": 1.2},
        "full-stack": {"id": "full-stack", "label": "Full-stack product", "multiplier": 1.35},
        "high-load": {"id": "high-load", "label": "High-load architecture", "multiplier": 1.6},
    },
    "complexities": {
        "low": {"id": "low", "label": "Low complexity", "coefficient": 0.85},
        "medium": {"id": "medium", "label": "Medium complexity", "coefficient": 1},
        "high": {"id": "high", "label": "High complexity", "coefficient": 1.35},
        "enterprise": {"id": "enterprise", "label": "Enterprise complexity", "coefficient": 1.8},
    },
    "rounding": {"increment": 50},
}


def get_pricing_rules() -> dict[str, Any]:
    return deepcopy(DEFAULT_PRICING_RULES)


def _normalize_feature(feature: Any) -> dict[str, Any]:
    if isinstance(feature, str):
        return {"id": feature, "quantity": 1}

    if isinstance(feature, dict):
        return {"id": feature.get("id"), "quantity": feature.get("quantity", 1)}

    return {"id": None, "quantity": None}


def validate_pricing_input(data: dict[str, Any], rules: dict[str, Any] | None = None) -> ValidationResult:
    rules = rules or DEFAULT_PRICING_RULES
    issues: list[ValidationIssue] = []

    project_type = data.get("projectType")
    stack = data.get("stack", DEFAULT_STACK_ID)
    complexity = data.get("complexity", DEFAULT_COMPLEXITY_ID)
    features = data.get("features", [])

    if not is_non_empty_string(project_type):
        issues.append(issue("projectType", "Project type is required."))
    elif project_type not in rules["projectTypes"]:
        issues.append(issue("projectType", f'Unknown project type "{project_type}".'))

    if not is_non_empty_string(stack) or stack not in rules["stacks"]:
        issues.append(issue("stack", f'Unknown stack "{stack}".'))

    if not is_non_empty_string(complexity) or complexity not in rules["complexities"]:
        issues.append(issue("complexity", f'Unknown complexity "{complexity}".'))

    if not isinstance(features, list):
        issues.append(issue("features", "Features must be an array."))
        return invalid(issues)

    for index, raw_feature in enumerate(features):
        feature = _normalize_feature(raw_feature)
        feature_id = feature["id"]
        quantity = feature["quantity"]

        if not is_non_empty_string(feature_id):
            issues.append(issue(f"features.{index}.id", "Feature id is required."))
            continue

        feature_rule = rules["features"].get(feature_id)
        if feature_rule is None:
            issues.append(issue(f"features.{index}", f'Unknown feature "{feature_id}".'))
            continue

        applies_to = feature_rule.get("appliesTo")
        if applies_to and project_type not in applies_to:
            issues.append(
                issue(
                    f"features.{index}",
                    f'Feature "{feature_id}" does not apply to project type "{project_type}".',
                )
            )

        if not is_number(quantity) or quantity <= 0:
            issues.append(issue(f"features.{index}.quantity", "Feature quantity must be greater than zero."))

    return ValidationResult(ok=len(issues) == 0, issues=issues)


def estimate_project(data: dict[str, Any], rules: dict[str, Any] | None = None) -> dict[str, Any]:
    rules = rules or DEFAULT_PRICING_RULES
    validation = validate_pricing_input(data, rules)
    if not validation.ok:
        raise ValueError(validation.to_dict())

    project_type = rules["projectTypes"][data["projectType"]]
    stack = rules["stacks"][data.get("stack", DEFAULT_STACK_ID)]
    complexity = rules["complexities"][data.get("complexity", DEFAULT_COMPLEXITY_ID)]
    currency = data.get("currency", rules["currency"])

    line_items = [
        {
            "id": project_type["id"],
            "kind": "base",
            "label": project_type["label"],
            "amount": project_type["basePrice"],
        }
    ]

    for raw_feature in data.get("features", []):
        feature = _normalize_feature(raw_feature)
        rule = rules["features"][feature["id"]]
        quantity = feature["quantity"]
        line_items.append(
            {
                "id": rule["id"],
                "kind": "feature",
                "label": rule["label"],
                "amount": rule["amount"] * quantity,
                "quantity": quantity,
                "rate": rule["amount"],
            }
        )

    base_subtotal = project_type["basePrice"]
    feature_subtotal = sum(item["amount"] for item in line_items if item["kind"] == "feature")
    subtotal_before_coefficients = base_subtotal + feature_subtotal

    stack_amount = subtotal_before_coefficients * (stack["multiplier"] - 1)
    line_items.append(
        {
            "id": stack["id"],
            "kind": "stack",
            "label": stack["label"],
            "amount": stack_amount,
            "rate": stack["multiplier"],
        }
    )

    subtotal_after_stack = subtotal_before_coefficients + stack_amount
    complexity_amount = subtotal_after_stack * (complexity["coefficient"] - 1)
    line_items.append(
        {
            "id": complexity["id"],
            "kind": "complexity",
            "label": complexity["label"],
            "amount": complexity_amount,
            "rate": complexity["coefficient"],
        }
    )

    subtotal_after_coefficients = subtotal_after_stack + complexity_amount
    increment = rules.get("rounding", {}).get("increment")
    total = round(subtotal_after_coefficients / increment) * increment if increment else subtotal_after_coefficients
    rounding_adjustment = total - subtotal_after_coefficients

    if rounding_adjustment:
        line_items.append({"id": "rounding", "kind": "rounding", "label": "Rounding", "amount": rounding_adjustment})

    return {
        "total": total,
        "currency": currency,
        "projectType": project_type["id"],
        "stack": stack["id"],
        "complexity": complexity["id"],
        "lineItems": line_items,
        "breakdown": {
            "baseSubtotal": base_subtotal,
            "featureSubtotal": feature_subtotal,
            "subtotalBeforeCoefficients": subtotal_before_coefficients,
            "stackMultiplier": stack["multiplier"],
            "complexityCoefficient": complexity["coefficient"],
            "subtotalAfterCoefficients": subtotal_after_coefficients,
            "roundingAdjustment": rounding_adjustment,
        },
    }


def estimate_project_for_session(session_id: str, rules: dict[str, Any] | None = None) -> dict[str, Any]:
    payload = build_pricing_payload_for_session(session_id)
    pricing = estimate_project(payload, rules)
    attach_pricing_to_session(session_id, pricing)

    return pricing
