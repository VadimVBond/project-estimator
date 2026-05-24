import type { PricingInput, PricingLineItem, PricingResult } from "./types";
import { isPricingInput } from "./validators";

export function calculatePrice(input: PricingInput): PricingResult {
  if (!isPricingInput(input)) {
    throw new Error("Invalid pricing input.");
  }

  const modifierItems: PricingLineItem[] = Object.entries(input.modifiers ?? {}).map(([id, amount]) => ({
    id,
    label: id,
    amount,
  }));

  const lineItems: PricingLineItem[] = [
    {
      id: "base",
      label: "Base price",
      amount: input.basePrice,
    },
    ...modifierItems,
  ];

  // TODO: Add rounding, discounts, taxes, and package rules after pricing strategy is approved.
  const total = lineItems.reduce((sum, item) => sum + item.amount, 0);

  return {
    total,
    currency: input.currency,
    lineItems,
  };
}
