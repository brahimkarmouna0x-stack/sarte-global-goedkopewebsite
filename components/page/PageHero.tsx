import type { PageHeroContent } from "@/types";

import { Container } from "../ui/Container";
import { ServiceIcon } from "../ui/ServiceIcon";

interface PageHeroProps {
  readonly content: PageHeroContent;
  readonly id?: string;
  readonly children?: React.ReactNode;
}

export function PageHero({ content, id, children }: PageHeroProps) {
  const align = content.align ?? "center";
  const headingId = id ?? "page-hero-h";

  return (
    <section
      className={`page-hero page-hero--${align}`}
      aria-labelledby={headingId}
    >
      <span className="page-hero__orb page-hero__orb--a" aria-hidden="true" />
      <span className="page-hero__orb page-hero__orb--b" aria-hidden="true" />

      <Container className="page-hero__inner">
        {content.icon ? (
          <div className="page-hero__icon" aria-hidden="true">
            <ServiceIcon name={content.icon} />
          </div>
        ) : null}
        <p className="eyebrow page-hero__eyebrow">{content.eyebrow}</p>
        <h1 className="h2 page-hero__title" id={headingId}>
          {content.titleLead} <em>{content.titleEm}</em>
        </h1>
        {content.intro ? (
          <p className="sub page-hero__sub">{content.intro}</p>
        ) : null}
        {children ? <div className="page-hero__cta">{children}</div> : null}
      </Container>
    </section>
  );
}
