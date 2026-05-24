import {
  createEstimator,
  defaultPricingRules,
  estimateProject,
  validatePricingEstimateInput,
} from "../src/index";

const assertEqual = (actual: unknown, expected: unknown, message: string) => {
  if (actual !== expected) {
    throw new Error(`${message}. Expected ${String(expected)}, got ${String(actual)}.`);
  }
};

const assertThrows = (callback: () => void, pattern: RegExp, message: string) => {
  try {
    callback();
  } catch (error) {
    const errorMessage = error instanceof Error ? error.message : String(error);
    if (pattern.test(errorMessage)) return;
    throw new Error(`${message}. Error did not match ${pattern}: ${errorMessage}`);
  }

  throw new Error(`${message}. Expected function to throw.`);
};

export function runPricingEngineTests() {
  const baseResult = estimateProject({
    projectType: "saas",
    features: ["auth", { id: "integrations", quantity: 2 }],
    stack: "standard",
    complexity: "medium",
  });

  assertEqual(baseResult.currency, "USD", "uses default currency");
  assertEqual(baseResult.breakdown.baseSubtotal, 9000, "uses project-type base price");
  assertEqual(baseResult.breakdown.featureSubtotal, 3100, "adds feature modifiers");
  assertEqual(baseResult.total, 12100, "calculates total without extra coefficients");

  const coefficientResult = estimateProject({
    projectType: "landing-page",
    features: ["cms"],
    stack: "full-stack",
    complexity: "high",
  });

  assertEqual(coefficientResult.breakdown.subtotalBeforeCoefficients, 2200, "calculates subtotal before coefficients");
  assertEqual(coefficientResult.breakdown.stackMultiplier, 1.35, "applies stack multiplier");
  assertEqual(coefficientResult.breakdown.complexityCoefficient, 1.35, "applies complexity coefficient");
  assertEqual(coefficientResult.total, 4000, "rounds coefficient-based total");

  assertThrows(
    () =>
      estimateProject({
        projectType: "landing-page",
        features: ["payments"],
      }),
    /does not apply/,
    "rejects non-applicable features"
  );

  const estimator = createEstimator({
    ...defaultPricingRules,
    currency: "EUR",
    rounding: undefined,
  });
  const customResult = estimator({
    projectType: "corporate-website",
    complexity: "low",
  });

  assertEqual(customResult.currency, "EUR", "uses custom rules currency");
  assertEqual(customResult.total, 2550, "supports reusable custom estimators");

  const validation = validatePricingEstimateInput(
    {
      projectType: "unknown",
      stack: "missing",
    },
    defaultPricingRules
  );

  assertEqual(validation.ok, false, "reports invalid input");
  assertEqual(validation.issues.length, 2, "reports unknown project type and stack");
}

runPricingEngineTests();
