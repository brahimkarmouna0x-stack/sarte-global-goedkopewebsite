import type { Tech } from "@/constants";

interface TechCardProps {
  tech: Tech;
  ariaHidden?: boolean;
}

export function TechCard({ tech, ariaHidden = false }: TechCardProps) {
  const { Icon, name, category, color } = tech;

  return (
    <div
      className="tech-card"
      role={ariaHidden ? undefined : "listitem"}
      aria-hidden={ariaHidden || undefined}
    >
      <span
        className="tech-card__icon"
        style={{ ["--tech-color" as string]: color } as React.CSSProperties}
      >
        <Icon aria-hidden="true" />
      </span>
      <span className="tech-card__name">{name}</span>
      <span className="tech-card__cat">{category}</span>
    </div>
  );
}
