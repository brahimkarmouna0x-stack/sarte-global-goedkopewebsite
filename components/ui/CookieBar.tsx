"use client";

import { COOKIE_COPY } from "@/constants";
import { useCookieConsent } from "@/hooks/useCookieConsent";

export function CookieBar() {
  const { isVisible, dismiss } = useCookieConsent({
    storageKey: COOKIE_COPY.storageKey,
    delayMs: COOKIE_COPY.delayMs,
  });

  return (
    <div
      className={isVisible ? "cookies show" : "cookies"}
      role="region"
      aria-label="Cookiemelding"
      aria-hidden={!isVisible}
    >
      <p>
        {COOKIE_COPY.message}{" "}
        <a href={COOKIE_COPY.policyHref}>{COOKIE_COPY.policyLabel}</a>.
      </p>
      <div className="cookies-cta">
        <button className="deny" onClick={dismiss} type="button">
          {COOKIE_COPY.declineLabel}
        </button>
        <button className="accept" onClick={dismiss} type="button">
          {COOKIE_COPY.acceptLabel}
        </button>
      </div>
    </div>
  );
}
