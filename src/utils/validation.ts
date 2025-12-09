/**
 * Validates email format
 */
export function isValidEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

/**
 * Validates required fields
 */
export function validateRequired<T extends Record<string, unknown>>(
  data: T,
  fields: (keyof T)[]
): { isValid: boolean; missingFields: string[] } {
  const missingFields: string[] = [];

  fields.forEach((field) => {
    const value = data[field];
    if (!value || (typeof value === 'string' && value.trim() === '')) {
      missingFields.push(String(field));
    }
  });

  return {
    isValid: missingFields.length === 0,
    missingFields,
  };
}

