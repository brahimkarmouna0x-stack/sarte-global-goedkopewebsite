import { CAREERS_VALUES, CAREERS_VALUES_SECTION } from "@/constants/careers";

import { Container } from "../ui/Container";
import { Reveal } from "../ui/Reveal";
import { ServiceIcon } from "../ui/ServiceIcon";

export function CareersValues() {
  return (
    <section
      className="careers-values"
      aria-labelledby="careers-values-h"
    >
      <Container>
        <Reveal as="header" className="section-head">
          <div>
            <span className="eyebrow">{CAREERS_VALUES_SECTION.eyebrow}</span>
            <h2 className="h2" id="careers-values-h">
              {CAREERS_VALUES_SECTION.titleLead}{" "}
              <em>{CAREERS_VALUES_SECTION.titleEm}</em>
            </h2>
          </div>
          <p className="sub">{CAREERS_VALUES_SECTION.sub}</p>
        </Reveal>

        <div className="careers-values__grid">
          {CAREERS_VALUES.map((value, index) => (
            <Reveal
              key={value.title}
              as="article"
              className="careers-value"
              index={index}
            >
              <div className="careers-value__icon" aria-hidden="true">
                <ServiceIcon name={value.icon} />
              </div>
              <h3 className="careers-value__title">{value.title}</h3>
              <p className="careers-value__desc">{value.description}</p>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
