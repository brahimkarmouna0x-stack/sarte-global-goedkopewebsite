import type { ArticleArtwork as ArticleArtworkId } from "@/types";

interface ArticleArtworkProps {
  readonly id: ArticleArtworkId;
}

function RingsArtwork() {
  return (
    <svg viewBox="0 0 400 200" preserveAspectRatio="xMidYMid slice">
      <rect width="400" height="200" fill="var(--color-art-rings-bg)" />
      <g
        stroke="var(--color-art-rings-stroke)"
        strokeWidth="1"
        fill="none"
      >
        <circle cx="200" cy="100" r="20" />
        <circle cx="200" cy="100" r="50" />
        <circle cx="200" cy="100" r="80" />
        <circle cx="200" cy="100" r="110" />
        <circle cx="200" cy="100" r="140" />
      </g>
      <circle cx="200" cy="100" r="6" fill="var(--color-accent)" />
    </svg>
  );
}

function LinesArtwork() {
  return (
    <svg viewBox="0 0 400 200" preserveAspectRatio="xMidYMid slice">
      <rect width="400" height="200" fill="var(--color-art-lines-bg)" />
      <g stroke="var(--color-art-lines-stroke)" strokeWidth="1">
        <path d="M0 40h400M0 80h400M0 120h400M0 160h400" />
      </g>
      <g fill="var(--color-art-lines-fill)">
        <rect x="40" y="36" width="80" height="8" />
        <rect x="40" y="76" width="180" height="8" />
        <rect x="40" y="116" width="120" height="8" />
        <rect x="40" y="156" width="220" height="8" />
      </g>
    </svg>
  );
}

function CurvesArtwork() {
  return (
    <svg viewBox="0 0 400 200" preserveAspectRatio="xMidYMid slice">
      <rect width="400" height="200" fill="var(--color-art-curves-bg)" />
      <g
        stroke="var(--color-art-curves-stroke)"
        strokeWidth="1.4"
        fill="none"
      >
        <path d="M20 160 Q120 60 200 120 T380 40" />
        <path d="M20 180 Q120 100 200 140 T380 80" />
      </g>
      <g fill="var(--color-art-curves-dot)">
        <circle cx="60" cy="146" r="3" />
        <circle cx="140" cy="92" r="3" />
        <circle cx="220" cy="118" r="3" />
        <circle cx="300" cy="74" r="3" />
        <circle cx="380" cy="40" r="3" />
      </g>
    </svg>
  );
}

export function ArticleArtwork({ id }: ArticleArtworkProps) {
  switch (id) {
    case "rings":
      return <RingsArtwork />;
    case "lines":
      return <LinesArtwork />;
    case "curves":
      return <CurvesArtwork />;
  }
}
