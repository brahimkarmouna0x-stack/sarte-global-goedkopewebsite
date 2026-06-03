import type { CSSProperties } from "react";

import { HERO } from "@/constants";
import type { CSSVarStyle } from "@/types";

import { HeroAtmosphere } from "./Hero/HeroAtmosphere";
import { HeroShowcase } from "./Hero/HeroShowcase";
import { HeroStageProvider } from "./Hero/HeroStage";
import { Container } from "../ui/Container";
import { HeroBadge } from "../ui/HeroBadge";

/**
 * Full-bleed agency hero with animated copy and an interactive service reel.
 */
export function Hero() {
  return (
    <section className="hero" aria-labelledby="hero-title">
      <HeroStageProvider>
        <HeroAtmosphere />

        <Container className="hero-inner">
          <div className="hero-left">
            <span className="hero-eyebrow eyebrow">{HERO.eyebrow}</span>

            <h1 className="hero-title" id="hero-title">
              {HERO.title.map((line, lineIndex) => {
                const offset: number = HERO.title
                  .slice(0, lineIndex)
                  .reduce((sum, l) => sum + l.words.length, 0);
                return (
                  <span className="line" key={lineIndex}>
                    {line.words.map((word, wordIndex) => {
                      const wordStyle: CSSProperties = {
                        "--d": offset + wordIndex,
                      } as CSSVarStyle;
                      return (
                        <span
                          key={wordIndex}
                          className={
                            "italicAccent" in word && word.italicAccent
                              ? "w em"
                              : "w"
                          }
                          style={wordStyle}
                        >
                          {word.text}
                          {wordIndex < line.words.length - 1 ? " " : ""}
                        </span>
                      );
                    })}
                  </span>
                );
              })}
            </h1>

            <p className="hero-sub">{HERO.subtitle}</p>

            <div className="hero-ctas">
              <a href={HERO.primaryCta.href} className="btn btn-primary">
                {HERO.primaryCta.label} <span className="arr">-&gt;</span>
              </a>
            </div>

            <div className="hero-foot">
              <div className="hero-stats">
                {HERO.stats.map((stat) => (
                  <span key={stat.label} className="stat-pill">
                    {stat.label}
                  </span>
                ))}
              </div>
              <a
                href="#trusted"
                className="scroll-arrow"
                aria-label="Scroll naar volgende sectie"
              >
                <span>{HERO.scrollLabel}</span>
                <svg
                  viewBox="0 0 16 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.4"
                  aria-hidden="true"
                >
                  <path d="M8 2v18M2 14l6 6 6-6" />
                </svg>
              </a>
            </div>
          </div>

          <HeroShowcase />
        </Container>
      </HeroStageProvider>

      <HeroBadge />
    </section>
  );
}
