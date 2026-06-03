import type { Tech } from "@/constants";

import { TechCard } from "./TechCard";

interface MarqueeRowProps {
  items: readonly Tech[];
  direction?: "left" | "right";
  /** Duration of one full loop in seconds. Higher = slower. */
  speed?: number;
}

export function MarqueeRow({ items, direction = "left", speed = 60 }: MarqueeRowProps) {
  if (items.length === 0) return null;

  const loop = [...items, ...items];

  return (
    <div className="tech-marquee">
      <div
        className="tech-marquee__track"
        data-direction={direction}
        style={{ ["--duration" as string]: `${speed}s` } as React.CSSProperties}
        role="list"
        aria-label="Onze technologieën"
      >
        {loop.map((tech, index) => (
          <TechCard
            key={`${tech.name}-${index}`}
            tech={tech}
            ariaHidden={index >= items.length}
          />
        ))}
      </div>
    </div>
  );
}
