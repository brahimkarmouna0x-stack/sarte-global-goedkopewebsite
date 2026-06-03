"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { useReducedMotion } from "./useReducedMotion";

export interface UseCarouselOptions {
  readonly length: number;
  readonly intervalMs: number;
}

export interface CarouselApi {
  readonly index: number;
  readonly goTo: (next: number) => void;
  readonly next: () => void;
  readonly prev: () => void;
  readonly pause: () => void;
  readonly resume: () => void;
}

export function useCarousel(options: UseCarouselOptions): CarouselApi {
  const { length, intervalMs } = options;
  const reduced = useReducedMotion();
  const [index, setIndex] = useState<number>(0);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const pausedRef = useRef<boolean>(false);

  const clear = useCallback((): void => {
    if (timerRef.current !== null) {
      clearInterval(timerRef.current);
      timerRef.current = null;
    }
  }, []);

  const tick = useCallback((): void => {
    setIndex((current: number): number => (current + 1) % length);
  }, [length]);

  const start = useCallback((): void => {
    if (reduced || pausedRef.current) return;
    clear();
    timerRef.current = setInterval(tick, intervalMs);
  }, [reduced, intervalMs, tick, clear]);

  useEffect((): (() => void) => {
    start();
    return clear;
  }, [start, clear]);

  const goTo = useCallback(
    (next: number): void => {
      clear();
      setIndex(((next % length) + length) % length);
      if (!pausedRef.current) start();
    },
    [length, start, clear]
  );

  const next = useCallback((): void => {
    goTo(index + 1);
  }, [goTo, index]);

  const prev = useCallback((): void => {
    goTo(index - 1);
  }, [goTo, index]);

  const pause = useCallback((): void => {
    pausedRef.current = true;
    clear();
  }, [clear]);

  const resume = useCallback((): void => {
    pausedRef.current = false;
    start();
  }, [start]);

  return { index, goTo, next, prev, pause, resume };
}
