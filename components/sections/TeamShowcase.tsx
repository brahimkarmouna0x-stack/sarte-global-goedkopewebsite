"use client";

import type { CSSProperties } from "react";

import { TEAM_MEMBERS, TEAM_SECTION, TEAM_SOCIALS } from "@/constants";
import { useTeamShowcase } from "@/hooks/useTeamShowcase";

import { CTAButton } from "../ui/CTAButton";
import { SocialIcon } from "../ui/SocialIcon";
import { TeamStage } from "../ui/TeamStage";

function padIndex(value: number): string {
  return value < 10 ? `0${value}` : `${value}`;
}

export function TeamShowcase() {
  const showcase = useTeamShowcase({
    length: TEAM_MEMBERS.length,
    durationMs: TEAM_SECTION.durationMs,
  });

  const current = TEAM_MEMBERS[showcase.displayIndex];
  if (!current) {
    throw new Error("Team showcase index out of range");
  }

  const infoClass: string =
    showcase.phase === "out"
      ? "ts-info ts-out"
      : showcase.phase === "in"
        ? "ts-info ts-in"
        : "ts-info";

  const progressStyle: CSSProperties = showcase.progressActive
    ? {
      width: "100%",
      transition: `width ${TEAM_SECTION.durationMs}ms linear`,
    }
    : { width: "0%", transition: "none" };

  return (
    <section
      id="team"
      className="team-showcase"
      aria-labelledby="team-h"
      onMouseEnter={showcase.pause}
      onMouseLeave={showcase.resume}
    >
      <div className="ts-stages" aria-hidden="true">
        {TEAM_MEMBERS.map((member, index) => (
          <TeamStage
            key={member.scene}
            scene={member.scene}
            isActive={index === showcase.index}
          />
        ))}
      </div>

      <div className="ts-fog" aria-hidden="true" />

      <div className="ts-wrap">
        <div className="ts-left">
          <p className="ts-eyebrow">{TEAM_SECTION.eyebrow}</p>

          <div className="ts-counter" aria-live="polite" aria-atomic="true">
            <span className="ts-curr">{padIndex(showcase.index + 1)}</span>
            <span className="ts-sep">/</span>
            <span className="ts-tot">{padIndex(TEAM_MEMBERS.length)}</span>
          </div>

          <div className={infoClass}>
            <h2 className="ts-name" id="team-h">
              {current.name}
            </h2>
            <p className="ts-role">{current.role}</p>
            <p className="ts-bio">{current.bio}</p>
            <div className="ts-socials">
              {TEAM_SOCIALS.map((social) => (
                <a
                  key={social.icon}
                  href={social.href}
                  aria-label={social.label}
                >
                  <SocialIcon icon={social.icon} />
                </a>
              ))}
            </div>
          </div>

          <div className="ts-ctas">
            <a
              href={TEAM_SECTION.ctaPrimary.href}
              className="btn btn-primary"
            >
              {TEAM_SECTION.ctaPrimary.label} <span className="arr">→</span>
            </a>
            <CTAButton
              label={TEAM_SECTION.ctaSecondary.label}
              variant="ghost"
              projectType="Vacatures"
            />
          </div>

          <div className="ts-nav">
            <button
              className="ts-arrow"
              aria-label="Vorig teamlid"
              onClick={showcase.prev}
              type="button"
            >
              <svg viewBox="0 0 24 24">
                <path d="M19 12H5M12 5l-7 7 7 7" />
              </svg>
            </button>
            <div
              className="ts-dots"
              role="tablist"
              aria-label="Teamleden navigatie"
            >
              {TEAM_MEMBERS.map((member, index) => (
                <button
                  key={member.scene}
                  className={index === showcase.index ? "is-active" : ""}
                  aria-label={member.name}
                  onClick={(): void => showcase.goTo(index)}
                  type="button"
                />
              ))}
            </div>
            <button
              className="ts-arrow"
              aria-label="Volgend teamlid"
              onClick={showcase.next}
              type="button"
            >
              <svg viewBox="0 0 24 24">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </button>
          </div>

          <div className="ts-prog-wrap" aria-hidden="true">
            <div
              key={showcase.progressKey}
              className="ts-prog"
              style={progressStyle}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
