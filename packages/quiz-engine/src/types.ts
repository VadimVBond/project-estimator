export type QuestionType = "single-choice" | "multi-choice" | "text" | "number" | "boolean";

export type ConditionOperator =
  | "equals"
  | "notEquals"
  | "includes"
  | "notIncludes"
  | "exists"
  | "notExists"
  | "gt"
  | "gte"
  | "lt"
  | "lte";

export interface AnswerCondition {
  questionId: string;
  operator: ConditionOperator;
  value?: unknown;
}

export interface ConditionGroup {
  all?: Condition[];
  any?: Condition[];
  not?: Condition;
}

export type Condition = AnswerCondition | ConditionGroup;

export interface QuizBranch {
  when: Condition;
  next: string;
}

export interface QuizOption {
  id: string;
  label: string;
}

export interface QuizQuestion {
  id: string;
  type: QuestionType;
  title: string;
  description?: string;
  options?: QuizOption[];
  required?: boolean;
  visibleWhen?: Condition;
  branches?: QuizBranch[];
  next?: string;
}

export interface QuizSchema {
  id: string;
  version: string;
  startQuestionId?: string;
  questions: QuizQuestion[];
}

export interface QuizState {
  schemaId: string;
  currentQuestionId?: string;
  answers: Record<string, unknown>;
  history: string[];
  isComplete: boolean;
}

export interface NextStepResult {
  currentQuestion?: QuizQuestion;
  nextQuestionId?: string;
  isComplete: boolean;
}

export interface ValidationIssue {
  path: string;
  message: string;
}

export interface ValidationResult {
  ok: boolean;
  issues: ValidationIssue[];
}
