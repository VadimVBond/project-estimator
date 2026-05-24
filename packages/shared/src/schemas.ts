import { DEFAULT_CURRENCY, DEFAULT_LOCALE, PROJECT_CATEGORIES, SUPPORTED_LOCALES } from "./constants";

// TODO: Promote these placeholders to generated JSON Schema or Zod-compatible schemas.
export const moneyAmountSchema = {
  type: "object",
  required: ["amount", "currency"],
  properties: {
    amount: { type: "number", minimum: 0 },
    currency: { type: "string", default: DEFAULT_CURRENCY },
  },
} as const;

export const contactLeadSchema = {
  type: "object",
  required: ["name", "email"],
  properties: {
    name: { type: "string", minLength: 1 },
    email: { type: "string", format: "email" },
    phone: { type: "string" },
    company: { type: "string" },
  },
} as const;

export const projectEstimateRequestSchema = {
  type: "object",
  required: ["category", "locale", "lead", "answers"],
  properties: {
    category: { enum: PROJECT_CATEGORIES },
    locale: { enum: SUPPORTED_LOCALES, default: DEFAULT_LOCALE },
    lead: contactLeadSchema,
    answers: { type: "object" },
  },
} as const;
