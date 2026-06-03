import { CTA_SECTION } from "@/constants";

import { CTAButton } from "../ui/CTAButton";
import { Container } from "../ui/Container";
import { Reveal } from "../ui/Reveal";

function CtaBackground() {
  return (
    <div className="cta-bg" aria-hidden="true">
      <svg viewBox="0 0 1500 600" preserveAspectRatio="xMidYMid slice">
        <defs>
          <pattern
            id="cta-grid"
            x="0"
            y="0"
            width="60"
            height="60"
            patternUnits="userSpaceOnUse"
          >
            <path
              d="M60 0H0V60"
              fill="none"
              stroke="var(--color-cta-grid)"
              strokeWidth="1"
            />
          </pattern>
        </defs>
        <rect width="1500" height="600" fill="url(#cta-grid)" />
        <circle cx="280" cy="120" r="2" fill="var(--color-cta-dot)" />
        <circle cx="980" cy="320" r="2" fill="var(--color-cta-dot)" />
        <circle cx="1280" cy="480" r="2" fill="var(--color-cta-dot)" />
        <circle cx="540" cy="460" r="2" fill="var(--color-cta-dot)" />
      </svg>
    </div>
  );
}

export function CallToAction() {
  return (
    <section className="cta" id="cta" aria-labelledby="cta-h">
      <CtaBackground />
      <Reveal>
        <Container className="cta-inner">
          <h2 id="cta-h">
            {CTA_SECTION.titleLead} <em>{CTA_SECTION.titleEm}</em>
          </h2>
          <p className="sub">{CTA_SECTION.sub}</p>
          <CTAButton
            label={CTA_SECTION.ctaLabel}
            variant="primary"
            size="large"
          />
        </Container>
      </Reveal>
    </section>
  );
}
