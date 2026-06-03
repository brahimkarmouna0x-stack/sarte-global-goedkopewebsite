import type { ServiceFeature } from "@/types";

import { Container } from "../ui/Container";
import { Reveal } from "../ui/Reveal";
import { ServiceIcon } from "../ui/ServiceIcon";

interface ServiceFeaturesProps {
  features: readonly ServiceFeature[];
  title?: string;
  eyebrow?: string;
}

export function ServiceFeatures({
  features,
  title = "Wat je krijgt.",
  eyebrow = "Mogelijkheden",
}: ServiceFeaturesProps) {
  return (
    <section className="svc-features" aria-label="Diensten en mogelijkheden">
      <Container>
        <Reveal as="header" className="section-head">
          <div>
            <span className="eyebrow">{eyebrow}</span>
            <h2 className="h2">{title}</h2>
          </div>
        </Reveal>

        <div className="svc-features-grid">
          {features.map((feature, index) => (
            <Reveal
              key={feature.title}
              as="article"
              className="svc-feature-card"
              index={index}
            >
              <div className="svc-feature-card__icon" aria-hidden="true">
                <ServiceIcon name={feature.iconName} />
              </div>
              <h3 className="svc-feature-card__title">{feature.title}</h3>
              <p className="svc-feature-card__desc">{feature.description}</p>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
