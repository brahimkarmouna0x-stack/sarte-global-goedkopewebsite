"use client";

import Image from "next/image";

import type { CSSVarStyle } from "@/types";

import { useHeroStage } from "./HeroStage";

export function HeroAtmosphere() {
  const { slides, index, accent } = useHeroStage();
  const current = slides[index];
  if (!current) return null;

  const layerStyle: CSSVarStyle = {
    "--hero-accent": accent ?? "var(--color-accent)",
  } as CSSVarStyle;

  return (
    <div className="hero-backdrop" aria-hidden="true">
      <div key={current.id} className="hero-backdrop__layer" style={layerStyle}>
        <Image
          src={current.image}
          alt=""
          fill
          priority={index === 0}
          fetchPriority={index === 0 ? "high" : "auto"}
          sizes="100vw"
          quality={70}
          className="hero-backdrop__image"
        />
        <span className="hero-backdrop__wash" />
      </div>

      <span className="hero-backdrop__veil" />
      <span className="hero-backdrop__grain" />
    </div>
  );
}
