/**
 * Shared input validation and sanitization utilities
 */

/**
 * Validates whether an email string matches standard RFC email pattern.
 */
export function isValidEmail(email: string): boolean {
  if (!email || typeof email !== 'string') return false;
  const trimmed = email.trim();
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(trimmed);
}

/**
 * Sanitizes generic user text input by trimming whitespace.
 */
export function sanitizeString(val: unknown): string {
  if (val === null || val === undefined) return '';
  return String(val).trim();
}

/**
 * Validates whether a phone number has a reasonable length and digit composition.
 */
export function isValidPhone(phone: string): boolean {
  if (!phone || typeof phone !== 'string') return false;
  const digits = phone.replace(/\D/g, '');
  return digits.length >= 7 && digits.length <= 15;
}
