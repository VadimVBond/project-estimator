import { PROJECT_CATEGORIES, SUPPORTED_LOCALES } from "./constants";
import type { ContactLead, ProjectEstimateRequest, ValidationIssue, ValidationResult } from "./types";

const hasValue = (value: unknown): value is string => typeof value === "string" && value.trim().length > 0;

const isObject = (value: unknown): value is Record<string, unknown> =>
  typeof value === "object" && value !== null && !Array.isArray(value);

const issue = (path: string, message: string): ValidationIssue => ({ path, message });

export const isSupportedLocale = (value: unknown) =>
  typeof value === "string" && SUPPORTED_LOCALES.includes(value as never);

export const isProjectCategory = (value: unknown) =>
  typeof value === "string" && PROJECT_CATEGORIES.includes(value as never);

export function validateContactLead(value: unknown): ValidationResult {
  const issues: ValidationIssue[] = [];

  if (!isObject(value)) {
    return { ok: false, issues: [issue("lead", "Lead must be an object.")] };
  }

  if (!hasValue(value.name)) issues.push(issue("lead.name", "Name is required."));
  if (!hasValue(value.email)) issues.push(issue("lead.email", "Email is required."));

  // TODO: Replace the lightweight email check with a shared product validation rule.
  if (hasValue(value.email) && !value.email.includes("@")) {
    issues.push(issue("lead.email", "Email must contain @."));
  }

  return { ok: issues.length === 0, issues };
}

export function validateProjectEstimateRequest(value: unknown): ValidationResult {
  const issues: ValidationIssue[] = [];

  if (!isObject(value)) {
    return { ok: false, issues: [issue("request", "Request must be an object.")] };
  }

  if (!isProjectCategory(value.category)) issues.push(issue("category", "Unsupported project category."));
  if (!isSupportedLocale(value.locale)) issues.push(issue("locale", "Unsupported locale."));

  const leadResult = validateContactLead(value.lead);
  issues.push(...leadResult.issues);

  if (!isObject(value.answers)) issues.push(issue("answers", "Answers must be an object."));

  return { ok: issues.length === 0, issues };
}

export const isContactLead = (value: unknown): value is ContactLead => validateContactLead(value).ok;

export const isProjectEstimateRequest = (value: unknown): value is ProjectEstimateRequest =>
  validateProjectEstimateRequest(value).ok;
