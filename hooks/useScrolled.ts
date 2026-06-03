"use client";

import { useEffect, useState } from "react";

export function useScrolled(threshold: number): boolean {
  const [scrolled, setScrolled] = useState<boolean>(false);

  useEffect((): (() => void) => {
    let ticking = false;

    const handle = (): void => {
      if (ticking) return;
      ticking = true;
      window.requestAnimationFrame(() => {
        setScrolled(window.scrollY > threshold);
        ticking = false;
      });
    };

    handle();
    window.addEventListener("scroll", handle, { passive: true });
    return (): void => {
      window.removeEventListener("scroll", handle);
    };
  }, [threshold]);

  return scrolled;
}
