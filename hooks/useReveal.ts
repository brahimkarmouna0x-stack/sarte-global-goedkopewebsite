"use client";

import { useEffect, useRef, useState, type RefObject } from "react";

export interface UseRevealOptions {
  readonly threshold?: number;
  readonly rootMargin?: string;
  readonly once?: boolean;
}

export interface UseRevealResult<T extends HTMLElement> {
  readonly ref: RefObject<T | null>;
  readonly isIn: boolean;
}

export function useReveal<T extends HTMLElement = HTMLDivElement>(
  options: UseRevealOptions = {}
): UseRevealResult<T> {
  const { threshold = 0.12, rootMargin = "0px 0px -10% 0px", once = true } =
    options;
  const ref = useRef<T>(null);
  const [isIn, setIsIn] = useState<boolean>(false);

  useEffect((): (() => void) => {
    const node = ref.current;
    if (!node) return (): void => undefined;
    if (typeof IntersectionObserver === "undefined") {
      const id = requestAnimationFrame((): void => {
        setIsIn(true);
      });
      return (): void => {
        cancelAnimationFrame(id);
      };
    }
    const io = new IntersectionObserver(
      (entries: readonly IntersectionObserverEntry[]): void => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setIsIn(true);
            if (once) io.unobserve(entry.target);
          } else if (!once) {
            setIsIn(false);
          }
        }
      },
      { threshold, rootMargin }
    );
    io.observe(node);
    return (): void => {
      io.disconnect();
    };
  }, [threshold, rootMargin, once]);

  return { ref, isIn };
}
