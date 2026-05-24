import type { NextStepResult, QuizSchema, QuizState } from "./types";
import { isQuizSchema, isQuizState } from "./validators";

export function getNextStep(schema: QuizSchema, state: QuizState): NextStepResult {
  if (!isQuizSchema(schema)) {
    throw new Error("Invalid quiz schema.");
  }

  if (!isQuizState(state)) {
    throw new Error("Invalid quiz state.");
  }

  const currentIndex = schema.questions.findIndex((question) => question.id === state.currentQuestionId);
  const nextIndex = currentIndex >= 0 ? currentIndex + 1 : 0;
  const currentQuestion = schema.questions[nextIndex];

  // TODO: Add conditional branching based on answers and question rules.
  return {
    currentQuestion,
    isComplete: currentQuestion === undefined,
  };
}
