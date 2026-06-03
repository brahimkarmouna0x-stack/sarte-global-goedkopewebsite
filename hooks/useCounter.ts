"use client";

import { useEffect, useState } from "react";
import { useReducedMotion } from "./useReducedMotion";

export interface UseCounterOptions {
  readonly target: number;
  readonly start: boolean;
  readonly durationMs?: number;
}

export function useCounter(options: UseCounterOptions): number {
  const { target, start, durationMs = 1800 } = options;
  const reduced = useReducedMotion();
  const [value, setValue] = useState<number>(0);

  useEffect((): (() => void) => {
    if (!start) return (): void => undefined;
    if (reduced) {
      const id = requestAnimationFrame((): void => {
        setValue(target);
      });
      return (): void => {
        cancelAnimationFrame(id);
      };
    }
    let raf = 0;
    const startTime: number = performance.now();
    const tick = (now: number): void => {
      const progress: number = Math.min(1, (now - startTime) / durationMs);
      const eased: number = 1 - Math.pow(1 - progress, 3);
      setValue(Math.round(eased * target));
      if (progress < 1) {
        raf = requestAnimationFrame(tick);
      }
    };
    raf = requestAnimationFrame(tick);
    return (): void => {
      cancelAnimationFrame(raf);
    };
  }, [target, start, durationMs, reduced]);

  return value;
}
