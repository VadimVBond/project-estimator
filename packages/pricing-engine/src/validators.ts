import type { PricingInput } from "./types";

export function isPricingInput(value: unknown): value is PricingInput {
  if (typeof value !== "object" || value === null || Array.isArray(value)) return false;

  const input = value as Record<string, unknown>;
  const hasValidBasePrice = typeof input.basePrice === "number" && input.basePrice >= 0;
  const hasValidCurrency = typeof input.currency === "string" && input.currency.trim().length >= 3;
  const hasValidModifiers =
    input.modifiers === undefined ||
    (typeof input.modifiers === "object" && input.modifiers !== null && !Array.isArray(input.modifiers));

  // TODO: Validate modifier keys against a product-owned pricing catalog.
  return hasValidBasePrice && hasValidCurrency && hasValidModifiers;
}
