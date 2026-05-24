import type { PROJECT_CATEGORIES, SUPPORTED_LOCALES } from "./constants";

export type Locale = (typeof SUPPORTED_LOCALES)[number];

export type ProjectCategory = (typeof PROJECT_CATEGORIES)[number];

export interface MoneyAmount {
  amount: number;
  currency: string;
}

export interface ContactLead {
  name: string;
  email: string;
  phone?: string;
  company?: string;
}

export interface ProjectEstimateRequest {
  category: ProjectCategory;
  locale: Locale;
  lead: ContactLead;
  answers: Record<string, unknown>;
}

export interface ValidationIssue {
  path: string;
  message: string;
}

export interface ValidationResult {
  ok: boolean;
  issues: ValidationIssue[];
}
