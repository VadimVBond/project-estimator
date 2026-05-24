export type PricingLineItemKind = "base" | "feature" | "stack" | "complexity" | "rounding";

export interface PricingLineItem {
  id: string;
  kind: PricingLineItemKind;
  label: string;
  amount: number;
  quantity?: number;
  rate?: number;
}

export interface ProjectTypeRule {
  id: string;
  label: string;
  basePrice: number;
}

export interface FeatureModifierRule {
  id: string;
  label: string;
  amount: number;
  appliesTo?: string[];
}

export interface StackMultiplierRule {
  id: string;
  label: string;
  multiplier: number;
}

export interface ComplexityCoefficientRule {
  id: string;
  label: string;
  coefficient: number;
}

export interface RoundingRule {
  increment: number;
}

export interface PricingRules {
  currency: string;
  projectTypes: Record<string, ProjectTypeRule>;
  features: Record<string, FeatureModifierRule>;
  stacks: Record<string, StackMultiplierRule>;
  complexities: Record<string, ComplexityCoefficientRule>;
  rounding?: RoundingRule;
}

export interface FeatureSelection {
  id: string;
  quantity?: number;
}

export interface PricingEstimateInput {
  projectType: string;
  features?: Array<string | FeatureSelection>;
  stack?: string;
  complexity?: string;
  currency?: string;
  rules?: PricingRules;
}

export interface PricingBreakdown {
  baseSubtotal: number;
  featureSubtotal: number;
  subtotalBeforeCoefficients: number;
  stackMultiplier: number;
  complexityCoefficient: number;
  subtotalAfterCoefficients: number;
  roundingAdjustment: number;
}

export interface PricingResult {
  total: number;
  currency: string;
  projectType: string;
  stack: string;
  complexity: string;
  lineItems: PricingLineItem[];
  breakdown: PricingBreakdown;
}

export interface ValidationIssue {
  path: string;
  message: string;
}

export interface ValidationResult {
  ok: boolean;
  issues: ValidationIssue[];
}
