import { DEFAULT_COMPLEXITY_ID, DEFAULT_STACK_ID } from "./rules";
import type {
  FeatureSelection,
  PricingEstimateInput,
  PricingRules,
  ValidationIssue,
  ValidationResult,
} from "./types";

const isObject = (value: unknown): value is Record<string, unknown> =>
  typeof value === "object" && value !== null && !Array.isArray(value);

const isNonEmptyString = (value: unknown): value is string =>
  typeof value === "string" && value.trim().length > 0;

const issue = (path: string, message: string): ValidationIssue => ({ path, message });

const isPositiveNumber = (value: unknown) => typeof value === "number" && Number.isFinite(value) && value >= 0;

export function isFeatureSelection(value: unknown): value is FeatureSelection {
  if (typeof value === "string") return value.trim().length > 0;
  if (!isObject(value)) return false;

  return isNonEmptyString(value.id) && (value.quantity === undefined || isPositiveNumber(value.quantity));
}

export function isPricingEstimateInput(value: unknown): value is PricingEstimateInput {
  if (typeof value !== "object" || value === null || Array.isArray(value)) return false;

  const input = value as Record<string, unknown>;
  const hasValidFeatures = input.features === undefined || (Array.isArray(input.features) && input.features.every(isFeatureSelection));

  return (
    isNonEmptyString(input.projectType) &&
    hasValidFeatures &&
    (input.stack === undefined || isNonEmptyString(input.stack)) &&
    (input.complexity === undefined || isNonEmptyString(input.complexity)) &&
    (input.currency === undefined || isNonEmptyString(input.currency))
  );
}

export function validatePricingRules(rules: PricingRules): ValidationResult {
  const issues: ValidationIssue[] = [];

  if (!isObject(rules)) return { ok: false, issues: [issue("rules", "Rules must be an object.")] };
  if (!isNonEmptyString(rules.currency)) issues.push(issue("currency", "Default currency is required."));

  Object.entries(rules.projectTypes ?? {}).forEach(([id, rule]) => {
    if (rule.id !== id) issues.push(issue(`projectTypes.${id}.id`, "Project type id must match its key."));
    if (!isNonEmptyString(rule.label)) issues.push(issue(`projectTypes.${id}.label`, "Project type label is required."));
    if (!isPositiveNumber(rule.basePrice)) issues.push(issue(`projectTypes.${id}.basePrice`, "Base price must be a positive number."));
  });

  Object.entries(rules.features ?? {}).forEach(([id, rule]) => {
    if (rule.id !== id) issues.push(issue(`features.${id}.id`, "Feature id must match its key."));
    if (!isNonEmptyString(rule.label)) issues.push(issue(`features.${id}.label`, "Feature label is required."));
    if (!isPositiveNumber(rule.amount)) issues.push(issue(`features.${id}.amount`, "Feature amount must be a positive number."));
    rule.appliesTo?.forEach((projectTypeId) => {
      if (!rules.projectTypes[projectTypeId]) {
        issues.push(issue(`features.${id}.appliesTo`, `Unknown project type "${projectTypeId}".`));
      }
    });
  });

  Object.entries(rules.stacks ?? {}).forEach(([id, rule]) => {
    if (rule.id !== id) issues.push(issue(`stacks.${id}.id`, "Stack id must match its key."));
    if (!isNonEmptyString(rule.label)) issues.push(issue(`stacks.${id}.label`, "Stack label is required."));
    if (typeof rule.multiplier !== "number" || rule.multiplier <= 0) {
      issues.push(issue(`stacks.${id}.multiplier`, "Stack multiplier must be greater than zero."));
    }
  });

  Object.entries(rules.complexities ?? {}).forEach(([id, rule]) => {
    if (rule.id !== id) issues.push(issue(`complexities.${id}.id`, "Complexity id must match its key."));
    if (!isNonEmptyString(rule.label)) issues.push(issue(`complexities.${id}.label`, "Complexity label is required."));
    if (typeof rule.coefficient !== "number" || rule.coefficient <= 0) {
      issues.push(issue(`complexities.${id}.coefficient`, "Complexity coefficient must be greater than zero."));
    }
  });

  if (!rules.stacks?.[DEFAULT_STACK_ID]) issues.push(issue("stacks.standard", "Default stack rule is required."));
  if (!rules.complexities?.[DEFAULT_COMPLEXITY_ID]) {
    issues.push(issue("complexities.medium", "Default complexity rule is required."));
  }
  if (rules.rounding && (!isPositiveNumber(rules.rounding.increment) || rules.rounding.increment === 0)) {
    issues.push(issue("rounding.increment", "Rounding increment must be greater than zero."));
  }

  return { ok: issues.length === 0, issues };
}

export function validatePricingEstimateInput(input: PricingEstimateInput, rules: PricingRules): ValidationResult {
  const issues: ValidationIssue[] = [];

  if (!isPricingEstimateInput(input)) {
    return { ok: false, issues: [issue("input", "Pricing input has invalid shape.")] };
  }

  if (!rules.projectTypes[input.projectType]) issues.push(issue("projectType", `Unknown project type "${input.projectType}".`));
  if (!rules.stacks[input.stack ?? DEFAULT_STACK_ID]) issues.push(issue("stack", `Unknown stack "${input.stack}".`));
  if (!rules.complexities[input.complexity ?? DEFAULT_COMPLEXITY_ID]) {
    issues.push(issue("complexity", `Unknown complexity "${input.complexity}".`));
  }

  input.features?.forEach((feature, index) => {
    const id = typeof feature === "string" ? feature : feature.id;
    const quantity = typeof feature === "string" ? 1 : feature.quantity ?? 1;

    if (!rules.features[id]) issues.push(issue(`features.${index}`, `Unknown feature "${id}".`));
    if (quantity <= 0) issues.push(issue(`features.${index}.quantity`, "Feature quantity must be greater than zero."));

    // Special validation for multilingual feature: quantity must be between 2 and 7
    if (id === 'multilingual' && (quantity < 2 || quantity > 7)) {
      issues.push(issue(`features.${index}.quantity`, "Multilingual feature quantity must be between 2 and 7."));
    }
  });

  return { ok: issues.length === 0, issues };
}
