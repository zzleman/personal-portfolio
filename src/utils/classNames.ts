/**
 * Utility function to conditionally join classNames
 * Similar to the popular 'clsx' library
 */
export function classNames(
  ...classes: (string | boolean | undefined | null)[]
): string {
  return classes.filter(Boolean).join(' ');
}

