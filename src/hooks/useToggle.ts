import { useState, useCallback } from 'react';

/**
 * Custom hook for toggle functionality
 * @param initialValue - Initial state value (default: false)
 * @returns [isOpen, toggle, setValue] - Current state, toggle function, and setter
 */
export function useToggle(initialValue = false) {
  const [isOpen, setIsOpen] = useState(initialValue);

  const toggle = useCallback(() => {
    setIsOpen((prev) => !prev);
  }, []);

  const setValue = useCallback((value: boolean) => {
    setIsOpen(value);
  }, []);

  return [isOpen, toggle, setValue] as const;
}

