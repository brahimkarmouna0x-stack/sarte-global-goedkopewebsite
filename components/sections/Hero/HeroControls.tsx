"use client";

import { useCallback, type KeyboardEvent } from "react";

import { useHeroStage } from "./HeroStage";

export function HeroControls() {
  const { slides, index, setIndex, goNext, goPrev } = useHeroStage();

  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") {
        e.preventDefault();
        goPrev();
      } else if (e.key === "ArrowRight") {
        e.preventDefault();
        goNext();
      }
    },
    [goNext, goPrev],
  );

  if (slides.length <= 1) return null;

  return (
    <div
      className="hero-controls"
      role="group"
      aria-label="Showcase-bediening"
      onKeyDown={handleKeyDown}
    >
      <button
        type="button"
        className="hero-controls__arrow hero-controls__arrow--prev"
        onClick={goPrev}
        aria-label="Vorige showcase"
      >
        <svg
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <path d="M12 4l-6 6 6 6" />
        </svg>
      </button>

      <div
        className="hero-controls__dots"
        role="tablist"
        aria-label="Showcase-beelden"
      >
        {slides.map((slide, i) => {
          const isActive = i === index;
          return (
            <button
              key={slide.id}
              type="button"
              role="tab"
              aria-selected={isActive}
              aria-label={`Toon ${slide.label}`}
              className={`hero-controls__dot${isActive ? " hero-controls__dot--active" : ""}`}
              onClick={() => setIndex(i)}
            >
              <span className="hero-controls__dot-fill" aria-hidden="true" />
            </button>
          );
        })}
      </div>

      <button
        type="button"
        className="hero-controls__arrow hero-controls__arrow--next"
        onClick={goNext}
        aria-label="Volgende showcase"
      >
        <svg
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <path d="M8 4l6 6-6 6" />
        </svg>
      </button>
    </div>
  );
}
