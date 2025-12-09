import { useState, useCallback } from 'react';

interface UseTransitionOptions {
  duration?: number;
  delay?: number;
}

/**
 * Custom hook for managing smooth transitions between content
 * @param options - Transition timing options
 * @returns [isTransitioning, startTransition] - Transition state and trigger function
 */
export function useTransition(options: UseTransitionOptions = {}) {
  const { duration = 200, delay = 50 } = options;
  const [isTransitioning, setIsTransitioning] = useState(false);

  const startTransition = useCallback(
    (callback: () => void) => {
      setIsTransitioning(true);
      setTimeout(() => {
        callback();
        setTimeout(() => {
          setIsTransitioning(false);
        }, delay);
      }, duration);
    },
    [duration, delay]
  );

  return [isTransitioning, startTransition] as const;
}

