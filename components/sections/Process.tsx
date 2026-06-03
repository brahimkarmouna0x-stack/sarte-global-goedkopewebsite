import { PROCESS_SECTION, PROCESS_STEPS } from "@/constants";

import { Container } from "../ui/Container";
import { ProcessStep } from "../ui/ProcessStep";
import { Reveal } from "../ui/Reveal";

export function Process() {
  return (
    <section className="process" id="process" aria-labelledby="proc-h">
      <Container>
        <Reveal as="header" className="section-head">
          <div>
            <span className="eyebrow">{PROCESS_SECTION.eyebrow}</span>
            <h2 className="h2" id="proc-h">
              {PROCESS_SECTION.titleLead} <em>{PROCESS_SECTION.titleEm}</em>{" "}
              {PROCESS_SECTION.titleTail}
            </h2>
          </div>
          <p className="sub">{PROCESS_SECTION.sub}</p>
        </Reveal>

        <div className="process-track">
          {PROCESS_STEPS.map((step) => (
            <ProcessStep key={step.number} step={step} />
          ))}
        </div>
      </Container>
    </section>
  );
}
