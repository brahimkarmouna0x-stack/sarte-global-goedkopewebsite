import type { ServiceCTACopy } from "@/types";

import { CTAButton } from "../ui/CTAButton";
import { Container } from "../ui/Container";
import { Reveal } from "../ui/Reveal";

interface ServiceCTAProps {
  copy: ServiceCTACopy;
  projectType?: string;
}

export function ServiceCTA({ copy, projectType }: ServiceCTAProps) {
  return (
    <section className="svc-cta" aria-label="Neem contact op">
      <Container>
        <Reveal as="div" className="svc-cta-card">
          <span className="svc-cta-card__orb svc-cta-card__orb--a" aria-hidden="true" />
          <span className="svc-cta-card__orb svc-cta-card__orb--b" aria-hidden="true" />

          <div className="svc-cta-card__body">
            <h2 className="h2 svc-cta-card__title">
              {copy.titleLead} <em>{copy.titleEm}</em>
            </h2>
            <p className="sub svc-cta-card__sub">{copy.sub}</p>

            <div className="svc-cta-card__actions">
              <CTAButton
                label={copy.primaryLabel}
                variant="primary"
                size="large"
                projectType={projectType}
              />
              <a href={copy.secondaryHref} className="btn btn-ghost">
                {copy.secondaryLabel}
              </a>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
