import {
  calculateBasePrice,
  calculateComplexityAdjustment,
  calculateFeatureModifiers,
  calculateStackAdjustment,
  normalizeFeatureSelections,
  roundToIncrement,
  sumLineItems,
} from "./calculators";
import { DEFAULT_COMPLEXITY_ID, DEFAULT_STACK_ID, defaultPricingRules } from "./rules";
import type { PricingEstimateInput, PricingResult, PricingRules } from "./types";
import { validatePricingEstimateInput, validatePricingRules } from "./validators";

export function estimateProject(input: PricingEstimateInput): PricingResult {
  const rules = input.rules ?? defaultPricingRules;
  const rulesValidation = validatePricingRules(rules);

  if (!rulesValidation.ok) {
    const message = rulesValidation.issues.map((issue) => `${issue.path}: ${issue.message}`).join("; ");
    throw new Error(`Invalid pricing rules. ${message}`);
  }

  const inputValidation = validatePricingEstimateInput(input, rules);
  if (!inputValidation.ok) {
    const message = inputValidation.issues.map((issue) => `${issue.path}: ${issue.message}`).join("; ");
    throw new Error(`Invalid pricing input. ${message}`);
  }

  const projectType = rules.projectTypes[input.projectType];
  const stack = rules.stacks[input.stack ?? DEFAULT_STACK_ID];
  const complexity = rules.complexities[input.complexity ?? DEFAULT_COMPLEXITY_ID];
  const currency = input.currency ?? rules.currency;

  const baseItem = calculateBasePrice(projectType);
  const featureItems = calculateFeatureModifiers(
    projectType.id,
    normalizeFeatureSelections(input.features),
    rules
  );

  const baseSubtotal = baseItem.amount;
  const featureSubtotal = sumLineItems(featureItems);
  const subtotalBeforeCoefficients = baseSubtotal + featureSubtotal;

  const stackItem = calculateStackAdjustment(subtotalBeforeCoefficients, stack);
  const subtotalAfterStack = subtotalBeforeCoefficients + stackItem.amount;

  const complexityItem = calculateComplexityAdjustment(subtotalAfterStack, complexity);
  const subtotalAfterCoefficients = subtotalAfterStack + complexityItem.amount;

  const total = roundToIncrement(subtotalAfterCoefficients, rules.rounding?.increment);
  const roundingAdjustment = total - subtotalAfterCoefficients;
  const lineItems = [baseItem, ...featureItems, stackItem, complexityItem];

  if (roundingAdjustment !== 0) {
    lineItems.push({
      id: "rounding",
      kind: "rounding",
      label: "Rounding",
      amount: roundingAdjustment,
    });
  }

  return {
    total,
    currency,
    projectType: projectType.id,
    stack: stack.id,
    complexity: complexity.id,
    lineItems,
    breakdown: {
      baseSubtotal,
      featureSubtotal,
      subtotalBeforeCoefficients,
      stackMultiplier: stack.multiplier,
      complexityCoefficient: complexity.coefficient,
      subtotalAfterCoefficients,
      roundingAdjustment,
    },
  };
}

export function createEstimator(rules: PricingRules) {
  const validation = validatePricingRules(rules);
  if (!validation.ok) {
    const message = validation.issues.map((issue) => `${issue.path}: ${issue.message}`).join("; ");
    throw new Error(`Invalid pricing rules. ${message}`);
  }

  return (input: Omit<PricingEstimateInput, "rules">) => estimateProject({ ...input, rules });
}
