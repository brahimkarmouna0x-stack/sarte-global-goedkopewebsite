import { TECHNOLOGIES } from "@/constants";

import { TechCard } from "../sections/TechStack/TechCard";
import { Container } from "../ui/Container";
import { Reveal } from "../ui/Reveal";

interface ServiceTechProps {
  techIds: readonly string[];
  title?: string;
  eyebrow?: string;
}

export function ServiceTech({
  techIds,
  title = "Gebouwd op een moderne stack.",
  eyebrow = "Technologieën",
}: ServiceTechProps) {
  const techs = techIds
    .map((id) => TECHNOLOGIES.find((t) => t.name === id))
    .filter((t): t is NonNullable<typeof t> => Boolean(t));

  if (techs.length === 0) return null;

  return (
    <section className="svc-tech" aria-label="Onze technologieën">
      <Container>
        <Reveal as="header" className="section-head">
          <div>
            <span className="eyebrow">{eyebrow}</span>
            <h2 className="h2">{title}</h2>
          </div>
        </Reveal>

        <Reveal className="svc-tech-grid">
          {techs.map((tech) => (
            <TechCard key={tech.name} tech={tech} />
          ))}
        </Reveal>
      </Container>
    </section>
  );
}
