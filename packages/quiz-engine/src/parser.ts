import type { QuizSchema } from "./types";
import { validateQuizSchema } from "./validators";

export function parseQuizSchema(input: string | unknown): QuizSchema {
  let value: unknown;

  try {
    value = typeof input === "string" ? JSON.parse(input) : input;
  } catch (error) {
    const message = error instanceof Error ? error.message : "Unknown JSON parse error.";
    throw new Error(`Invalid quiz schema JSON. ${message}`);
  }

  const validation = validateQuizSchema(value);

  if (!validation.ok) {
    const message = validation.issues.map((issue) => `${issue.path}: ${issue.message}`).join("; ");
    throw new Error(`Invalid quiz schema. ${message}`);
  }

  return value as QuizSchema;
}
