export function PhotoScene() {
  return (
    <svg
      viewBox="0 0 1440 900"
      preserveAspectRatio="xMidYMid slice"
      fill="none"
    >
      <defs>
        <radialGradient id="ts5-key" cx="62%" cy="42%" r="40%">
          <stop offset="0%" stopColor="var(--color-s5-key-stop-1)" />
          <stop offset="100%" stopColor="var(--color-s5-key-stop-2)" />
        </radialGradient>
        <radialGradient id="ts5-fill" cx="28%" cy="50%" r="30%">
          <stop offset="0%" stopColor="var(--color-s5-fill-stop-1)" />
          <stop offset="100%" stopColor="var(--color-s5-fill-stop-2)" />
        </radialGradient>
        <radialGradient id="ts5-keybeam" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="var(--color-s5-key-beam-stop-1)" />
          <stop offset="100%" stopColor="var(--color-s5-key-beam-stop-2)" />
        </radialGradient>
      </defs>
      <rect width="1440" height="900" fill="var(--color-s5-bg)" />
      <rect width="1440" height="900" fill="url(#ts5-key)" />
      <rect width="1440" height="900" fill="url(#ts5-fill)" />
      <rect x="320" y="0" width="800" height="750" fill="var(--color-s5-backdrop)" rx="4" />
      <rect
        x="324"
        y="0"
        width="792"
        height="748"
        fill="none"
        stroke="var(--color-s5-backdrop-border)"
        strokeWidth="1"
      />
      <line x1="1100" y1="820" x2="1100" y2="200" stroke="var(--color-s5-stand)" strokeWidth="6" />
      <line x1="1040" y1="820" x2="1100" y2="820" stroke="var(--color-s5-stand)" strokeWidth="4" />
      <line x1="1160" y1="820" x2="1100" y2="820" stroke="var(--color-s5-stand)" strokeWidth="4" />
      <rect x="1050" y="170" width="100" height="60" fill="var(--color-s5-key-head)" rx="6" />
      <rect x="1058" y="178" width="84" height="44" fill="var(--color-s5-key-bulb)" rx="3" />
      <ellipse cx="820" cy="500" rx="360" ry="400" fill="url(#ts5-keybeam)" />
      <line x1="260" y1="820" x2="260" y2="280" stroke="var(--color-s5-stand)" strokeWidth="5" />
      <line x1="210" y1="820" x2="260" y2="820" stroke="var(--color-s5-stand)" strokeWidth="4" />
      <rect x="220" y="252" width="80" height="50" fill="var(--color-s5-fill-head)" rx="5" />
      <rect x="226" y="258" width="68" height="38" fill="var(--color-s5-fill-bulb)" rx="2" />
      <line x1="720" y1="820" x2="640" y2="580" stroke="var(--color-s5-stand)" strokeWidth="5" />
      <line x1="720" y1="820" x2="720" y2="580" stroke="var(--color-s5-stand)" strokeWidth="5" />
      <line x1="720" y1="820" x2="800" y2="580" stroke="var(--color-s5-stand)" strokeWidth="5" />
      <rect x="650" y="520" width="140" height="90" fill="var(--color-s5-camera-body)" rx="6" />
      <rect x="658" y="528" width="124" height="74" fill="var(--color-s5-camera-inner)" rx="3" />
      <circle cx="720" cy="565" r="30" fill="var(--color-s5-lens-1)" />
      <circle cx="720" cy="565" r="22" fill="var(--color-s5-lens-2)" />
      <circle cx="720" cy="565" r="14" fill="var(--color-s5-lens-3)" />
      <circle cx="720" cy="565" r="6" fill="var(--color-s5-lens-1)" />
      <circle cx="712" cy="557" r="3" fill="var(--color-s5-lens-glint)" />
      <rect x="670" y="510" width="56" height="16" fill="var(--color-s5-camera-top)" rx="3" />
      <rect x="700" y="504" width="40" height="8" fill="var(--color-s5-camera-shoe)" rx="2" />
      <ellipse cx="820" cy="440" rx="52" ry="64" fill="var(--color-s5-subject)" />
      <ellipse cx="820" cy="396" rx="32" ry="38" fill="var(--color-s5-subject)" />
      <ellipse cx="550" cy="680" rx="32" ry="20" fill="var(--color-s5-director)" />
      <ellipse cx="550" cy="646" rx="22" ry="28" fill="var(--color-s5-director)" />
      <line x1="550" y1="660" x2="530" y2="700" stroke="var(--color-s5-director)" strokeWidth="10" />
      <line x1="550" y1="660" x2="570" y2="700" stroke="var(--color-s5-director)" strokeWidth="10" />
      <line x1="550" y1="660" x2="520" y2="640" stroke="var(--color-s5-director)" strokeWidth="8" />
      <line x1="550" y1="660" x2="580" y2="640" stroke="var(--color-s5-director)" strokeWidth="8" />
      <rect x="492" y="580" width="70" height="54" fill="var(--color-s5-clap)" rx="3" />
      <rect x="492" y="580" width="70" height="16" fill="var(--color-s5-clap-stripe)" />
      <g stroke="var(--color-s5-clap)" strokeWidth="2">
        <line x1="498" y1="580" x2="488" y2="568" />
        <line x1="510" y1="580" x2="500" y2="568" />
        <line x1="522" y1="580" x2="512" y2="568" />
        <line x1="534" y1="580" x2="524" y2="568" />
        <line x1="546" y1="580" x2="536" y2="568" />
      </g>
      <text
        x="505"
        y="606"
        fontFamily="var(--font-body)"
        fontSize="8"
        fill="var(--color-s5-clap-text)"
      >
        SARTE GLOBAL
      </text>
      <g stroke="var(--color-s5-grid)" strokeWidth="2" opacity="0.5">
        <line x1="0" y1="50" x2="1440" y2="50" />
        <line x1="200" y1="0" x2="200" y2="100" />
        <line x1="400" y1="0" x2="400" y2="100" />
        <line x1="600" y1="0" x2="600" y2="100" />
        <line x1="800" y1="0" x2="800" y2="100" />
        <line x1="1000" y1="0" x2="1000" y2="100" />
        <line x1="1200" y1="0" x2="1200" y2="100" />
      </g>
      <g fill="var(--color-s5-grid-light)">
        <circle cx="200" cy="50" r="4" />
        <circle cx="400" cy="50" r="4" />
        <circle cx="600" cy="50" r="4" />
        <circle cx="800" cy="50" r="4" />
        <circle cx="1000" cy="50" r="4" />
      </g>
    </svg>
  );
}
