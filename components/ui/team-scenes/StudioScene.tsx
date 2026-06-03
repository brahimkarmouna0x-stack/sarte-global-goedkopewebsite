export function StudioScene() {
  return (
    <svg
      viewBox="0 0 1440 900"
      preserveAspectRatio="xMidYMid slice"
      fill="none"
    >
      <defs>
        <radialGradient id="ts1-lamp" cx="68%" cy="48%" r="38%">
          <stop offset="0%" stopColor="var(--color-s1-lamp-stop-1)" />
          <stop offset="100%" stopColor="var(--color-s1-lamp-stop-2)" />
        </radialGradient>
        <radialGradient id="ts1-mon" cx="54%" cy="42%" r="22%">
          <stop offset="0%" stopColor="var(--color-s1-mon-stop-1)" />
          <stop offset="100%" stopColor="var(--color-s1-mon-stop-2)" />
        </radialGradient>
        <radialGradient id="ts1-spot" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="var(--color-s1-spot-stop-1)" />
          <stop offset="100%" stopColor="var(--color-s1-spot-stop-2)" />
        </radialGradient>
      </defs>
      <rect width="1440" height="900" fill="var(--color-s1-floor)" />
      <rect width="1440" height="900" fill="url(#ts1-lamp)" />
      <rect width="1440" height="900" fill="url(#ts1-mon)" />
      <rect x="0" y="0" width="1440" height="8" fill="var(--color-s1-beam)" opacity="0.8" />
      <rect x="300" y="0" width="4" height="200" fill="var(--color-s1-beam)" opacity="0.3" />
      <rect x="720" y="0" width="4" height="180" fill="var(--color-s1-beam)" opacity="0.3" />
      <rect x="1100" y="0" width="4" height="200" fill="var(--color-s1-beam)" opacity="0.3" />
      <rect x="400" y="500" width="860" height="320" fill="var(--color-s1-desk)" rx="2" />
      <rect x="400" y="500" width="860" height="6" fill="var(--color-s1-desk-edge)" rx="1" />
      <rect x="560" y="220" width="540" height="330" fill="var(--color-s1-monitor-frame)" rx="6" />
      <rect x="568" y="228" width="524" height="314" fill="var(--color-s1-monitor-screen)" rx="3" />
      <rect x="568" y="228" width="72" height="314" fill="var(--color-s1-monitor-side)" rx="2" />
      <g fill="var(--color-accent)" opacity="0.5">
        <rect x="580" y="248" width="48" height="6" rx="3" />
        <rect x="580" y="264" width="36" height="6" rx="3" />
        <rect x="580" y="280" width="48" height="6" rx="3" />
        <rect x="580" y="320" width="38" height="6" rx="3" />
        <rect x="580" y="336" width="48" height="6" rx="3" />
      </g>
      <rect x="650" y="238" width="432" height="294" fill="var(--color-s1-canvas)" />
      <path
        d="M700 380 C740 310 820 300 870 360 C920 420 960 310 1020 350"
        stroke="var(--color-accent)"
        strokeWidth="2.5"
        fill="none"
      />
      <circle cx="700" cy="380" r="5" fill="var(--color-accent)" />
      <circle cx="870" cy="360" r="5" fill="var(--color-accent)" />
      <circle cx="1020" cy="350" r="5" fill="var(--color-accent)" />
      <line
        x1="700"
        y1="380"
        x2="740"
        y2="310"
        stroke="var(--color-accent)"
        strokeWidth="1"
        opacity="0.4"
        strokeDasharray="4 3"
      />
      <line
        x1="870"
        y1="360"
        x2="820"
        y2="300"
        stroke="var(--color-accent)"
        strokeWidth="1"
        opacity="0.4"
        strokeDasharray="4 3"
      />
      <circle cx="740" cy="310" r="3" fill="none" stroke="var(--color-accent)" strokeWidth="1.5" />
      <circle cx="820" cy="300" r="3" fill="none" stroke="var(--color-accent)" strokeWidth="1.5" />
      <rect x="680" y="420" width="30" height="22" fill="var(--color-accent)" rx="2" />
      <rect x="716" y="420" width="30" height="22" fill="var(--color-background)" rx="2" />
      <rect x="752" y="420" width="30" height="22" fill="var(--color-text)" rx="2" />
      <rect x="788" y="420" width="30" height="22" fill="var(--color-surface)" rx="2" />
      <rect x="810" y="550" width="40" height="44" fill="var(--color-s1-monitor-stand)" />
      <rect x="770" y="590" width="120" height="8" fill="var(--color-s1-monitor-base)" rx="3" />
      <rect x="680" y="612" width="280" height="58" fill="var(--color-s1-keyboard)" rx="5" />
      <g fill="var(--color-s1-key)" stroke="var(--color-s1-key-edge)" strokeWidth="0.5">
        <rect x="692" y="622" width="16" height="12" rx="2" />
        <rect x="712" y="622" width="16" height="12" rx="2" />
        <rect x="732" y="622" width="16" height="12" rx="2" />
        <rect x="752" y="622" width="16" height="12" rx="2" />
        <rect x="772" y="622" width="16" height="12" rx="2" />
        <rect x="792" y="622" width="16" height="12" rx="2" />
        <rect x="812" y="622" width="16" height="12" rx="2" />
        <rect x="832" y="622" width="16" height="12" rx="2" />
        <rect x="852" y="622" width="16" height="12" rx="2" />
        <rect x="692" y="640" width="38" height="12" rx="2" />
        <rect x="734" y="640" width="16" height="12" rx="2" />
        <rect x="754" y="640" width="110" height="12" rx="2" />
        <rect x="868" y="640" width="30" height="12" rx="2" />
      </g>
      <path
        d="M1010 600 L1040 530 L1080 500"
        stroke="var(--color-s1-lamp-arm)"
        strokeWidth="5"
        fill="none"
      />
      <ellipse cx="1092" cy="493" rx="28" ry="14" fill="var(--color-accent)" opacity="0.85" />
      <ellipse cx="1010" cy="610" rx="100" ry="40" fill="url(#ts1-spot)" />
      <rect x="1060" y="548" width="28" height="58" fill="var(--color-s1-pot)" rx="5" />
      <ellipse cx="1074" cy="542" rx="42" ry="52" fill="var(--color-s1-leaf-1)" opacity="0.9" />
      <path
        d="M1050 520 Q1074 488 1098 520"
        stroke="var(--color-s1-leaf-2)"
        strokeWidth="2.5"
        fill="none"
      />
      <path
        d="M1054 500 Q1074 464 1094 500"
        stroke="var(--color-s1-leaf-2)"
        strokeWidth="2"
        fill="none"
      />
      <ellipse cx="1055" cy="522" rx="22" ry="14" fill="var(--color-s1-leaf-3)" opacity="0.8" />
      <ellipse cx="1093" cy="522" rx="22" ry="14" fill="var(--color-s1-leaf-3)" opacity="0.8" />
      <rect x="490" y="310" width="200" height="150" fill="var(--color-s1-side-mon-frame)" rx="4" />
      <rect x="497" y="317" width="186" height="132" fill="var(--color-s1-side-mon-screen)" />
      <rect x="506" y="326" width="90" height="8" fill="var(--color-text)" opacity="0.5" rx="2" />
      <rect x="506" y="340" width="160" height="4" fill="var(--color-text)" opacity="0.2" rx="2" />
      <rect x="506" y="350" width="130" height="4" fill="var(--color-text)" opacity="0.2" rx="2" />
      <rect x="506" y="366" width="168" height="68" fill="var(--color-s1-side-mon-card)" rx="3" />
      <rect x="510" y="370" width="36" height="60" fill="var(--color-s1-side-mon-swatch-1)" rx="2" opacity="0.5" />
      <rect x="550" y="370" width="36" height="60" fill="var(--color-s1-side-mon-swatch-2)" rx="2" opacity="0.4" />
      <rect x="590" y="370" width="36" height="60" fill="var(--color-s1-side-mon-swatch-3)" rx="2" opacity="0.4" />
      <rect x="630" y="370" width="36" height="60" fill="var(--color-s1-side-mon-swatch-4)" rx="2" opacity="0.3" />
      <rect x="850" y="582" width="38" height="28" fill="var(--color-s1-cup)" rx="5" />
      <path
        d="M888 591 Q902 591 902 601 Q902 611 888 611"
        stroke="var(--color-s1-cup-handle)"
        strokeWidth="1.5"
        fill="none"
      />
      <rect x="906" y="562" width="13" height="40" fill="var(--color-s1-book-1)" rx="2" />
      <rect x="921" y="566" width="11" height="36" fill="var(--color-s1-book-2)" rx="2" />
      <rect x="934" y="563" width="9" height="39" fill="var(--color-s1-book-3)" rx="2" />
      <rect
        x="180"
        y="180"
        width="220"
        height="160"
        fill="var(--color-s1-art-bg)"
        stroke="var(--color-s1-art-frame)"
        strokeWidth="2"
        rx="3"
      />
      <g
        fill="none"
        stroke="var(--color-s1-art-ring)"
        strokeWidth="1.2"
        opacity="0.5"
      >
        <circle cx="290" cy="260" r="55" />
        <circle cx="290" cy="260" r="35" />
        <circle cx="290" cy="260" r="15" />
      </g>
      <ellipse cx="840" cy="840" rx="440" ry="40" fill="var(--color-s1-floor-glow)" />
    </svg>
  );
}
