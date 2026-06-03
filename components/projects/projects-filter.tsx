"use client";

import type { ProjectsFilterProps } from "@/types";

export function ProjectsFilter({ categories, active, onChange }: ProjectsFilterProps) {
  return (
    <div className="proj-filter" role="tablist" aria-label="Filter projecten op categorie">
      {categories.map((category) => {
        const isActive = category === active;
        return (
          <button
            key={category}
            type="button"
            role="tab"
            aria-selected={isActive}
            className={isActive ? "proj-chip-btn is-active" : "proj-chip-btn"}
            onClick={() => onChange(category)}
          >
            {category}
          </button>
        );
      })}
    </div>
  );
}
