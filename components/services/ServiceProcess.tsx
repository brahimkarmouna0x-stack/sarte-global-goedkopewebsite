import type { ServiceProcessItem } from "@/types";

import { Container } from "../ui/Container";
import { Reveal } from "../ui/Reveal";

interface ServiceProcessProps {
  steps: readonly ServiceProcessItem[];
  title?: string;
  eyebrow?: string;
}

export function ServiceProcess({
  steps,
  title = "Zo werken we.",
  eyebrow = "Werkwijze",
}: ServiceProcessProps) {
  return (
    <section className="svc-process" aria-label="Werkwijze">
      <Container>
        <Reveal as="header" className="section-head">
          <div>
            <span className="eyebrow">{eyebrow}</span>
            <h2 className="h2">{title}</h2>
          </div>
        </Reveal>

        <ol className="svc-process-list">
          {steps.map((step, index) => (
            <Reveal
              key={step.number}
              as="article"
              className="svc-process-step"
              index={index}
            >
              <span className="svc-process-step__num">{step.number}</span>
              <div className="svc-process-step__body">
                <h3 className="svc-process-step__title">{step.title}</h3>
                <p className="svc-process-step__desc">{step.description}</p>
              </div>
            </Reveal>
          ))}
        </ol>
      </Container>
    </section>
  );
}
