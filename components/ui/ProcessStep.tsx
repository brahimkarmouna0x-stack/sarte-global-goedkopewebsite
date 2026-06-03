"use client";

import { useReveal } from "@/hooks/useReveal";
import type { ProcessStepProps } from "@/types";

export function ProcessStep({ step }: ProcessStepProps) {
  const { ref, isIn } = useReveal<HTMLElement>({
    threshold: 0.5,
    rootMargin: "0px",
    once: true,
  });

  return (
    <article
      ref={ref as React.RefObject<HTMLElement>}
      className={isIn ? "step is-active" : "step"}
    >
      <div className="step-circle">{step.number}</div>
      <div className="step-text">
        <h3 className="step-name">{step.name}</h3>
        <p className="step-desc">{step.description}</p>
      </div>
    </article>
  );
}
