import { TECH_ROWS, TECH_SECTION } from "@/constants";

import { Container } from "../../ui/Container";

import { MarqueeRow } from "./MarqueeRow";

interface RowConfig {
  direction: "left" | "right";
  speed: number;
}

const ROW_CONFIG: readonly RowConfig[] = [
  { direction: "left", speed: 55 },
  { direction: "right", speed: 70 },
  { direction: "left", speed: 45 },
  { direction: "right", speed: 80 },
];

const DEFAULT_ROW: RowConfig = { direction: "left", speed: 60 };

export function TechStack() {
  return (
    <section className="tech-stack" id="tech-stack" aria-labelledby="tech-stack-title">
      <Container>
        <header className="section-head">
          <div>
            <p className="eyebrow">{TECH_SECTION.eyebrow}</p>
            <h2 className="h2" id="tech-stack-title">
              {TECH_SECTION.titleLead} <em>{TECH_SECTION.titleEm}</em>
            </h2>
          </div>
          <p className="sub">{TECH_SECTION.sub}</p>
        </header>

        <div className="tech-stack__stage">
          <span className="tech-stack__orb tech-stack__orb--a" aria-hidden="true" />
          <span className="tech-stack__orb tech-stack__orb--b" aria-hidden="true" />
          <div className="tech-stack__rows">
            {TECH_ROWS.map((row, index) => {
              const cfg = ROW_CONFIG[index % ROW_CONFIG.length] ?? DEFAULT_ROW;
              return (
                <MarqueeRow
                  key={`row-${index}`}
                  items={row}
                  direction={cfg.direction}
                  speed={cfg.speed}
                />
              );
            })}
          </div>
        </div>
      </Container>
    </section>
  );
}
