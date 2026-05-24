export interface ApiEnvelope<T> {
  data: T;
}

export interface QuizOption {
  id: string;
  label: string | Record<string, string>;
  value?: unknown;
}

export interface QuizQuestionPricingMeta {
  field?: 'projectType' | 'stack' | 'complexity';
  featureId?: string;
}

export interface QuizQuestion {
  id: string;
  type: 'single-choice' | 'multi-choice' | 'text' | 'number' | 'boolean';
  title: string | Record<string, string>;
  description?: string | Record<string, string>;
  options?: QuizOption[];
  required?: boolean;
  pricing?: QuizQuestionPricingMeta;
}

export interface QuizSchema {
  id: string;
  version: string;
  startQuestionId?: string;
  questions: QuizQuestion[];
}

export interface ApiQuizState {
  schemaId: string;
  currentQuestionId?: string;
  answers: Record<string, unknown>;
  history: string[];
  isComplete: boolean;
}

export interface QuizSchemaResponse {
  quiz_id: string;
  schema: QuizSchema;
}

export interface QuizSessionResponse {
  session_id: string;
  quiz_id: string;
  state: ApiQuizState;
  pricing?: PricingResult | null;
}

export interface PricingLineItem {
  id: string;
  kind: 'base' | 'feature' | 'stack' | 'complexity' | 'rounding';
  label: string;
  amount: number;
  quantity?: number;
  rate?: number;
}

export interface PricingResult {
  total: number;
  currency: string;
  projectType: string;
  stack: string;
  complexity: string;
  lineItems: PricingLineItem[];
  breakdown: Record<string, number>;
}

export interface LeadCreatePayload {
  session_id: string;
  idempotency_key: string;
  contact: {
    name: string;
    email: string;
    phone?: string;
    company?: string;
  };
  source?: string;
}

export interface LeadResult {
  lead_id: string;
  idempotency_key: string;
  session_id: string;
  quiz_id: string;
  contact: LeadCreatePayload['contact'];
  answers: Record<string, unknown>;
  pricing?: PricingResult | null;
  source: string;
  status: string;
  created_at: string;
}

export interface ValidationIssue {
  path: string;
  message: string;
}

export class EstimatorApiError extends Error {
  constructor(
    public readonly status: number,
    public readonly body: unknown
  ) {
    super(`Estimator API request failed with status ${status}`);
    this.name = 'EstimatorApiError';
  }
}

const normalizeBaseUrl = (baseUrl?: string) => (baseUrl ? baseUrl.replace(/\/$/, '') : '');

const joinApiUrl = (baseUrl: string, path: string) => {
  if (baseUrl.endsWith('/api') && path.startsWith('/api/')) return `${baseUrl}${path.slice(4)}`;

  return `${baseUrl}${path}`;
};

export class EstimatorApiClient {
  private readonly baseUrl: string;
  private readonly locale?: string;

  constructor(options: { baseUrl?: string; locale?: string } = {}) {
    const env = (import.meta as unknown as { env?: Record<string, string | undefined> }).env;
    this.baseUrl = normalizeBaseUrl(options.baseUrl ?? env?.PUBLIC_API_URL);
    this.locale = options.locale;
  }

  async request<T>(path: string, options: RequestInit = {}): Promise<T> {
    const response = await fetch(joinApiUrl(this.baseUrl, path), {
      ...options,
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        ...(this.locale ? { 'Accept-Language': this.locale } : {}),
        ...(options.headers ?? {}),
      },
    });

    if (!response.ok) {
      let body: unknown;
      try {
        body = await response.json();
      } catch {
        body = await response.text();
      }
      throw new EstimatorApiError(response.status, body);
    }

    return response.json() as Promise<T>;
  }

  async getQuizSchema(): Promise<QuizSchemaResponse> {
    const response = await this.request<ApiEnvelope<QuizSchemaResponse>>('/api/quiz/schema');
    return response.data;
  }

  async startQuiz(quizId?: string): Promise<QuizSessionResponse> {
    const response = await this.request<ApiEnvelope<QuizSessionResponse>>('/api/quiz/start', {
      method: 'POST',
      body: JSON.stringify(quizId ? { quiz_id: quizId } : {}),
    });
    return response.data;
  }

  async answerQuiz(params: { session_id: string; answer: unknown }): Promise<QuizSessionResponse> {
    const response = await this.request<ApiEnvelope<QuizSessionResponse>>('/api/quiz/answer', {
      method: 'POST',
      body: JSON.stringify(params),
    });
    return response.data;
  }

  async estimatePricing(sessionId: string): Promise<PricingResult> {
    const response = await this.request<ApiEnvelope<PricingResult>>('/api/pricing/estimate', {
      method: 'POST',
      body: JSON.stringify({ session_id: sessionId }),
    });
    return response.data;
  }

  async createLead(payload: LeadCreatePayload): Promise<LeadResult> {
    const response = await this.request<ApiEnvelope<LeadResult>>('/api/leads/create', {
      method: 'POST',
      body: JSON.stringify(payload),
    });
    return response.data;
  }
}

export const createEstimatorApi = (options?: { baseUrl?: string; locale?: string }) => new EstimatorApiClient(options);
