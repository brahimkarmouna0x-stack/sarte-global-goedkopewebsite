"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useRef,
  useState,
  type ReactNode,
} from "react";

import type { HeroSlide } from "@/types";

import { HERO_STAGE_INTERVAL_MS, HERO_STAGE_SLIDES } from "@/constants";

const RESUME_DELAY_MS = 8_000;

interface HeroStageContextValue {
  readonly slides: readonly HeroSlide[];
  readonly index: number;
  readonly intervalMs: number;
  readonly reducedMotion: boolean;
  readonly accent: string | undefined;
  readonly isPaused: boolean;
  readonly setIndex: (next: number) => void;
  readonly goNext: () => void;
  readonly goPrev: () => void;
  readonly advanceAuto: () => void;
  readonly pauseAuto: () => void;
  readonly resumeAuto: () => void;
}

const HeroStageContext = createContext<HeroStageContextValue | null>(null);

function usePrefersReducedMotion(): boolean {
  const [reduced, setReduced] = useState(() => {
    if (typeof window === "undefined") return false;
    return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  });

  useEffect(() => {
    const mql = window.matchMedia("(prefers-reduced-motion: reduce)");
    const onChange = (event: MediaQueryListEvent): void =>
      setReduced(event.matches);

    mql.addEventListener("change", onChange);
    return () => mql.removeEventListener("change", onChange);
  }, []);

  return reduced;
}

export function HeroStageProvider({ children }: { children: ReactNode }) {
  const slides = HERO_STAGE_SLIDES;
  const reducedMotion = usePrefersReducedMotion();
  const [index, setIndexState] = useState(0);
  const [manualPaused, setManualPaused] = useState(false);
  const [hoverPaused, setHoverPaused] = useState(false);
  const indexRef = useRef(0);
  const resumeTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const isPaused = manualPaused || hoverPaused;

  useEffect(() => {
    indexRef.current = index;
  }, [index]);

  const scheduleResume = useCallback(() => {
    if (reducedMotion || RESUME_DELAY_MS <= 0) return;

    if (resumeTimerRef.current) {
      clearTimeout(resumeTimerRef.current);
    }

    setManualPaused(true);
    resumeTimerRef.current = setTimeout(() => {
      setManualPaused(false);
      resumeTimerRef.current = null;
    }, RESUME_DELAY_MS);
  }, [reducedMotion]);

  const pauseAuto = useCallback(() => {
    if (!reducedMotion) {
      setHoverPaused(true);
    }
  }, [reducedMotion]);

  const resumeAuto = useCallback(() => {
    setHoverPaused(false);
  }, []);

  const goNext = useCallback(() => {
    if (slides.length <= 1) return;
    setIndexState((current) => (current + 1) % slides.length);
    scheduleResume();
  }, [scheduleResume, slides.length]);

  const goPrev = useCallback(() => {
    if (slides.length <= 1) return;
    setIndexState(
      (current) =>
        ((current - 1) % slides.length + slides.length) % slides.length,
    );
    scheduleResume();
  }, [scheduleResume, slides.length]);

  const advanceAuto = useCallback(() => {
    if (reducedMotion || isPaused || slides.length <= 1) return;
    setIndexState((current) => (current + 1) % slides.length);
  }, [isPaused, reducedMotion, slides.length]);

  const setIndex = useCallback(
    (next: number) => {
      if (!slides.length) return;

      const normalized =
        ((next % slides.length) + slides.length) % slides.length;

      if (normalized !== indexRef.current) {
        setIndexState(normalized);
        scheduleResume();
      }
    },
    [scheduleResume, slides.length],
  );

  useEffect(() => {
    return () => {
      if (resumeTimerRef.current) {
        clearTimeout(resumeTimerRef.current);
      }
    };
  }, []);

  const accent = slides[index]?.accent;

  return (
    <HeroStageContext.Provider
      value={{
        slides,
        index,
        intervalMs: HERO_STAGE_INTERVAL_MS,
        reducedMotion,
        accent,
        isPaused,
        setIndex,
        goNext,
        goPrev,
        advanceAuto,
        pauseAuto,
        resumeAuto,
      }}
    >
      {children}
    </HeroStageContext.Provider>
  );
}

export function useHeroStage(): HeroStageContextValue {
  const ctx = useContext(HeroStageContext);
  if (!ctx) throw new Error("useHeroStage must be used inside HeroStageProvider");
  return ctx;
}
