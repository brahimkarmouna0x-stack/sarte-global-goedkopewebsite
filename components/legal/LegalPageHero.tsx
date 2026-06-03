import type { LegalDocument } from "@/types";

import { Container } from "../ui/Container";
import { ServiceIcon } from "../ui/ServiceIcon";

interface LegalPageHeroProps {
  readonly document: LegalDocument;
}

export function LegalPageHero({ document }: LegalPageHeroProps) {
  return (
    <section
      className="legal-page-hero"
      aria-labelledby={`legal-${document.slug}-h`}
    >
      <span
        className="legal-page-hero__orb legal-page-hero__orb--a"
        aria-hidden="true"
      />
      <span
        className="legal-page-hero__orb legal-page-hero__orb--b"
        aria-hidden="true"
      />

      <Container className="legal-page-hero__inner">
        <div className="legal-page-hero__icon" aria-hidden="true">
          <ServiceIcon name={document.icon} />
        </div>
        <p className="eyebrow legal-page-hero__eyebrow">{document.heroEyebrow}</p>
        <h1
          className="h2 legal-page-hero__title"
          id={`legal-${document.slug}-h`}
        >
          {document.titleLead} <em>{document.titleEm}</em>
        </h1>
        <span className="legal-updated" aria-label="Laatst bijgewerkt">
          Laatst bijgewerkt · {document.lastUpdated}
        </span>
        <p className="sub legal-page-hero__sub">{document.intro}</p>
      </Container>
    </section>
  );
}
