export interface PricingLineItem {
  id: string;
  label: string;
  amount: number;
}

export interface PricingInput {
  basePrice: number;
  currency: string;
  modifiers?: Record<string, number>;
}

export interface PricingResult {
  total: number;
  currency: string;
  lineItems: PricingLineItem[];
}
