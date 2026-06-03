import { SERVICES, SERVICES_SECTION } from "@/constants";

import { Container } from "../ui/Container";
import { Reveal } from "../ui/Reveal";
import { ServiceCard } from "../ui/ServiceCard";

export function Services() {
  return (
    <section id="services" aria-labelledby="services-h">
      <Container>
        <Reveal as="header" className="section-head">
          <div>
            <span className="eyebrow">{SERVICES_SECTION.eyebrow}</span>
            <h2 className="h2" id="services-h">
              {SERVICES_SECTION.titleLead} <em>{SERVICES_SECTION.titleEm}</em>
            </h2>
          </div>
          <p className="sub">{SERVICES_SECTION.sub}</p>
        </Reveal>

        <Reveal className="services-grid">
          {SERVICES.map((service, index) => (
            <ServiceCard key={service.slug} service={service} index={index} />
          ))}
        </Reveal>
      </Container>
    </section>
  );
}
