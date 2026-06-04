"use client";

import { AnimatePresence, motion, type PanInfo } from "framer-motion";
import Image from "next/image";
import type { AnimationEvent, FocusEvent } from "react";

import type { CSSVarStyle } from "@/types";

import { HeroControls } from "./HeroControls";
import { useHeroStage } from "./HeroStage";

const EASE = [0.2, 0.7, 0.2, 1] as const;
const SWIPE_DISTANCE = 72;
const SWIPE_VELOCITY = 520;

export function HeroShowcase() {
  const {
    slides,
    index,
    intervalMs,
    reducedMotion,
    isPaused,
    setIndex,
    goNext,
    goPrev,
    advanceAuto,
    pauseAuto,
    resumeAuto,
  } = useHeroStage();
  const current = slides[index];
  if (!current) return null;

  const showcaseStyle: CSSVarStyle = {
    "--hero-accent": current.accent,
    "--duration": `${intervalMs}ms`,
  } as CSSVarStyle;

  const handleDragEnd = (_event: MouseEvent | TouchEvent | PointerEvent, info: PanInfo) => {
    if (info.offset.x <= -SWIPE_DISTANCE || info.velocity.x <= -SWIPE_VELOCITY) {
      goNext();
      return;
    }

    if (info.offset.x >= SWIPE_DISTANCE || info.velocity.x >= SWIPE_VELOCITY) {
      goPrev();
    }
  };

  const handleBlur = (event: FocusEvent<HTMLDivElement>) => {
    const nextTarget = event.relatedTarget;

    if (!(nextTarget instanceof Node) || !event.currentTarget.contains(nextTarget)) {
      resumeAuto();
    }
  };

  const handleProgressEnd = (event: AnimationEvent<HTMLSpanElement>) => {
    if (event.animationName === "hero-progress") {
      advanceAuto();
    }
  };

  return (
    <div
      className={`hero-showcase${isPaused ? " hero-showcase--paused" : ""}`}
      style={showcaseStyle}
      role="region"
      aria-roledescription="carousel"
      aria-label="Showcase van onze diensten"
      onPointerEnter={pauseAuto}
      onPointerLeave={resumeAuto}
      onFocus={pauseAuto}
      onBlur={handleBlur}
    >
      <span className="hero-showcase__glow" aria-hidden="true" />

      <motion.div
        className="hero-showcase__frame"
        drag={reducedMotion ? false : "x"}
        dragConstraints={{ left: 0, right: 0 }}
        dragElastic={0.08}
        onDragEnd={handleDragEnd}
      >
        <div className="hero-showcase__chrome" aria-hidden="true">
          <span />
          <span />
          <span />
          <strong>Showcase</strong>
        </div>

        <AnimatePresence mode="wait" initial={false}>
          <motion.div
            key={current.id}
            className="hero-showcase__media"
            initial={{ opacity: 0, scale: 0.96, filter: "blur(14px)" }}
            animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
            exit={{ opacity: 0, scale: 1.035, filter: "blur(10px)" }}
            transition={{
              opacity: { duration: 0.9, ease: EASE },
              scale: { duration: 1.1, ease: EASE },
              filter: { duration: 1, ease: EASE },
            }}
          >
            <Image
              src={current.image}
              alt={current.imageAlt}
              fill
              priority
              fetchPriority="high"
              sizes="(max-width: 980px) 92vw, 560px"
              quality={78}
              className="hero-showcase__image"
            />
          </motion.div>
        </AnimatePresence>

        <span className="hero-showcase__shade" aria-hidden="true" />
        <span className="hero-showcase__shine" aria-hidden="true" />

        <div className="hero-showcase__progress" aria-hidden="true">
          {slides.map((slide, slideIndex) => (
            <span
              key={slide.id}
              className={`hero-showcase__bar${
                slideIndex === index ? " hero-showcase__bar--active" : ""
              }`}
            >
              <span
                className="hero-showcase__bar-fill"
                onAnimationEnd={
                  slideIndex === index ? handleProgressEnd : undefined
                }
              />
            </span>
          ))}
        </div>

        <div className="hero-showcase__meta" aria-live="polite">
          <AnimatePresence mode="wait" initial={false}>
            <motion.div
              key={current.id}
              className="hero-showcase__meta-inner"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.45, ease: EASE }}
            >
              <span className="hero-showcase__cat">{current.label}</span>
              <span className="hero-showcase__title">{current.title}</span>
              <span className="hero-showcase__desc">{current.description}</span>
            </motion.div>
          </AnimatePresence>
        </div>

        <HeroControls />
      </motion.div>

      <div className="hero-service-rail" aria-label="Dienstcategorieën">
        {slides.map((slide, slideIndex) => {
          const isActive = slideIndex === index;
          return (
            <button
              key={slide.id}
              type="button"
              className={`hero-service-rail__item${
                isActive ? " hero-service-rail__item--active" : ""
              }`}
              aria-pressed={isActive}
              aria-label={`Toon ${slide.label} showcase`}
              onClick={() => setIndex(slideIndex)}
            >
              <span>{String(slideIndex + 1).padStart(2, "0")}</span>
              <strong>{slide.label}</strong>
            </button>
          );
        })}
      </div>
    </div>
  );
}
