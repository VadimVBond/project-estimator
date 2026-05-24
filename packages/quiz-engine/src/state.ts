import { getNextStep } from "./resolver";
import type { QuizSchema, QuizState } from "./types";
import { validateAnswer, validateQuizState } from "./validators";

export function createInitialState(schema: QuizSchema): QuizState {
  const state: QuizState = {
    schemaId: schema.id,
    answers: {},
    history: [],
    isComplete: false,
  };

  const nextStep = getNextStep(schema, state);

  return {
    ...state,
    currentQuestionId: nextStep.nextQuestionId,
    isComplete: nextStep.isComplete,
  };
}

export function answerCurrentQuestion(schema: QuizSchema, state: QuizState, answer: unknown): QuizState {
  const stateValidation = validateQuizState(schema, state);
  if (!stateValidation.ok) {
    const message = stateValidation.issues.map((issue) => `${issue.path}: ${issue.message}`).join("; ");
    throw new Error(`Invalid quiz state. ${message}`);
  }

  if (!state.currentQuestionId) return state;

  const question = schema.questions.find((item) => item.id === state.currentQuestionId);
  if (!question) throw new Error(`Question "${state.currentQuestionId}" does not exist.`);

  const answerValidation = validateAnswer(question, answer);
  if (!answerValidation.ok) {
    const message = answerValidation.issues.map((issue) => `${issue.path}: ${issue.message}`).join("; ");
    throw new Error(`Invalid answer. ${message}`);
  }

  const answeredState: QuizState = {
    ...state,
    answers: {
      ...state.answers,
      [question.id]: answer,
    },
    history: [...state.history, question.id],
  };

  const nextStep = getNextStep(schema, answeredState);

  return {
    ...answeredState,
    currentQuestionId: nextStep.nextQuestionId,
    isComplete: nextStep.isComplete,
  };
}

export function setAnswer(state: QuizState, questionId: string, answer: unknown): QuizState {
  return {
    ...state,
    answers: {
      ...state.answers,
      [questionId]: answer,
    },
  };
}

export function resetQuiz(schema: QuizSchema): QuizState {
  return createInitialState(schema);
}
