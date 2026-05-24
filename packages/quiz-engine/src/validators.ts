import type { QuizQuestion, QuizSchema, QuizState } from "./types";

const isObject = (value: unknown): value is Record<string, unknown> =>
  typeof value === "object" && value !== null && !Array.isArray(value);

const isNonEmptyString = (value: unknown): value is string =>
  typeof value === "string" && value.trim().length > 0;

export function isQuizQuestion(value: unknown): value is QuizQuestion {
  if (!isObject(value)) return false;

  return isNonEmptyString(value.id) && isNonEmptyString(value.type) && isNonEmptyString(value.title);
}

export function isQuizSchema(value: unknown): value is QuizSchema {
  if (!isObject(value) || !Array.isArray(value.questions)) return false;

  // TODO: Validate branching rules after the quiz flow model is finalized.
  return isNonEmptyString(value.id) && isNonEmptyString(value.version) && value.questions.every(isQuizQuestion);
}

export function isQuizState(value: unknown): value is QuizState {
  if (!isObject(value)) return false;

  return isNonEmptyString(value.schemaId) && isObject(value.answers);
}
