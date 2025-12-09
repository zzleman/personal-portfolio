export interface ContactFormData {
  name: string;
  email: string;
  message: string;
}

export interface ContactApiResponse {
  success: boolean;
  message: string;
}

export interface ContactApiError {
  error: string;
  status: number;
  details?: unknown;
}

