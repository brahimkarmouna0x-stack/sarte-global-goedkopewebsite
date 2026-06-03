export function StrategyScene() {
  return (
    <svg
      viewBox="0 0 1440 900"
      preserveAspectRatio="xMidYMid slice"
      fill="none"
    >
      <defs>
        <radialGradient id="ts2-glow" cx="50%" cy="30%" r="55%">
          <stop offset="0%" stopColor="var(--color-s2-glow-1)" />
          <stop offset="100%" stopColor="var(--color-s2-glow-2)" />
        </radialGradient>
        <radialGradient id="ts2-ceil1" cx="33%" cy="0%" r="40%">
          <stop offset="0%" stopColor="var(--color-s2-ceiling-stop-1)" />
          <stop offset="100%" stopColor="var(--color-s2-ceiling-stop-2)" />
        </radialGradient>
        <radialGradient id="ts2-ceil2" cx="67%" cy="0%" r="40%">
          <stop offset="0%" stopColor="var(--color-s2-ceiling-stop-1)" />
          <stop offset="100%" stopColor="var(--color-s2-ceiling-stop-2)" />
        </radialGradient>
      </defs>
      <rect width="1440" height="900" fill="var(--color-s2-bg)" />
      <rect width="1440" height="900" fill="url(#ts2-glow)" />
      <ellipse cx="480" cy="10" rx="80" ry="6" fill="var(--color-s2-ceiling-light)" />
      <ellipse cx="960" cy="10" rx="80" ry="6" fill="var(--color-s2-ceiling-light)" />
      <rect width="1440" height="900" fill="url(#ts2-ceil1)" />
      <rect width="1440" height="900" fill="url(#ts2-ceil2)" />
      <rect
        x="360"
        y="280"
        width="720"
        height="340"
        fill="var(--color-s2-table-shadow)"
        rx="16"
      />
      <rect
        x="366"
        y="286"
        width="708"
        height="328"
        fill="var(--color-s2-table)"
        rx="12"
      />
      <g stroke="var(--color-s2-table-grain)" strokeWidth="1" opacity="0.6">
        <line x1="366" y1="340" x2="1074" y2="340" />
        <line x1="366" y1="400" x2="1074" y2="400" />
        <line x1="366" y1="460" x2="1074" y2="460" />
        <line x1="366" y1="520" x2="1074" y2="520" />
      </g>
      <rect
        x="500"
        y="100"
        width="440"
        height="240"
        fill="var(--color-s2-whiteboard)"
        rx="4"
        opacity="0.96"
      />
      <rect
        x="500"
        y="100"
        width="440"
        height="8"
        fill="var(--color-s2-whiteboard-top)"
        rx="2"
      />
      <g
        stroke="var(--color-s2-whiteboard-ink)"
        strokeWidth="2"
        fill="none"
      >
        <rect x="540" y="130" width="100" height="56" rx="4" />
        <rect x="690" y="130" width="100" height="56" rx="4" />
        <rect x="840" y="130" width="60" height="56" rx="4" />
        <line x1="640" y1="158" x2="690" y2="158" />
        <line x1="790" y1="158" x2="840" y2="158" />
      </g>
      <text
        x="590"
        y="162"
        fontFamily="var(--font-body)"
        fontSize="12"
        fill="var(--color-s2-whiteboard-text)"
        textAnchor="middle"
      >
        Discover
      </text>
      <text
        x="740"
        y="162"
        fontFamily="var(--font-body)"
        fontSize="12"
        fill="var(--color-s2-whiteboard-text)"
        textAnchor="middle"
      >
        Position
      </text>
      <text
        x="870"
        y="162"
        fontFamily="var(--font-body)"
        fontSize="12"
        fill="var(--color-s2-whiteboard-text)"
        textAnchor="middle"
      >
        Build
      </text>
      <path
        d="M540 215 Q600 235 660 210"
        stroke="var(--color-s2-orange-doodle)"
        strokeWidth="2.5"
        fill="none"
      />
      <path
        d="M660 210 L650 205 M660 210 L656 220"
        stroke="var(--color-s2-orange-doodle)"
        strokeWidth="2.5"
        fill="none"
      />
      <circle
        cx="580"
        cy="240"
        r="8"
        fill="none"
        stroke="var(--color-s2-doodle-ink)"
        strokeWidth="1.5"
      />
      <line
        x1="580"
        y1="220"
        x2="600"
        y2="230"
        stroke="var(--color-s2-doodle-ink)"
        strokeWidth="1.5"
      />
      <rect x="420" y="310" width="80" height="72" fill="var(--color-s2-sticky-amber)" rx="2" />
      <rect x="422" y="312" width="76" height="8" fill="var(--color-s2-sticky-amber-edge)" />
      <g fill="var(--color-s2-sticky-text)">
        <rect x="428" y="326" width="60" height="5" rx="2" />
        <rect x="428" y="337" width="50" height="5" rx="2" />
        <rect x="428" y="348" width="56" height="5" rx="2" />
        <rect x="428" y="360" width="44" height="5" rx="2" />
      </g>
      <rect
        x="520"
        y="330"
        width="80"
        height="72"
        fill="var(--color-s2-sticky-white)"
        rx="2"
        transform="rotate(-3 560 366)"
      />
      <rect
        x="680"
        y="290"
        width="80"
        height="72"
        fill="var(--color-s2-sticky-yellow)"
        rx="2"
        transform="rotate(2 720 326)"
      />
      <rect
        x="780"
        y="350"
        width="80"
        height="72"
        fill="var(--color-s2-sticky-green)"
        rx="2"
        transform="rotate(-2 820 386)"
      />
      <rect
        x="960"
        y="310"
        width="80"
        height="72"
        fill="var(--color-s2-sticky-amber)"
        rx="2"
        opacity="0.9"
      />
      <rect
        x="880"
        y="290"
        width="80"
        height="72"
        fill="var(--color-s2-sticky-white)"
        rx="2"
        transform="rotate(4 920 326)"
      />
      <circle cx="450" cy="470" r="22" fill="var(--color-s2-cup-outer)" />
      <circle cx="450" cy="470" r="16" fill="var(--color-s2-cup-coffee)" />
      <circle cx="450" cy="470" r="8" fill="var(--color-s2-cup-coffee-deep)" />
      <circle cx="1000" cy="490" r="20" fill="var(--color-s2-cup-outer)" />
      <circle cx="1000" cy="490" r="14" fill="var(--color-s2-cup-cream)" />
      <rect x="550" y="450" width="180" height="120" fill="var(--color-s2-laptop-shell)" rx="6" />
      <rect x="556" y="456" width="168" height="108" fill="var(--color-s2-laptop-screen)" rx="3" />
      <g fill="var(--color-s2-laptop-text)">
        <rect x="566" y="466" width="80" height="5" rx="2" />
        <rect x="566" y="478" width="140" height="5" rx="2" />
        <rect x="566" y="490" width="100" height="5" rx="2" />
        <rect x="566" y="502" width="120" height="5" rx="2" />
        <rect x="566" y="514" width="90" height="5" rx="2" />
        <rect x="566" y="526" width="148" height="5" rx="2" />
      </g>
      <rect
        x="800"
        y="480"
        width="100"
        height="6"
        fill="var(--color-s2-pen-red)"
        rx="3"
        transform="rotate(-20 850 483)"
      />
      <rect
        x="820"
        y="500"
        width="90"
        height="6"
        fill="var(--color-s2-pen-black)"
        rx="3"
        transform="rotate(-18 865 503)"
      />
      <ellipse cx="720" cy="265" rx="40" ry="16" fill="var(--color-s2-chair)" />
      <ellipse cx="500" cy="265" rx="35" ry="14" fill="var(--color-s2-chair)" />
      <ellipse cx="940" cy="265" rx="35" ry="14" fill="var(--color-s2-chair)" />
      <ellipse cx="720" cy="635" rx="40" ry="16" fill="var(--color-s2-chair)" />
      <ellipse cx="380" cy="450" rx="16" ry="38" fill="var(--color-s2-chair)" />
      <ellipse cx="1060" cy="450" rx="16" ry="38" fill="var(--color-s2-chair)" />
      <ellipse cx="720" cy="870" rx="500" ry="28" fill="var(--color-s2-floor-shadow)" />
    </svg>
  );
}
