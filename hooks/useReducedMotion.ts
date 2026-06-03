"use client";

import { useCallback, useSyncExternalStore } from "react";

function getReducedMotionMatch(): MediaQueryList {
  return window.matchMedia("(prefers-reduced-motion: reduce)");
}

export function useReducedMotion(): boolean {
  const subscribe = useCallback(
    (callback: (this: MediaQueryList, event: MediaQueryListEvent) => void): (() => void) => {
      const mq = getReducedMotionMatch();
      mq.addEventListener("change", callback);
      return (): void => {
        mq.removeEventListener("change", callback);
      };
    },
    []
  );

  const getSnapshot = useCallback((): boolean => {
    return getReducedMotionMatch().matches;
  }, []);

  return useSyncExternalStore(subscribe, getSnapshot, () => false);
}
