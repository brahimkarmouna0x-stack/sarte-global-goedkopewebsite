import { PROJECTS, PROJECTS_SECTION } from "@/data/projects";

import { Container } from "../ui/Container";
import { Reveal } from "../ui/Reveal";

import { ProjectsGrid } from "./projects-grid";

export function ProjectsSection() {
  return (
    <section
      id="projects"
      aria-labelledby="projects-h"
      className="proj-section"
    >
      <Container>
        <Reveal as="header" className="section-head">
          <div>
            <span className="eyebrow">{PROJECTS_SECTION.eyebrow}</span>
            <h2 className="h2" id="projects-h">
              {PROJECTS_SECTION.titleLead}{" "}
              <em>{PROJECTS_SECTION.titleEm}</em>
            </h2>
          </div>
          <p className="sub">{PROJECTS_SECTION.sub}</p>
        </Reveal>

        <Reveal className="proj-shell">
          <ProjectsGrid projects={PROJECTS} initialCount={6} step={3} />
        </Reveal>
      </Container>
    </section>
  );
}
