"use client";

import { DIALOG_COPY } from "@/constants/contact";
import { useContactDialog } from "@/contexts/ContactDialogContext";

export function WhatsAppFloatingButton() {
  const { open, openDialog } = useContactDialog();

  return (
    <button
      type="button"
      className={`wa-fab${open ? " wa-fab--hidden" : ""}`}
      aria-label={DIALOG_COPY.fabLabel}
      aria-hidden={open}
      tabIndex={open ? -1 : 0}
      onClick={() => openDialog()}
    >
      <span className="wa-fab__pulse" aria-hidden="true" />
      <span className="wa-fab__inner">
        <svg
          viewBox="0 0 24 24"
          width="26"
          height="26"
          fill="currentColor"
          aria-hidden="true"
        >
          <path d="M19.07 4.93A10 10 0 0 0 3.6 17.27L2 22l4.85-1.57A10 10 0 1 0 19.07 4.93Zm-7.06 15.38a8.32 8.32 0 0 1-4.24-1.16l-.3-.18-2.87.93.94-2.8-.2-.32a8.34 8.34 0 1 1 6.67 3.53Zm4.78-6.23c-.26-.13-1.55-.77-1.79-.85s-.41-.13-.59.13-.68.85-.84 1-.31.2-.57.07a6.83 6.83 0 0 1-2-1.25 7.55 7.55 0 0 1-1.4-1.75c-.15-.26 0-.4.11-.53s.26-.31.39-.46a1.78 1.78 0 0 0 .26-.43.48.48 0 0 0 0-.46c-.07-.13-.59-1.41-.8-1.94s-.43-.45-.59-.45h-.5a1 1 0 0 0-.72.34 2.93 2.93 0 0 0-.92 2.18 5.08 5.08 0 0 0 1.07 2.7 11.66 11.66 0 0 0 4.45 3.93 14.93 14.93 0 0 0 1.49.55 3.59 3.59 0 0 0 1.64.1 2.69 2.69 0 0 0 1.76-1.24 2.18 2.18 0 0 0 .15-1.24c-.06-.11-.23-.18-.49-.31Z" />
        </svg>
      </span>
    </button>
  );
}
