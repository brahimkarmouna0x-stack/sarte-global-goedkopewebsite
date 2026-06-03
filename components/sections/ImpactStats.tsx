"use client";

import type { CSSProperties } from "react";

import { IMPACT_SECTION, IMPACT_STATS } from "@/constants";
import { useReveal } from "@/hooks/useReveal";
import type { CSSVarStyle } from "@/types";

import { Container } from "../ui/Container";
import { Reveal } from "../ui/Reveal";
import { StatCounter } from "../ui/StatCounter";

export function ImpactStats() {
  const { ref, isIn } = useReveal<HTMLElement>({ threshold: 0.4 });

  return (
    <section
      ref={ref as React.RefObject<HTMLElement>}
      className="impact"
      aria-labelledby="impact-h"
      id="impact"
    >
      <Container>
        <Reveal as="span" className="impact-eyebrow">
          {IMPACT_SECTION.eyebrow}
        </Reveal>
        <Reveal>
          <h2 className="h2 impact-title" id="impact-h">
            {IMPACT_SECTION.titleLead} <em>{IMPACT_SECTION.titleEm}</em>
          </h2>
        </Reveal>
        <div className="impact-row">
          {IMPACT_STATS.map((stat, index) => {
            const itemStyle: CSSProperties = { "--i": index } as CSSVarStyle;
            return (
              <Reveal key={stat.label} index={index} style={itemStyle}>
                <div className="stat-num">
                  {stat.prefix ? (
                    <span className="unit">{stat.prefix}</span>
                  ) : null}
                  <StatCounter target={stat.target} start={isIn} />
                  {stat.suffix ? (
                    <span className="unit">{stat.suffix}</span>
                  ) : null}
                </div>
                <div className="stat-label">{stat.label}</div>
              </Reveal>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
