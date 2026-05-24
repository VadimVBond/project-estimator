import type {
  AnswerCondition,
  Condition,
  ConditionOperator,
  QuizBranch,
  QuizQuestion,
  QuizSchema,
  QuizState,
  ValidationIssue,
  ValidationResult,
} from "./types";

const QUESTION_TYPES = ["single-choice", "multi-choice", "text", "number", "boolean"] as const;
const CONDITION_OPERATORS: readonly ConditionOperator[] = [
  "equals",
  "notEquals",
  "includes",
  "notIncludes",
  "exists",
  "notExists",
  "gt",
  "gte",
  "lt",
  "lte",
];

const isObject = (value: unknown): value is Record<string, unknown> =>
  typeof value === "object" && value !== null && !Array.isArray(value);

const isNonEmptyString = (value: unknown): value is string =>
  typeof value === "string" && value.trim().length > 0;

const issue = (path: string, message: string): ValidationIssue => ({ path, message });

const isQuestionType = (value: unknown) =>
  typeof value === "string" && QUESTION_TYPES.includes(value as never);

const isConditionOperator = (value: unknown): value is ConditionOperator =>
  typeof value === "string" && CONDITION_OPERATORS.includes(value as ConditionOperator);

const isAnswerCondition = (value: unknown): value is AnswerCondition =>
  isObject(value) && isNonEmptyString(value.questionId) && isConditionOperator(value.operator);

const collectConditionQuestionIds = (condition: Condition, target: Set<string>) => {
  if (isAnswerCondition(condition)) {
    target.add(condition.questionId);
    return;
  }

  condition.all?.forEach((item) => collectConditionQuestionIds(item, target));
  condition.any?.forEach((item) => collectConditionQuestionIds(item, target));
  if (condition.not) collectConditionQuestionIds(condition.not, target);
};

export function isCondition(value: unknown): value is Condition {
  if (!isObject(value)) return false;
  if (isAnswerCondition(value)) return true;

  const all = value.all;
  const any = value.any;
  const not = value.not;

  return (
    (Array.isArray(all) && all.every(isCondition)) ||
    (Array.isArray(any) && any.every(isCondition)) ||
    (not !== undefined && isCondition(not))
  );
}

export function isQuizBranch(value: unknown): value is QuizBranch {
  return isObject(value) && isCondition(value.when) && isNonEmptyString(value.next);
}

export function isQuizQuestion(value: unknown): value is QuizQuestion {
  if (!isObject(value)) return false;

  const hasValidOptions =
    value.options === undefined ||
    (Array.isArray(value.options) &&
      value.options.every((option) => isObject(option) && isNonEmptyString(option.id) && isNonEmptyString(option.label)));

  const hasValidBranches = value.branches === undefined || (Array.isArray(value.branches) && value.branches.every(isQuizBranch));
  const hasValidVisibleWhen = value.visibleWhen === undefined || isCondition(value.visibleWhen);

  return (
    isNonEmptyString(value.id) &&
    isQuestionType(value.type) &&
    isNonEmptyString(value.title) &&
    hasValidOptions &&
    hasValidBranches &&
    hasValidVisibleWhen
  );
}

export function isQuizSchema(value: unknown): value is QuizSchema {
  if (!isObject(value) || !Array.isArray(value.questions)) return false;

  return isNonEmptyString(value.id) && isNonEmptyString(value.version) && value.questions.every(isQuizQuestion);
}

export function isQuizState(value: unknown): value is QuizState {
  if (!isObject(value)) return false;

  const hasValidHistory = value.history === undefined || (Array.isArray(value.history) && value.history.every(isNonEmptyString));
  const hasValidComplete = value.isComplete === undefined || typeof value.isComplete === "boolean";

  return isNonEmptyString(value.schemaId) && isObject(value.answers) && hasValidHistory && hasValidComplete;
}

