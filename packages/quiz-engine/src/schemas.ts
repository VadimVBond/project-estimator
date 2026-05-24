// JSON Schema-compatible placeholders kept dependency-free for framework-independent consumers.
export const conditionSchema = {
  oneOf: [
    {
      type: "object",
      required: ["questionId", "operator"],
      properties: {
        questionId: { type: "string" },
        operator: {
          enum: ["equals", "notEquals", "includes", "notIncludes", "exists", "notExists", "gt", "gte", "lt", "lte"],
        },
        value: {},
      },
    },
    {
      type: "object",
      properties: {
        all: { type: "array" },
        any: { type: "array" },
        not: { type: "object" },
      },
    },
  ],
} as const;

export const quizSchemaSchema = {
  type: "object",
  required: ["id", "version", "questions"],
  properties: {
    id: { type: "string" },
    version: { type: "string" },
    startQuestionId: { type: "string" },
    questions: { type: "array" },
  },
} as const;

export const quizStateSchema = {
  type: "object",
  required: ["schemaId", "answers"],
  properties: {
    schemaId: { type: "string" },
    currentQuestionId: { type: "string" },
    answers: { type: "object" },
    history: { type: "array" },
    isComplete: { type: "boolean" },
  },
} as const;
