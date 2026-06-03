import type { LegalSection } from "@/types";

interface LegalTOCProps {
  readonly sections: readonly LegalSection[];
}

export function LegalTOC({ sections }: LegalTOCProps) {
  return (
    <>
      <nav className="legal-toc" aria-label="Inhoudsopgave">
        <span className="eyebrow legal-toc__label">Inhoudsopgave</span>
        <ol className="legal-toc__list">
          {sections.map((section, index) => (
            <li key={section.id} className="legal-toc__item">
              <a href={`#${section.id}`} className="legal-toc__link">
                <span className="legal-toc__num">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <span className="legal-toc__text">{section.heading}</span>
              </a>
            </li>
          ))}
        </ol>
      </nav>

      <details className="legal-toc-mobile">
        <summary>
          <span className="eyebrow">Inhoudsopgave</span>
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.6"
            aria-hidden="true"
            className="legal-toc-mobile__chev"
          >
            <path d="M6 9l6 6 6-6" strokeLinecap="round" />
          </svg>
        </summary>
        <ol className="legal-toc__list">
          {sections.map((section, index) => (
            <li key={section.id} className="legal-toc__item">
              <a href={`#${section.id}`} className="legal-toc__link">
                <span className="legal-toc__num">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <span className="legal-toc__text">{section.heading}</span>
              </a>
            </li>
          ))}
        </ol>
      </details>
    </>
  );
}
