"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useRef } from "react";

import { DIALOG_COPY } from "@/constants/contact";
import { useContactDialog } from "@/contexts/ContactDialogContext";

import { ContactForm } from "./ContactForm";

const EASE = [0.2, 0.7, 0.2, 1] as const;

export function ContactDialog() {
  const { open, prefill, closeDialog } = useContactDialog();
  const previouslyFocused = useRef<HTMLElement | null>(null);
  const panelRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!open) return;

    previouslyFocused.current =
      (document.activeElement as HTMLElement | null) ?? null;

    const root = document.documentElement;
    const prevOverflow = root.style.overflow;
    root.style.overflow = "hidden";

    function handleKey(event: KeyboardEvent) {
      if (event.key === "Escape") {
        event.preventDefault();
        closeDialog();
        return;
      }
      if (event.key !== "Tab") return;

      const panel = panelRef.current;
      if (!panel) return;
      const focusables = panel.querySelectorAll<HTMLElement>(
        'a[href], button:not([disabled]), textarea:not([disabled]), input:not([disabled]), select:not([disabled]), [tabindex]:not([tabindex="-1"])',
      );
      const first = focusables[0];
      const last = focusables[focusables.length - 1];
      if (!first || !last) return;
      const active = document.activeElement as HTMLElement | null;

      if (event.shiftKey && active === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && active === last) {
        event.preventDefault();
        first.focus();
      }
    }

    window.addEventListener("keydown", handleKey);
    return () => {
      window.removeEventListener("keydown", handleKey);
      root.style.overflow = prevOverflow;
      previouslyFocused.current?.focus?.();
    };
  }, [open, closeDialog]);

  return (
    <AnimatePresence>
      {open ? (
        <motion.div
          className="cd-root"
          role="dialog"
          aria-modal="true"
          aria-labelledby="contact-dialog-title"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25, ease: EASE }}
        >
          <motion.div
            className="cd-overlay"
            onClick={closeDialog}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3, ease: EASE }}
            aria-hidden="true"
          />

          <motion.div
            ref={panelRef}
            className="cd-panel"
            initial={{ opacity: 0, scale: 0.96, y: 14 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.97, y: 8 }}
            transition={{ duration: 0.45, ease: EASE }}
          >
            <span className="cd-panel__glow" aria-hidden="true" />

            <button
              type="button"
              className="cd-close"
              onClick={closeDialog}
              aria-label={DIALOG_COPY.closeLabel}
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden="true">
                <path d="M6 6l12 12M18 6L6 18" strokeLinecap="round" />
              </svg>
            </button>

            <div className="cd-head">
              <p className="cd-eyebrow">{DIALOG_COPY.eyebrow}</p>
              <h2 className="cd-title" id="contact-dialog-title">
                {DIALOG_COPY.title} <em>{DIALOG_COPY.titleEm}</em>
              </h2>
              <p className="cd-sub">{DIALOG_COPY.subtitle}</p>
            </div>

            <ContactForm
              initialProjectType={prefill?.projectType}
              onComplete={closeDialog}
            />
          </motion.div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
