// TODO: Replace placeholder schema with generated JSON Schema or Zod-compatible contract.
export const quizSchemaSchema = {
  type: "object",
  required: ["id", "version", "questions"],
  properties: {
    id: { type: "string" },
    version: { type: "string" },
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
  },
} as const;
