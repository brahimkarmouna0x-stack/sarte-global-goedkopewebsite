import Image from "next/image";

import { ABOUT_COMPANY, TRUST_LINE } from "@/constants";

import { Container } from "../ui/Container";
import { CTAButton } from "../ui/CTAButton";
import { Reveal } from "../ui/Reveal";

export function AboutCompany() {
  return (
    <section
      id="about"
      className="about-company"
      aria-labelledby="about-h"
      itemScope
      itemType="https://schema.org/Organization"
    >
      <meta itemProp="name" content={ABOUT_COMPANY.brand} />
      <meta itemProp="alternateName" content="Goedkopewebsitelatenmaken" />
      <meta itemProp="url" content="https://goedkopewebsite-latenmaken.nl" />

      <div className="about-company__grid" aria-hidden="true" />
      <div className="about-company__glow about-company__glow--a" aria-hidden="true" />
      <div className="about-company__glow about-company__glow--b" aria-hidden="true" />

      <Container>
        <div className="about-company__layout">
          <div className="about-company__intro">
            <Reveal as="header" className="about-company__head">
              <span className="eyebrow">{ABOUT_COMPANY.eyebrow}</span>
              <h2 className="h2 about-company__title" id="about-h">
                <span className="about-company__brand" itemProp="legalName">
                  {ABOUT_COMPANY.brand}
                </span>{" "}
                {ABOUT_COMPANY.titleLead}{" "}
                <em>{ABOUT_COMPANY.titleEm}</em> {ABOUT_COMPANY.titleTail}
              </h2>
              <p className="about-company__lead" itemProp="description">
                {ABOUT_COMPANY.lead}
              </p>
            </Reveal>

            <Reveal
              as="aside"
              className="about-company__media"
              ariaLabel={`${ABOUT_COMPANY.brand} vestiging`}
            >
              <span className="about-company__media-frame" aria-hidden="true" />
              <span className="about-company__media-corner about-company__media-corner--tl" aria-hidden="true" />
              <span className="about-company__media-corner about-company__media-corner--tr" aria-hidden="true" />
              <span className="about-company__media-corner about-company__media-corner--bl" aria-hidden="true" />
              <span className="about-company__media-corner about-company__media-corner--br" aria-hidden="true" />

              <Image
                src={ABOUT_COMPANY.mediaImage}
                alt={ABOUT_COMPANY.mediaAlt}
                fill
                sizes="(max-width: 640px) 92vw, (max-width: 980px) 88vw, (max-width: 1280px) 40vw, 36vw"
                className="about-company__media-img"
                quality={75}
                loading="lazy"
                itemProp="image"
              />

              <span className="about-company__media-shade" aria-hidden="true" />

              <div className="about-company__media-caption">
                <span className="about-company__media-name">{ABOUT_COMPANY.brand}</span>
                <span className="about-company__media-tag">{ABOUT_COMPANY.mediaCaption}</span>
                <span className="about-company__media-est">Gevestigd in Nederland</span>
              </div>
            </Reveal>
          </div>

          <Reveal as="div" className="about-company__body">
            <div className="about-company__paragraphs">
              {ABOUT_COMPANY.paragraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </Reveal>

          <Reveal as="section" className="about-company__pillars-wrap" ariaLabel="Waarom Sarte Global">
            <ul className="about-company__pillars">
              {ABOUT_COMPANY.pillars.map((pillar, index) => (
                <li key={pillar.title} className="about-company__pillar">
                  <span className="about-company__pillar-num">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <h3 className="about-company__pillar-title">{pillar.title}</h3>
                  <p className="about-company__pillar-desc">{pillar.description}</p>
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal as="div" className="about-company__metrics" ariaLabel="Sarte Global in cijfers">
            {ABOUT_COMPANY.metrics.map((metric) => (
              <div key={metric.label} className="about-company__metric">
                <span className="about-company__metric-value">{metric.value}</span>
                <span className="about-company__metric-label">{metric.label}</span>
              </div>
            ))}
          </Reveal>

          <Reveal as="div" className="about-company__ctas">
            <CTAButton
              label={ABOUT_COMPANY.ctaLabel}
              variant="primary"
              projectType="Over Sarte Global"
            />
            <a href={ABOUT_COMPANY.secondaryHref} className="btn btn-ghost">
              {ABOUT_COMPANY.secondaryLabel} <span className="arr">→</span>
            </a>
          </Reveal>

          <Reveal as="aside" className="about-company__trust" ariaLabel="Sarte Global">
            {TRUST_LINE}
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
