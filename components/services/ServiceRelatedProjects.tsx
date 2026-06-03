import { PROJECTS } from "@/data/projects";
import type { ProjectCategory } from "@/types";

import { ProjectCard } from "../projects/project-card";
import { Container } from "../ui/Container";
import { Reveal } from "../ui/Reveal";

interface ServiceRelatedProjectsProps {
  categories: readonly Exclude<ProjectCategory, "All">[];
  serviceName: string;
  limit?: number;
}

export function ServiceRelatedProjects({
  categories,
  serviceName,
  limit = 3,
}: ServiceRelatedProjectsProps) {
  const related = PROJECTS.filter((p) => categories.includes(p.category)).slice(0, limit);

  if (related.length === 0) return null;

  return (
    <section className="svc-related" aria-label="Gerelateerde projecten">
      <Container>
        <Reveal as="header" className="section-head">
          <div>
            <span className="eyebrow">Geselecteerd werk</span>
            <h2 className="h2">
              Recente <em>{serviceName.toLowerCase()}</em>-projecten.
            </h2>
          </div>
        </Reveal>

        <Reveal className="svc-related-grid">
          {related.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </Reveal>
      </Container>
    </section>
  );
}
