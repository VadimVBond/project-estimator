export type QuestionType = "single-choice" | "multi-choice" | "text" | "number";

export interface QuizOption {
  id: string;
  label: string;
}

export interface QuizQuestion {
  id: string;
  type: QuestionType;
  title: string;
  options?: QuizOption[];
  required?: boolean;
}

export interface QuizSchema {
  id: string;
  version: string;
  questions: QuizQuestion[];
}

export interface QuizState {
  schemaId: string;
  currentQuestionId?: string;
  answers: Record<string, unknown>;
}

export interface NextStepResult {
  currentQuestion?: QuizQuestion;
  isComplete: boolean;
}