export function validateQuizSchema(value: unknown): ValidationResult {
  const issues: ValidationIssue[] = [];

  if (!isObject(value)) {
    return { ok: false, issues: [issue("schema", "Quiz schema must be an object.")] };
  }

  if (!isNonEmptyString(value.id)) issues.push(issue("id", "Schema id is required."));
  if (!isNonEmptyString(value.version)) issues.push(issue("version", "Schema version is required."));
  if (!Array.isArray(value.questions)) {
    issues.push(issue("questions", "Questions must be an array."));
    return { ok: false, issues };
  }

  const questionIds = new Set<string>();
  const referencedIds = new Set<string>();
  const conditionQuestionIds = new Set<string>();

  value.questions.forEach((question, index) => {
    const path = `questions.${index}`;

    if (!isQuizQuestion(question)) {
      issues.push(issue(path, "Question has invalid shape."));
      return;
    }

    if (questionIds.has(question.id)) issues.push(issue(`${path}.id`, "Question id must be unique."));
    questionIds.add(question.id);

    if ((question.type === "single-choice" || question.type === "multi-choice") && (!question.options || question.options.length === 0)) {
      issues.push(issue(`${path}.options`, "Choice questions must define at least one option."));
    }

    if (question.next) referencedIds.add(question.next);
    question.branches?.forEach((branch) => referencedIds.add(branch.next));
    question.branches?.forEach((branch) => collectConditionQuestionIds(branch.when, conditionQuestionIds));
    if (question.visibleWhen) collectConditionQuestionIds(question.visibleWhen, conditionQuestionIds);
  });

  if (isNonEmptyString(value.startQuestionId)) referencedIds.add(value.startQuestionId);

  referencedIds.forEach((id) => {
    if (!questionIds.has(id)) issues.push(issue("questions", `Referenced question "${id}" does not exist.`));
  });

  conditionQuestionIds.forEach((id) => {
    if (!questionIds.has(id)) issues.push(issue("questions", `Condition references unknown question "${id}".`));
  });

  return { ok: issues.length === 0, issues };
}

export function validateQuizState(schema: QuizSchema, value: unknown): ValidationResult {
  const issues: ValidationIssue[] = [];

  if (!isQuizState(value)) {
    return { ok: false, issues: [issue("state", "Quiz state has invalid shape.")] };
  }

  if (value.schemaId !== schema.id) issues.push(issue("schemaId", "State schema id does not match quiz schema."));

  const questionIds = new Set(schema.questions.map((question) => question.id));
  if (value.currentQuestionId && !questionIds.has(value.currentQuestionId)) {
    issues.push(issue("currentQuestionId", "Current question does not exist in schema."));
  }

  value.history?.forEach((questionId, index) => {
    if (!questionIds.has(questionId)) issues.push(issue(`history.${index}`, "History contains unknown question id."));
  });

  return { ok: issues.length === 0, issues };
}

export function validateAnswer(question: QuizQuestion, answer: unknown): ValidationResult {
  const issues: ValidationIssue[] = [];

  if (answer === undefined || answer === null || answer === "") {
    if (question.required) issues.push(issue(question.id, "Answer is required."));
    return { ok: issues.length === 0, issues };
  }

  if (question.type === "text" && typeof answer !== "string") issues.push(issue(question.id, "Answer must be a string."));
  if (question.type === "number" && typeof answer !== "number") issues.push(issue(question.id, "Answer must be a number."));
  if (question.type === "boolean" && typeof answer !== "boolean") issues.push(issue(question.id, "Answer must be a boolean."));

  if (question.type === "single-choice") {
    const optionIds = new Set(question.options?.map((option) => option.id) ?? []);
    if (typeof answer !== "string" || !optionIds.has(answer)) issues.push(issue(question.id, "Answer must match one option id."));
  }

  if (question.type === "multi-choice") {
    const optionIds = new Set(question.options?.map((option) => option.id) ?? []);
    if (!Array.isArray(answer) || !answer.every((item) => typeof item === "string" && optionIds.has(item))) {
      issues.push(issue(question.id, "Answer must be an array of option ids."));
    }
  }

  return { ok: issues.length === 0, issues };
}
