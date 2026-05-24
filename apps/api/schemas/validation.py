from __future__ import annotations

from dataclasses import dataclass
from typing import Any


@dataclass(frozen=True)
class ValidationIssue:
    path: str
    message: str

    def to_dict(self) -> dict[str, str]:
        return {"path": self.path, "message": self.message}


@dataclass(frozen=True)
class ValidationResult:
    ok: bool
    issues: list[ValidationIssue]

    def to_dict(self) -> dict[str, Any]:
        return {"ok": self.ok, "issues": [issue.to_dict() for issue in self.issues]}


def issue(path: str, message: str) -> ValidationIssue:
    return ValidationIssue(path=path, message=message)


def ok() -> ValidationResult:
    return ValidationResult(ok=True, issues=[])


def invalid(issues: list[ValidationIssue]) -> ValidationResult:
    return ValidationResult(ok=False, issues=issues)


def is_object(value: Any) -> bool:
    return isinstance(value, dict)


def is_non_empty_string(value: Any) -> bool:
    return isinstance(value, str) and len(value.strip()) > 0


def is_number(value: Any) -> bool:
    return isinstance(value, int | float) and not isinstance(value, bool)


def require_json_object(value: Any, path: str = "body") -> ValidationResult:
    if is_object(value):
        return ok()

    return invalid([issue(path, "JSON body must be an object.")])
