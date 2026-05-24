// TODO: Replace placeholder schema with the final pricing model contract.
export const pricingInputSchema = {
  type: "object",
  required: ["basePrice", "currency"],
  properties: {
    basePrice: { type: "number", minimum: 0 },
    currency: { type: "string", minLength: 3, maxLength: 3 },
    modifiers: {
      type: "object",
      additionalProperties: { type: "number" },
    },
  },
} as const;

export const pricingResultSchema = {
  type: "object",
  required: ["total", "currency", "lineItems"],
  properties: {
    total: { type: "number", minimum: 0 },
    currency: { type: "string" },
    lineItems: { type: "array" },
  },
} as const;
