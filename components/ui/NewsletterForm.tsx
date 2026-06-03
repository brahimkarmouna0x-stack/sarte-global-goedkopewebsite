"use client";

import { useState, type FormEvent } from "react";

import { NEWSLETTER } from "@/constants";

type NoteStatus = "default" | "active";

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function NewsletterForm() {
  const [note, setNote] = useState<string>(NEWSLETTER.defaultNote);
  const [status, setStatus] = useState<NoteStatus>("default");
  const [email, setEmail] = useState<string>("");

  const handleSubmit = (event: FormEvent<HTMLFormElement>): void => {
    event.preventDefault();
    if (!EMAIL_PATTERN.test(email.trim())) {
      setNote(NEWSLETTER.errorNote);
      setStatus("active");
      return;
    }
    setNote(NEWSLETTER.successNote);
    setStatus("active");
    setEmail("");
  };

  return (
    <>
      <form className="newsletter" onSubmit={handleSubmit} noValidate>
        <label htmlFor="news-email">E-mailadres</label>
        <input
          id="news-email"
          type="email"
          placeholder={NEWSLETTER.placeholder}
          required
          autoComplete="email"
          value={email}
          onChange={(event): void => setEmail(event.target.value)}
        />
        <button type="submit" aria-label={NEWSLETTER.buttonLabel}>
          {NEWSLETTER.buttonLabel}
        </button>
      </form>
      <p className={status === "active" ? "news-note is-active" : "news-note"}>
        {note}
      </p>
    </>
  );
}
