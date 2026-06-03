"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { useReducedMotion } from "./useReducedMotion";

export interface UseTeamShowcaseOptions {
  readonly length: number;
  readonly durationMs: number;
  readonly swapMs?: number;
}

export type InfoPhase = "in" | "out" | "idle";

export interface TeamShowcaseApi {
  readonly index: number;
  readonly displayIndex: number;
  readonly phase: InfoPhase;
  readonly progressKey: number;
  readonly progressActive: boolean;
  readonly goTo: (next: number) => void;
  readonly next: () => void;
  readonly prev: () => void;
  readonly pause: () => void;
  readonly resume: () => void;
}

export function useTeamShowcase(
  options: UseTeamShowcaseOptions
): TeamShowcaseApi {
  const { length, durationMs, swapMs = 380 } = options;
  const reduced = useReducedMotion();
  const [index, setIndex] = useState<number>(0);
  const [displayIndex, setDisplayIndex] = useState<number>(0);
  const [phase, setPhase] = useState<InfoPhase>("idle");
  const [progressKey, setProgressKey] = useState<number>(0);
  const [paused, setPaused] = useState<boolean>(false);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const swapRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const pausedRef = useRef<boolean>(false);

  const clearTimer = useCallback((): void => {
    if (timerRef.current !== null) {
      clearInterval(timerRef.current);
      timerRef.current = null;
    }
  }, []);

  const startAuto = useCallback((): void => {
    if (reduced || pausedRef.current) return;
    clearTimer();
    timerRef.current = setInterval((): void => {
      setIndex((current: number): number => (current + 1) % length);
    }, durationMs);
    setProgressKey((value: number): number => value + 1);
  }, [reduced, durationMs, length, clearTimer]);

  useEffect((): (() => void) => {
    startAuto();
    return clearTimer;
  }, [startAuto, clearTimer]);

  useEffect((): (() => void) => {
    const raf = requestAnimationFrame((): void => {
      setPhase("out");
    });
    if (swapRef.current !== null) clearTimeout(swapRef.current);
    swapRef.current = setTimeout((): void => {
      setDisplayIndex(index);
      setPhase("in");
    }, swapMs);
    return (): void => {
      cancelAnimationFrame(raf);
      if (swapRef.current !== null) clearTimeout(swapRef.current);
    };
  }, [index, swapMs]);

  const goTo = useCallback(
    (raw: number): void => {
      const target: number = ((raw % length) + length) % length;
      clearTimer();
      setIndex(target);
      if (!pausedRef.current) startAuto();
    },
    [length, startAuto, clearTimer]
  );

  const next = useCallback((): void => goTo(index + 1), [goTo, index]);
  const prev = useCallback((): void => goTo(index - 1), [goTo, index]);

  const pause = useCallback((): void => {
    pausedRef.current = true;
    setPaused(true);
    clearTimer();
  }, [clearTimer]);

  const resume = useCallback((): void => {
    pausedRef.current = false;
    setPaused(false);
    startAuto();
  }, [startAuto]);

  return {
    index,
    displayIndex,
    phase,
    progressKey,
    progressActive: !reduced && !paused,
    goTo,
    next,
    prev,
    pause,
    resume,
  };
}
