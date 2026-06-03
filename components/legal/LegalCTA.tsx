import type { LegalDocument } from "@/types";

import { Container } from "../ui/Container";
import { CTAButton } from "../ui/CTAButton";

interface LegalCTAProps {
  readonly document: LegalDocument;
}

export function LegalCTA({ document }: LegalCTAProps) {
  const mailtoHref = `mailto:${document.contact.email}?subject=${document.contact.subject}`;

  return (
    <section className="legal-cta" aria-labelledby={`legal-${document.slug}-cta`}>
      <Container>
        <div className="legal-cta__card">
          <span className="eyebrow">Hulp nodig bij deze tekst?</span>
          <h2 id={`legal-${document.slug}-cta`} className="legal-cta__title">
            Praat met ons, <em>niet met de kleine lettertjes.</em>
          </h2>
          <p className="legal-cta__sub">
            Is iets niet duidelijk? Wij leggen het graag uit. Neem contact op
            en u ontvangt binnen één werkdag een reactie.
          </p>
          <div className="legal-cta__actions">
            <CTAButton
              label="Start een gesprek"
              variant="primary"
              showArrow
            />
            <a href={mailtoHref} className="btn btn-ghost">
              Liever mailen
            </a>
          </div>
        </div>
      </Container>
    </section>
  );
}
