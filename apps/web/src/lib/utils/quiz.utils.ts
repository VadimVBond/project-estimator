// Утилиты для квиза.
// Большая часть логики уже инкапсулирована в @project-estimator/quiz-engine,
// поэтому здесь могут быть только фронтенд-специфичные хелперы.

import type { QuizSchema, QuizState } from '@project-estimator/quiz-engine';

/**
 * Получает локализованный текст (заголовок, описание) из узла квиза.
 */
export function getLocalizedContent(
  content: Record<string, any> | undefined,
  locale: string,
  field: 'title' | 'description'
): string {
  if (!content) return '';
  const langContent = content[locale] || content['en'] || content[Object.keys(content)[0]];
  return langContent?.[field] || '';
}

/**
 * Рассчитывает процент прогресса для прогресс-бара.
 */
export function calculateProgress(state: QuizState): number {
  if (!state.schema || state.schema.questions.length === 0) return 0;
  if (state.isComplete) return 100;
  
  // Простой расчет: количество отвеченных вопросов / общее количество вопросов.
  // Для ветвящегося квиза это приблизительное значение.
  const answeredCount = Object.keys(state.answers).length;
  const totalCount = state.schema.questions.length;
  
  return Math.min(Math.round((answeredCount / totalCount) * 100), 99);
}
