"use client";

import { useEffect } from "react";

interface ErrorPageProps {
  readonly error: Error & { digest?: string };
  readonly reset: () => void;
}

export default function Error({ error, reset }: ErrorPageProps) {
  useEffect(() => {
    console.error("Application error:", error);
  }, [error]);

  return (
    <main className="grid min-h-screen place-items-center px-4" id="top">
      <div className="text-center">
        <p className="font-[family-name:var(--font-display)] text-[clamp(60px,15vw,160px)] font-bold leading-none text-(--color-accent) select-none">
          Oeps!
        </p>
        <h1 className="font-[family-name:var(--font-display)] text-3xl font-bold mt-6 mb-3">
          Er ging iets mis
        </h1>
        <p className="text-(--color-text-secondary) max-w-md mx-auto mb-8">
          Er is een onverwachte fout opgetreden. Probeer het opnieuw of neem contact met
          ons op als het probleem aanhoudt.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <button type="button" onClick={reset} className="btn btn-primary btn-large">
            Probeer opnieuw
          </button>
          <a href="mailto:info@groeimetwebdesign.nl" className="btn btn-ghost btn-large">
            Meld dit probleem
          </a>
        </div>
      </div>
    </main>
  );
}
