import type {
  ComplexityCoefficientRule,
  FeatureModifierRule,
  FeatureSelection,
  PricingLineItem,
  PricingRules,
  ProjectTypeRule,
  StackMultiplierRule,
} from "./types";

export function normalizeFeatureSelections(features: Array<string | FeatureSelection> = []): FeatureSelection[] {
  return features.map((feature) => {
    if (typeof feature === "string") return { id: feature, quantity: 1 };

    return {
      id: feature.id,
      quantity: feature.quantity ?? 1,
    };
  });
}

export function calculateBasePrice(projectType: ProjectTypeRule): PricingLineItem {
  return {
    id: projectType.id,
    kind: "base",
    label: projectType.label,
    amount: projectType.basePrice,
  };
}

export function calculateFeatureModifiers(
  projectTypeId: string,
  selections: FeatureSelection[],
  rules: PricingRules
): PricingLineItem[] {
  return selections.map((selection) => {
    const rule = rules.features[selection.id];
    if (!rule) throw new Error(`Unknown feature "${selection.id}".`);

    if (rule.appliesTo && !rule.appliesTo.includes(projectTypeId)) {
      throw new Error(`Feature "${selection.id}" does not apply to project type "${projectTypeId}".`);
    }

    const quantity = selection.quantity ?? 1;

    return {
      id: rule.id,
      kind: "feature",
      label: rule.label,
      amount: rule.amount * quantity,
      quantity,
      rate: rule.amount,
    };
  });
}

export function calculateStackAdjustment(subtotal: number, stack: StackMultiplierRule): PricingLineItem {
  return {
    id: stack.id,
    kind: "stack",
    label: stack.label,
    amount: subtotal * (stack.multiplier - 1),
    rate: stack.multiplier,
  };
}

export function calculateComplexityAdjustment(
  subtotal: number,
  complexity: ComplexityCoefficientRule
): PricingLineItem {
  return {
    id: complexity.id,
    kind: "complexity",
    label: complexity.label,
    amount: subtotal * (complexity.coefficient - 1),
    rate: complexity.coefficient,
  };
}

export function roundToIncrement(value: number, increment?: number) {
  if (!increment || increment <= 0) return value;

  return Math.round(value / increment) * increment;
}

export function sumLineItems(items: PricingLineItem[]) {
  return items.reduce((sum, item) => sum + item.amount, 0);
}

export function hasFeatureRule(rule: FeatureModifierRule | undefined): rule is FeatureModifierRule {
  return rule !== undefined;
}
