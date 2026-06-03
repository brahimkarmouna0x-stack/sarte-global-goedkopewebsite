import { CAREERS_HIRING_SECTION, CAREERS_HIRING_STEPS } from "@/constants/careers";

import { Container } from "../ui/Container";
import { Reveal } from "../ui/Reveal";

export function CareersHiring() {
  return (
    <section
      className="careers-hiring"
      aria-labelledby="careers-hiring-h"
    >
      <Container>
        <Reveal as="header" className="section-head">
          <div>
            <span className="eyebrow">{CAREERS_HIRING_SECTION.eyebrow}</span>
            <h2 className="h2" id="careers-hiring-h">
              {CAREERS_HIRING_SECTION.titleLead}{" "}
              <em>{CAREERS_HIRING_SECTION.titleEm}</em>
            </h2>
          </div>
          <p className="sub">{CAREERS_HIRING_SECTION.sub}</p>
        </Reveal>

        <div className="careers-hiring__list">
          {CAREERS_HIRING_STEPS.map((step, index) => (
            <Reveal
              key={step.number}
              as="article"
              className="careers-hiring__step"
              index={index}
            >
              <span className="careers-hiring__num">{step.number}</span>
              <div>
                <h3 className="careers-hiring__step-title">{step.title}</h3>
                <p className="careers-hiring__step-desc">{step.description}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
