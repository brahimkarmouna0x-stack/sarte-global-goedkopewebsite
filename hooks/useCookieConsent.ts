"use client";

import { useCallback, useEffect, useState } from "react";

export interface UseCookieConsentOptions {
  readonly storageKey: string;
  readonly delayMs: number;
}

export interface CookieConsentApi {
  readonly isVisible: boolean;
  readonly dismiss: () => void;
}

export function useCookieConsent(
  options: UseCookieConsentOptions
): CookieConsentApi {
  const { storageKey, delayMs } = options;
  const [isVisible, setIsVisible] = useState<boolean>(false);

  useEffect((): (() => void) => {
    let seen: string | null;
    try {
      seen = window.localStorage.getItem(storageKey);
    } catch {
      seen = "1";
    }
    if (seen) return (): void => undefined;
    const id = window.setTimeout((): void => {
      setIsVisible(true);
    }, delayMs);
    return (): void => {
      window.clearTimeout(id);
    };
  }, [storageKey, delayMs]);

  const dismiss = useCallback((): void => {
    setIsVisible(false);
    try {
      window.localStorage.setItem(storageKey, "1");
    } catch {
      // localStorage may be unavailable; ignore silently
    }
  }, [storageKey]);

  return { isVisible, dismiss };
}
