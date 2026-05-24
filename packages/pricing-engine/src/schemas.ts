// JSON Schema-compatible placeholders kept dependency-free for framework-independent consumers.
export const pricingInputSchema = {
  type: "object",
  required: ["projectType"],
  properties: {
    projectType: { type: "string" },
    features: { type: "array" },
    stack: { type: "string" },
    complexity: { type: "string" },
    currency: { type: "string", minLength: 3, maxLength: 3 },
  },
} as const;

export const pricingResultSchema = {
  type: "object",
  required: ["total", "currency", "projectType", "stack", "complexity", "lineItems", "breakdown"],
  properties: {
    total: { type: "number", minimum: 0 },
    currency: { type: "string" },
    projectType: { type: "string" },
    stack: { type: "string" },
    complexity: { type: "string" },
    lineItems: { type: "array" },
    breakdown: { type: "object" },
  },
} as const;
