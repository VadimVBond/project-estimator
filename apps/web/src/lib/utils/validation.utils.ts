import { validateAnswer as engineValidateAnswer } from '@project-estimator/quiz-engine';
import type { QuizQuestion, ValidationResult } from '@project-estimator/quiz-engine';

/**
 * Обертка над валидатором движка для использования в UI формах.
 */
export function validateFormAnswer(question: QuizQuestion, answer: unknown): ValidationResult {
  return engineValidateAnswer(question, answer);
}
