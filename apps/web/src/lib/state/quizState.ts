import type { ApiQuizState, PricingResult, QuizSchema, ValidationIssue } from '../api/client';
import type { EstimatorApiClient } from '../api/client';
import { getCurrentQuestion, getSelectedValues } from '../utils/quizHelpers';

export interface EstimatorState {
  schema: QuizSchema | null;
  sessionId: string | null;
  quizId: string | null;
  quiz: ApiQuizState | null;
  pricing: PricingResult | null;
  isLoading: boolean;
  isPricingLoading: boolean;
  validationIssues: ValidationIssue[];
  error: string | null;
}

export type EstimatorListener = (state: EstimatorState) => void;

const initialState: EstimatorState = {
  schema: null,
  sessionId: null,
  quizId: null,
  quiz: null,
  pricing: null,
  isLoading: false,
  isPricingLoading: false,
  validationIssues: [],
  error: null,
};

const getErrorMessage = (error: unknown) => (error instanceof Error ? error.message : 'Unexpected estimator error');

export function createQuizState(api: EstimatorApiClient) {
  let state: EstimatorState = { ...initialState };
  const listeners = new Set<EstimatorListener>();

  const emit = () => listeners.forEach((listener) => listener(state));
  const patch = (next: Partial<EstimatorState>) => {
    state = { ...state, ...next };
    emit();
  };

  const recalculatePricing = async () => {
    if (!state.schema || !state.quiz) return;

    if (!state.sessionId) {
      patch({ pricing: null, isPricingLoading: false });
      return;
    }

    patch({ isPricingLoading: true });
    try {
      const pricing = await api.estimatePricing(state.sessionId);
      patch({ pricing, isPricingLoading: false });
    } catch (error) {
      patch({ error: getErrorMessage(error), isPricingLoading: false });
    }
  };

  return {
    subscribe(listener: EstimatorListener) {
      listeners.add(listener);
      listener(state);

      return () => listeners.delete(listener);
    },

    getState() {
      return state;
    },

    async init() {
      patch({ isLoading: true, error: null, validationIssues: [] });

      try {
        const schemaResponse = await api.getQuizSchema();
        const session = await api.startQuiz(schemaResponse.quiz_id);
        patch({
          schema: schemaResponse.schema,
          sessionId: session.session_id,
          quizId: session.quiz_id,
          quiz: session.state,
          pricing: session.pricing ?? null,
          isLoading: false,
        });
        await recalculatePricing();
      } catch (error) {
        patch({ error: getErrorMessage(error), isLoading: false });
      }
    },

    async submitCurrent(form: HTMLFormElement) {
      const question = getCurrentQuestion(state.schema, state.quiz);
      if (!question || !state.schema || !state.quiz) return;

      const answer = getSelectedValues(form, question);
      patch({ isLoading: true, validationIssues: [], error: null });

      try {
        if (!state.sessionId) throw new Error('Quiz session is not initialized.');
        const session = await api.answerQuiz({ session_id: state.sessionId, answer });
        patch({ quiz: session.state, pricing: session.pricing ?? state.pricing, isLoading: false });
        await recalculatePricing();
      } catch (error) {
        const body = typeof error === 'object' && error !== null && 'body' in error ? (error as { body: any }).body : null;
        patch({
          isLoading: false,
          validationIssues: body?.issues ?? body?.data?.issues ?? [],
          error: getErrorMessage(error),
        });
      }
    },

    reset() {
      state = { ...initialState };
      emit();
    },
  };
}
