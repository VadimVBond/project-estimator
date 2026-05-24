import type { ApiQuizState, QuizQuestion, QuizSchema, ValidationIssue } from '../api/client';

export const getLocalizedText = (value: string | Record<string, string> | undefined, locale = 'en') => {
  if (!value) return '';
  if (typeof value === 'string') return value;

  return value[locale] ?? value.en ?? Object.values(value)[0] ?? '';
};

export const escapeHtml = (value: string) =>
  value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');

export const getCurrentQuestion = (schema: QuizSchema | null, state: ApiQuizState | null): QuizQuestion | null => {
  if (!schema || !state?.currentQuestionId) return null;

  return schema.questions.find((question) => question.id === state.currentQuestionId) ?? null;
};

export const getProgressPercent = (schema: QuizSchema | null, state: ApiQuizState | null) => {
  if (!schema || !state) return 0;
  if (state.isComplete) return 100;
  if (schema.questions.length === 0) return 0;

  return Math.min(Math.round((state.history.length / schema.questions.length) * 100), 99);
};

export const getIssueForQuestion = (issues: ValidationIssue[], questionId: string) =>
  issues.find((issue) => issue.path === questionId || issue.path.endsWith(`.${questionId}`));

export const getInputName = (question: QuizQuestion) => `quiz-${question.id}`;

export const getSelectedValues = (form: HTMLFormElement, question: QuizQuestion): unknown => {
  const name = getInputName(question);

  if (question.type === 'multi-choice') {
    return Array.from(form.querySelectorAll<HTMLInputElement>(`input[name="${name}"]:checked`)).map((input) => input.value);
  }

  if (question.type === 'boolean') {
    const selected = form.querySelector<HTMLInputElement>(`input[name="${name}"]:checked`);
    if (!selected) return undefined;
    return selected.value === 'true';
  }

  const input = form.querySelector<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>(`[name="${name}"]`);
  if (!input) return undefined;
  if (question.type === 'number') return input.value === '' ? undefined : Number(input.value);

  return input.value;
};

export const formatMoney = (amount: number | null | undefined, currency = 'USD', locale = 'en') => {
  if (amount === null || amount === undefined) return '—';

  return new Intl.NumberFormat(locale, {
    style: 'currency',
    currency,
    maximumFractionDigits: 0,
  }).format(amount);
};

export const renderQuestionControl = (question: QuizQuestion, value: unknown, locale: string) => {
  const name = getInputName(question);

  if (question.type === 'single-choice') {
    return `
      <div class="grid gap-3 sm:grid-cols-2">
        ${(question.options ?? [])
          .map((option) => {
            const checked = value === option.id ? 'checked' : '';
            return `
              <label class="flex cursor-pointer items-start gap-3 rounded-lg border border-gray-200 bg-white p-4 text-sm shadow-sm transition hover:border-primary dark:border-slate-700 dark:bg-slate-900">
                <input class="mt-1 h-4 w-4 accent-primary" type="radio" name="${escapeHtml(name)}" value="${escapeHtml(option.id)}" ${checked} />
                <span>${escapeHtml(getLocalizedText(option.label, locale))}</span>
              </label>
            `;
          })
          .join('')}
      </div>
    `;
  }

  if (question.type === 'multi-choice') {
    const values = Array.isArray(value) ? value : [];
    return `
      <div class="grid gap-3 sm:grid-cols-2">
        ${(question.options ?? [])
          .map((option) => {
            const checked = values.includes(option.id) ? 'checked' : '';
            return `
              <label class="flex cursor-pointer items-start gap-3 rounded-lg border border-gray-200 bg-white p-4 text-sm shadow-sm transition hover:border-primary dark:border-slate-700 dark:bg-slate-900">
                <input class="mt-1 h-4 w-4 rounded accent-primary" type="checkbox" name="${escapeHtml(name)}" value="${escapeHtml(option.id)}" ${checked} />
                <span>${escapeHtml(getLocalizedText(option.label, locale))}</span>
              </label>
            `;
          })
          .join('')}
      </div>
    `;
  }

  if (question.type === 'boolean') {
    return `
      <div class="flex flex-wrap gap-3">
        <label class="cursor-pointer rounded-lg border border-gray-200 bg-white px-4 py-3 text-sm shadow-sm dark:border-slate-700 dark:bg-slate-900">
          <input class="mr-2 accent-primary" type="radio" name="${escapeHtml(name)}" value="true" ${value === true ? 'checked' : ''} />Yes
        </label>
        <label class="cursor-pointer rounded-lg border border-gray-200 bg-white px-4 py-3 text-sm shadow-sm dark:border-slate-700 dark:bg-slate-900">
          <input class="mr-2 accent-primary" type="radio" name="${escapeHtml(name)}" value="false" ${value === false ? 'checked' : ''} />No
        </label>
      </div>
    `;
  }

  const inputType = question.type === 'number' ? 'number' : 'text';
  return `
    <input
      class="w-full rounded-lg border border-gray-200 bg-white px-4 py-3 text-sm shadow-sm outline-none transition focus:border-primary dark:border-slate-700 dark:bg-slate-900"
      type="${inputType}"
      name="${escapeHtml(name)}"
      value="${typeof value === 'string' || typeof value === 'number' ? escapeHtml(String(value)) : ''}"
    />
  `;
};
