import { evaluateCondition } from "./conditions";
import type { NextStepResult, QuizQuestion, QuizSchema, QuizState } from "./types";
import { isQuizSchema, isQuizState } from "./validators";

const getQuestionById = (schema: QuizSchema, questionId: string) =>
  schema.questions.find((question) => question.id === questionId);

const isVisible = (question: QuizQuestion, state: QuizState) =>
  question.visibleWhen === undefined || evaluateCondition(question.visibleWhen, state);

const findFirstVisibleQuestion = (schema: QuizSchema, state: QuizState, startIndex = 0) =>
  schema.questions.slice(startIndex).find((question) => isVisible(question, state));

export function resolveNextQuestionId(schema: QuizSchema, state: QuizState): string | undefined {
  if (!isQuizSchema(schema)) throw new Error("Invalid quiz schema.");
  if (!isQuizState(state)) throw new Error("Invalid quiz state.");
  if (state.isComplete) return undefined;

  if (!state.currentQuestionId) {
    const startQuestion = schema.startQuestionId ? getQuestionById(schema, schema.startQuestionId) : undefined;
    return startQuestion && isVisible(startQuestion, state)
      ? startQuestion.id
      : findFirstVisibleQuestion(schema, state)?.id;
  }

  const currentQuestion = getQuestionById(schema, state.currentQuestionId);
  if (!currentQuestion) return undefined;

  const matchedBranch = currentQuestion.branches?.find((branch) => evaluateCondition(branch.when, state));
  if (matchedBranch) return matchedBranch.next;
  if (currentQuestion.next) return currentQuestion.next;

  const currentIndex = schema.questions.findIndex((question) => question.id === currentQuestion.id);
  return findFirstVisibleQuestion(schema, state, currentIndex + 1)?.id;
}

export function getNextStep(schema: QuizSchema, state: QuizState): NextStepResult {
  const nextQuestionId = resolveNextQuestionId(schema, state);
  const currentQuestion = nextQuestionId ? getQuestionById(schema, nextQuestionId) : undefined;

  return {
    currentQuestion,
    nextQuestionId,
    isComplete: currentQuestion === undefined,
  };
}
