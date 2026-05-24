import type { AnswerCondition, Condition, QuizState } from "./types";

const isObject = (value: unknown): value is Record<string, unknown> =>
  typeof value === "object" && value !== null && !Array.isArray(value);

const isAnswerCondition = (condition: Condition): condition is AnswerCondition =>
  isObject(condition) && "questionId" in condition && "operator" in condition;

const exists = (value: unknown) => value !== undefined && value !== null && value !== "";

const compareNumbers = (answer: unknown, expected: unknown, predicate: (left: number, right: number) => boolean) =>
  typeof answer === "number" && typeof expected === "number" && predicate(answer, expected);

export function evaluateCondition(condition: Condition, state: QuizState): boolean {
  if (isAnswerCondition(condition)) {
    const answer = state.answers[condition.questionId];

    switch (condition.operator) {
      case "equals":
        return answer === condition.value;
      case "notEquals":
        return answer !== condition.value;
      case "includes":
        return Array.isArray(answer) && answer.includes(condition.value);
      case "notIncludes":
        return !Array.isArray(answer) || !answer.includes(condition.value);
      case "exists":
        return exists(answer);
      case "notExists":
        return !exists(answer);
      case "gt":
        return compareNumbers(answer, condition.value, (left, right) => left > right);
      case "gte":
        return compareNumbers(answer, condition.value, (left, right) => left >= right);
      case "lt":
        return compareNumbers(answer, condition.value, (left, right) => left < right);
      case "lte":
        return compareNumbers(answer, condition.value, (left, right) => left <= right);
      default:
        return false;
    }
  }

  if (condition.all) return condition.all.every((item) => evaluateCondition(item, state));
  if (condition.any) return condition.any.some((item) => evaluateCondition(item, state));
  if (condition.not) return !evaluateCondition(condition.not, state);

  return false;
}
