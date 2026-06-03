"use client";

import { useMemo, useState } from "react";

import type { Project, ProjectCategory, ProjectsGridProps } from "@/types";

import { PROJECTS_SECTION, PROJECT_CATEGORIES } from "@/data/projects";

import { ProjectCard } from "./project-card";
import { ProjectsFilter } from "./projects-filter";

const ALL_FILTER_CATEGORIES: readonly Exclude<ProjectCategory, "All">[] = [
  "Landing Page",
  "E-Commerce",
  "WordPress",
  "Shopify & Dropshipping",
  "SaaS",
  "Creative Studio",
];

export function ProjectsGrid({
  projects,
  initialCount = 6,
  step = 3,
}: ProjectsGridProps) {
  const [active, setActive] = useState<ProjectCategory>("All");
  const [visible, setVisible] = useState<number>(initialCount);

  const filtered = useMemo(() => {
    if (active === "All") {
      return ALL_FILTER_CATEGORIES.reduce<Project[]>((acc, category) => {
        const first = projects.find((project) => project.category === category);
        if (first) acc.push(first);
        return acc;
      }, []);
    }
    return projects.filter((project) => project.category === active);
  }, [projects, active]);

  const shown = filtered.slice(0, visible);
  const hasMore = visible < filtered.length;

  const handleFilterChange = (category: ProjectCategory) => {
    setActive(category);
    setVisible(initialCount);
  };

  const handleLoadMore = () => {
    setVisible((current) => Math.min(current + step, filtered.length));
  };

  const handleShowAll = () => {
    setVisible(filtered.length);
  };

  return (
    <>
      <ProjectsFilter
        categories={PROJECT_CATEGORIES}
        active={active}
        onChange={handleFilterChange}
      />

      <div
        className="proj-grid"
        data-active-filter={active}
        role="list"
      >
        {shown.map((project, index) => (
          <div role="listitem" key={project.id} className="proj-grid-cell">
            <ProjectCard project={project} index={index} />
          </div>
        ))}
      </div>

      {filtered.length === 0 ? (
        <p className="proj-empty">Nog geen projecten in deze categorie.</p>
      ) : null}

      {hasMore ? (
        <div className="proj-foot">
          <button
            type="button"
            onClick={handleLoadMore}
            className="btn btn-ghost proj-more"
          >
            {PROJECTS_SECTION.loadMoreLabel}
            <span className="arr" aria-hidden="true">
              ↓
            </span>
          </button>

          {filtered.length - visible > step ? (
            <button
              type="button"
              onClick={handleShowAll}
              className="proj-show-all"
            >
              {PROJECTS_SECTION.loadAllLabel}
              <span aria-hidden="true"> · {filtered.length}</span>
            </button>
          ) : null}
        </div>
      ) : null}
    </>
  );
}
