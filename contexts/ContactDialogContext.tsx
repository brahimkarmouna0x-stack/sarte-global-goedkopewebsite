"use client";

import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
  type ReactNode,
} from "react";

export interface ContactPrefill {
  readonly projectType?: string;
}

interface ContactDialogContextValue {
  readonly open: boolean;
  readonly prefill: ContactPrefill | null;
  readonly openDialog: (prefill?: ContactPrefill) => void;
  readonly closeDialog: () => void;
}

const ContactDialogContext = createContext<ContactDialogContextValue | null>(
  null,
);

interface ContactDialogProviderProps {
  readonly children: ReactNode;
}

export function ContactDialogProvider({ children }: ContactDialogProviderProps) {
  const [open, setOpen] = useState<boolean>(false);
  const [prefill, setPrefill] = useState<ContactPrefill | null>(null);

  const openDialog = useCallback((next?: ContactPrefill) => {
    setPrefill(next ?? null);
    setOpen(true);
  }, []);

  const closeDialog = useCallback(() => {
    setOpen(false);
  }, []);

  const value = useMemo<ContactDialogContextValue>(
    () => ({ open, prefill, openDialog, closeDialog }),
    [open, prefill, openDialog, closeDialog],
  );

  return (
    <ContactDialogContext.Provider value={value}>
      {children}
    </ContactDialogContext.Provider>
  );
}

export function useContactDialog(): ContactDialogContextValue {
  const ctx = useContext(ContactDialogContext);
  if (!ctx) {
    throw new Error(
      "useContactDialog must be used within a <ContactDialogProvider />",
    );
  }
  return ctx;
}
