"use client";

import { motion } from "framer-motion";
import {
  useEffect,
  useRef,
  useState,
  type FormEvent,
} from "react";

import { DIALOG_COPY, PROJECT_TYPES } from "@/constants/contact";
import { buildWhatsAppUrl } from "@/lib/whatsapp";

const EASE = [0.2, 0.7, 0.2, 1] as const;

interface ContactFormProps {
  readonly initialProjectType?: string;
  readonly onComplete: () => void;
}

interface FormState {
  name: string;
  email: string;
  projectType: string;
  message: string;
}

export function ContactForm({
  initialProjectType,
  onComplete,
}: ContactFormProps) {
  const [state, setState] = useState<FormState>({
    name: "",
    email: "",
    projectType: initialProjectType ?? "",
    message: "",
  });
  const [submitting, setSubmitting] = useState<boolean>(false);
  const [showMessageError, setShowMessageError] = useState<boolean>(false);
  const textareaRef = useRef<HTMLTextAreaElement | null>(null);

  useEffect(() => {
    const id = window.setTimeout(() => {
      textareaRef.current?.focus();
    }, 240);
    return () => window.clearTimeout(id);
  }, []);

  function update<K extends keyof FormState>(key: K, value: FormState[K]) {
    setState((prev) => ({ ...prev, [key]: value }));
    if (key === "message" && showMessageError && String(value).trim().length > 0) {
      setShowMessageError(false);
    }
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (submitting) return;

    if (state.message.trim().length === 0) {
      setShowMessageError(true);
      textareaRef.current?.focus();
      return;
    }

    setSubmitting(true);
    const url = buildWhatsAppUrl({
      name: state.name,
      email: state.email,
      projectType: state.projectType,
      message: state.message,
    });

    window.setTimeout(() => {
      window.open(url, "_blank", "noopener,noreferrer");
      onComplete();
      setSubmitting(false);
    }, 650);
  }

  return (
    <form className="cd-form" onSubmit={handleSubmit} noValidate>
      <div className="cd-row">
        <label className="cd-field">
          <span className="cd-label">{DIALOG_COPY.nameLabel}</span>
          <input
            className="cd-input"
            type="text"
            autoComplete="name"
            placeholder={DIALOG_COPY.namePlaceholder}
            value={state.name}
            onChange={(e) => update("name", e.target.value)}
            disabled={submitting}
          />
        </label>
        <label className="cd-field">
          <span className="cd-label">{DIALOG_COPY.emailLabel}</span>
          <input
            className="cd-input"
            type="email"
            autoComplete="email"
            placeholder={DIALOG_COPY.emailPlaceholder}
            value={state.email}
            onChange={(e) => update("email", e.target.value)}
            disabled={submitting}
          />
        </label>
      </div>

      <label className="cd-field">
        <span className="cd-label">{DIALOG_COPY.projectTypeLabel}</span>
        <div className="cd-select-wrap">
          <select
            className="cd-input cd-select"
            value={state.projectType}
            onChange={(e) => update("projectType", e.target.value)}
            disabled={submitting}
          >
            <option value="">
              {DIALOG_COPY.projectTypePlaceholderOption}
            </option>
            {PROJECT_TYPES.map((type) => (
              <option key={type} value={type}>
                {type}
              </option>
            ))}
          </select>
          <span className="cd-select-caret" aria-hidden="true">
            <svg viewBox="0 0 12 8" fill="none" stroke="currentColor" strokeWidth="1.6">
              <path d="M1 1.5 6 6.5 11 1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </span>
        </div>
      </label>

      <label className="cd-field">
        <span className="cd-label">{DIALOG_COPY.messageLabel}</span>
        <textarea
          ref={textareaRef}
          className={`cd-input cd-textarea${showMessageError ? " cd-input--error" : ""}`}
          rows={4}
          placeholder={DIALOG_COPY.messagePlaceholder}
          value={state.message}
          onChange={(e) => update("message", e.target.value)}
          disabled={submitting}
          aria-invalid={showMessageError || undefined}
        />
        {showMessageError ? (
          <span className="cd-error">Voeg een korte beschrijving toe zodat we je goed kunnen helpen.</span>
        ) : null}
      </label>

      <motion.button
        type="submit"
        className="btn btn-primary btn-large cd-submit"
        disabled={submitting}
        whileTap={{ scale: 0.985 }}
        transition={{ duration: 0.18, ease: EASE }}
      >
        {submitting ? (
          <>
            <WhatsAppGlyph />
            {DIALOG_COPY.submittingLabel}
          </>
        ) : (
          <>
            <WhatsAppGlyph />
            {DIALOG_COPY.submitLabel}
            <span className="arr">→</span>
          </>
        )}
      </motion.button>

      <p className="cd-fineprint">
        Veilige doorverwijzing naar WhatsApp. Wij delen jouw gegevens nooit met derden.
      </p>
    </form>
  );
}

function WhatsAppGlyph() {
  return (
    <svg
      viewBox="0 0 24 24"
      width="18"
      height="18"
      fill="currentColor"
      aria-hidden="true"
      className="cd-wa-glyph"
    >
      <path d="M19.07 4.93A10 10 0 0 0 3.6 17.27L2 22l4.85-1.57A10 10 0 1 0 19.07 4.93Zm-7.06 15.38a8.32 8.32 0 0 1-4.24-1.16l-.3-.18-2.87.93.94-2.8-.2-.32a8.34 8.34 0 1 1 6.67 3.53Zm4.78-6.23c-.26-.13-1.55-.77-1.79-.85s-.41-.13-.59.13-.68.85-.84 1-.31.2-.57.07a6.83 6.83 0 0 1-2-1.25 7.55 7.55 0 0 1-1.4-1.75c-.15-.26 0-.4.11-.53s.26-.31.39-.46a1.78 1.78 0 0 0 .26-.43.48.48 0 0 0 0-.46c-.07-.13-.59-1.41-.8-1.94s-.43-.45-.59-.45h-.5a1 1 0 0 0-.72.34 2.93 2.93 0 0 0-.92 2.18 5.08 5.08 0 0 0 1.07 2.7 11.66 11.66 0 0 0 4.45 3.93 14.93 14.93 0 0 0 1.49.55 3.59 3.59 0 0 0 1.64.1 2.69 2.69 0 0 0 1.76-1.24 2.18 2.18 0 0 0 .15-1.24c-.06-.11-.23-.18-.49-.31Z" />
    </svg>
  );
}
