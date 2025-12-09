import { Resend } from 'resend';

/**
 * Creates a Resend client instance
 * Only initializes when first accessed
 */
let resendInstance: Resend | null = null;

function getResend(): Resend {
  if (!resendInstance) {
    const apiKey = process.env.RESEND_API_KEY;
    if (!apiKey) {
      throw new Error(
        'Missing RESEND_API_KEY environment variable. Please add it to your .env.local file.'
      );
    }
    resendInstance = new Resend(apiKey);
  }
  return resendInstance;
}

/**
 * Resend email client instance
 * Lazy-loaded - only initializes when first accessed
 */
export const resend = new Proxy({} as Resend, {
  get(_target, prop) {
    const instance = getResend();
    const value = instance[prop as keyof Resend];
    if (typeof value === 'function') {
      return value.bind(instance);
    }
    return value;
  },
});

