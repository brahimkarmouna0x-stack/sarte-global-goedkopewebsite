import type { Service } from "@/types";

import { CTAButton } from "../ui/CTAButton";
import { Container } from "../ui/Container";
import { ServiceIcon } from "../ui/ServiceIcon";

interface ServicePageHeroProps {
  service: Service;
}

export function ServicePageHero({ service }: ServicePageHeroProps) {
  return (
    <section className="svc-page-hero" aria-labelledby={`svc-${service.slug}-h`}>
      <span className="svc-page-hero__orb svc-page-hero__orb--a" aria-hidden="true" />
      <span className="svc-page-hero__orb svc-page-hero__orb--b" aria-hidden="true" />

      <Container className="svc-page-hero__inner">
        <div className="svc-page-hero__icon" aria-hidden="true">
          <ServiceIcon name={service.icon} />
        </div>
        <p className="eyebrow svc-page-hero__eyebrow">{service.heroEyebrow}</p>
        <h1 className="h2 svc-page-hero__title" id={`svc-${service.slug}-h`}>
          {service.heroTitleLead} <em>{service.heroTitleEm}</em>
        </h1>
        <p className="sub svc-page-hero__sub">{service.tagline}</p>

        <div className="svc-page-hero__cta">
          <CTAButton
            label={service.cta.primaryLabel}
            variant="primary"
            projectType={service.name}
          />
          <a href={service.cta.secondaryHref} className="btn btn-ghost">
            {service.cta.secondaryLabel}
          </a>
        </div>
      </Container>
    </section>
  );
}
