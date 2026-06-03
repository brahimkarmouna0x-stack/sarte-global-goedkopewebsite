"use client";

import Image from "next/image";
import { useMemo, useState, type CSSProperties, type PointerEvent } from "react";

import type { ProjectCardProps, CSSVarStyle } from "@/types";

import { PROJECTS_SECTION } from "@/data/projects";
import { useReveal } from "@/hooks/useReveal";

function hashCode(input: string): number {
  let hash = 5381;
  for (let i = 0; i < input.length; i++) {
    hash = ((hash << 5) + hash) ^ input.charCodeAt(i);
  }
  return Math.abs(hash);
}

function microlinkUrl(url: string): string {
  return `https://api.microlink.io/?url=${encodeURIComponent(
    url,
  )}&screenshot=true&meta=false&embed=screenshot.url&viewport.width=1280&viewport.height=800`;
}

function themedUrl(seed: string, category: string): string {
  const tags = encodeURIComponent(`${category},premium,design`.toLowerCase());
  return `https://loremflickr.com/1280/800/${tags}?lock=${hashCode(seed)}`;
}

export function ProjectCard({ project, index }: ProjectCardProps) {
  const { ref, isIn } = useReveal<HTMLAnchorElement>();

  const fallbackChain = useMemo(
    () => [
      project.screenshot,
      microlinkUrl(project.url),
      themedUrl(project.id, project.category),
    ],
    [project.screenshot, project.url, project.id, project.category],
  );

  const [attempt, setAttempt] = useState(0);
  const [hidden, setHidden] = useState(false);
  const [loaded, setLoaded] = useState(false);

  const onPointerMove = (event: PointerEvent<HTMLAnchorElement>) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = ((event.clientX - rect.left) / rect.width) * 100;
    const y = ((event.clientY - rect.top) / rect.height) * 100;
    el.style.setProperty("--mx", `${x}%`);
    el.style.setProperty("--my", `${y}%`);
  };

  const onPointerLeave = () => {
    const el = ref.current;
    if (!el) return;
    el.style.setProperty("--mx", `50%`);
    el.style.setProperty("--my", `0%`);
  };

  const handleImageError = () => {
    if (attempt < fallbackChain.length - 1) {
      setAttempt((current) => current + 1);
      setLoaded(false);
    } else {
      setHidden(true);
    }
  };

  if (hidden) return null;

  const baseStyle: CSSVarStyle = {
    "--i": index,
    "--accent-local": project.accent ?? "var(--color-accent)",
  };

  const currentSrc = fallbackChain[attempt] ?? fallbackChain[0];

  return (
    <a
      ref={ref}
      href={project.url}
      target="_blank"
      rel="noopener noreferrer"
      className={isIn ? "proj-card is-in" : "proj-card"}
      data-reveal=""
      style={baseStyle as CSSProperties}
      onPointerMove={onPointerMove}
      onPointerLeave={onPointerLeave}
      aria-label={`${project.title} — ${project.description}`}
    >
      <span className="proj-glow" aria-hidden="true" />

      <div className="proj-media" data-loading={loaded ? undefined : "true"}>
        <Image
          src={currentSrc!}
          alt={`${project.title} — ${project.category} — voorvertoning van de live website`}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
          className="proj-img"
          priority={index < 3}
          loading={index < 3 ? undefined : "lazy"}
          quality={75}
          onLoad={() => setLoaded(true)}
          onError={handleImageError}
        />
        <span className="proj-media-grad" aria-hidden="true" />
        <span className="proj-cat" aria-hidden="true">
          {project.category}
        </span>
        {project.isVideo ? (
          <span className="proj-play" aria-hidden="true">
            <svg viewBox="0 0 64 64" aria-hidden="true">
              <circle cx="32" cy="32" r="30" fill="rgba(0,0,0,0.55)" />
              <circle
                cx="32"
                cy="32"
                r="30"
                fill="none"
                stroke="rgba(255,255,255,0.9)"
                strokeWidth="1.5"
              />
              <path d="M27 22.5v19l16-9.5z" fill="#fff" />
            </svg>
          </span>
        ) : null}
      </div>

      <div className="proj-body">
        <div className="proj-head">
          <h3 className="proj-title">{project.title}</h3>
          <span className="proj-year">{project.year}</span>
        </div>

        <p className="proj-desc">{project.description}</p>

        <div className="proj-meta">
          <span className="proj-industry">{project.industry}</span>
        </div>

        <ul className="proj-stack" aria-label="Technologieën">
          {project.techStack.slice(0, 5).map((tech) => (
            <li key={tech} className="proj-chip">
              {tech}
            </li>
          ))}
        </ul>

        {project.tools && project.tools.length > 0 ? (
          <ul className="proj-tools" aria-label="Tools en software">
            {project.tools.slice(0, 5).map((tool) => (
              <li key={tool} className="proj-chip proj-chip-soft">
                {tool}
              </li>
            ))}
          </ul>
        ) : null}

        <span className="proj-cta">
          {PROJECTS_SECTION.visitLabel}
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.6"
            aria-hidden="true"
            className="proj-arrow"
          >
            <path d="M7 17L17 7M9 7h8v8" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </span>
      </div>

      <span className="proj-border" aria-hidden="true" />
    </a>
  );
}
