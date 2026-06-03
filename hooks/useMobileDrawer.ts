"use client";

import { useCallback, useEffect, useState } from "react";

export interface MobileDrawerApi {
  readonly isOpen: boolean;
  readonly open: () => void;
  readonly close: () => void;
}

export function useMobileDrawer(): MobileDrawerApi {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const open = useCallback((): void => {
    setIsOpen(true);
  }, []);

  const close = useCallback((): void => {
    setIsOpen(false);
  }, []);

  useEffect((): (() => void) => {
    if (!isOpen) {
      document.body.style.overflow = "";
      return (): void => undefined;
    }
    document.body.style.overflow = "hidden";
    const onKey = (event: KeyboardEvent): void => {
      if (event.key === "Escape") close();
    };
    document.addEventListener("keydown", onKey);
    return (): void => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [isOpen, close]);

  return { isOpen, open, close };
}
