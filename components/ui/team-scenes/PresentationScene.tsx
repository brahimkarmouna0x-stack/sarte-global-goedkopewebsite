export function PresentationScene() {
  return (
    <svg
      viewBox="0 0 1440 900"
      preserveAspectRatio="xMidYMid slice"
      fill="none"
    >
      <defs>
        <radialGradient id="ts4-proj" cx="50%" cy="35%" r="45%">
          <stop offset="0%" stopColor="var(--color-s4-proj-stop-1)" />
          <stop offset="100%" stopColor="var(--color-s4-proj-stop-2)" />
        </radialGradient>
        <linearGradient id="ts4-beam" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="var(--color-s4-beam-stop-1)" />
          <stop offset="100%" stopColor="var(--color-s4-beam-stop-2)" />
        </linearGradient>
        <linearGradient id="ts4-floor" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="var(--color-s4-floor-stop-1)" />
          <stop offset="100%" stopColor="var(--color-s4-floor-stop-2)" />
        </linearGradient>
      </defs>
      <rect width="1440" height="900" fill="var(--color-s4-bg)" />
      <rect width="1440" height="900" fill="url(#ts4-proj)" />
      <rect x="280" y="80" width="880" height="540" fill="var(--color-s4-screen-frame)" rx="4" />
      <rect x="288" y="88" width="864" height="524" fill="var(--color-s4-screen-inner)" rx="2" />
      <rect x="296" y="96" width="848" height="508" fill="var(--color-s4-slide)" />
      <text
        x="720"
        y="260"
        fontFamily="var(--font-display)"
        fontSize="96"
        fontWeight="700"
        fill="var(--color-s4-wordmark)"
        textAnchor="middle"
        opacity="0.95"
        letterSpacing="20"
      >
        SARTE
      </text>
      <line x1="380" y1="290" x2="1060" y2="290" stroke="var(--color-s4-rule)" strokeWidth="2" />
      <text
        x="720"
        y="318"
        fontFamily="var(--font-body)"
        fontSize="16"
        fill="var(--color-s4-caption)"
        textAnchor="middle"
        letterSpacing="6"
      >
        BRAND IDENTITY SYSTEM · 2026
      </text>
      <rect x="400" y="360" width="100" height="60" fill="var(--color-s4-palette-1)" rx="4" />
      <rect x="510" y="360" width="100" height="60" fill="var(--color-s4-palette-2)" rx="4" />
      <rect x="620" y="360" width="100" height="60" fill="var(--color-s4-palette-3)" rx="4" />
      <rect x="730" y="360" width="100" height="60" fill="var(--color-s4-palette-4)" rx="4" />
      <rect x="840" y="360" width="100" height="60" fill="var(--color-s4-palette-5)" rx="4" />
      <text
        x="720"
        y="472"
        fontFamily="var(--font-display)"
        fontSize="28"
        fill="var(--color-s4-type-spec)"
        textAnchor="middle"
      >
        Playfair Display · DM Sans
      </text>
      <polygon points="720,10 288,88 1152,88" fill="url(#ts4-beam)" />
      <rect x="680" y="0" width="80" height="26" fill="var(--color-s4-projector)" rx="4" />
      <circle cx="720" cy="13" r="8" fill="var(--color-s4-projector-lens)" />
      <ellipse cx="400" cy="760" rx="48" ry="20" fill="var(--color-s4-audience)" />
      <ellipse cx="400" cy="730" rx="30" ry="36" fill="var(--color-s4-audience)" />
      <ellipse cx="560" cy="760" rx="48" ry="20" fill="var(--color-s4-audience)" />
      <ellipse cx="560" cy="728" rx="30" ry="36" fill="var(--color-s4-audience)" />
      <ellipse cx="720" cy="760" rx="48" ry="20" fill="var(--color-s4-audience)" />
      <ellipse cx="720" cy="726" rx="30" ry="36" fill="var(--color-s4-audience)" />
      <ellipse cx="880" cy="760" rx="48" ry="20" fill="var(--color-s4-audience)" />
      <ellipse cx="880" cy="730" rx="30" ry="36" fill="var(--color-s4-audience)" />
      <ellipse cx="1040" cy="760" rx="48" ry="20" fill="var(--color-s4-audience)" />
      <ellipse cx="1040" cy="728" rx="30" ry="36" fill="var(--color-s4-audience)" />
      <rect x="0" y="700" width="1440" height="200" fill="url(#ts4-floor)" />
      <circle cx="620" cy="360" r="4" fill="var(--color-s4-laser-strong)" />
      <circle cx="620" cy="360" r="8" fill="var(--color-s4-laser-faint)" />
      <rect
        x="288"
        y="88"
        width="864"
        height="524"
        fill="none"
        stroke="var(--color-s4-screen-border)"
        strokeWidth="1"
        rx="2"
      />
    </svg>
  );
}
