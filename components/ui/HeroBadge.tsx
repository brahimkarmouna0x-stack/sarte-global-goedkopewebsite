import { HERO } from "@/constants";

export function HeroBadge() {
  return (
    <div className="badge" aria-hidden="true">
      <svg className="ring" viewBox="0 0 120 120">
        <defs>
          <path
            id="hero-badge-path"
            d="M60,60 m-44,0 a44,44 0 1,1 88,0 a44,44 0 1,1 -88,0"
          />
        </defs>
        <text
          fontFamily="var(--font-body)"
          fontSize="9"
          letterSpacing="3"
          fill="var(--color-text)"
        >
          <textPath href="#hero-badge-path">{HERO.badgeText}</textPath>
        </text>
      </svg>
      <span className="dot" />
    </div>
  );
}
