import type { Project } from "@/types";

import { PROJECTS } from "@/data/projects";

const HERO_PROJECT_IDS: readonly string[] = [
  "refactoring-ui",
  "plain",
  "mistral",
  "cuberto",
  "mercury",
  "reflect",
  "vivaldi",
];

export const HERO_PROJECTS: readonly Project[] = HERO_PROJECT_IDS
  .map((id) => PROJECTS.find((p) => p.id === id))
  .filter((p): p is Project => Boolean(p));

export type HeroPillPosition = "top-left" | "top-right" | "mid-left" | "bot-right";

export interface HeroFloatingTag {
  readonly label: string;
  readonly position: HeroPillPosition;
}

export const HERO_FLOATING_TAGS: readonly HeroFloatingTag[] = [
  { label: "AI-gedreven", position: "top-right" },
  { label: "Next.js", position: "mid-left" },
  { label: "Moderne UX", position: "bot-right" },
  { label: "Premium design", position: "top-left" },
];
