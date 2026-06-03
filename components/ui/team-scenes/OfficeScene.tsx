export function OfficeScene() {
  return (
    <svg
      viewBox="0 0 1440 900"
      preserveAspectRatio="xMidYMid slice"
      fill="none"
    >
      <defs>
        <linearGradient id="ts6-sky" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="var(--color-s6-sky-1)" />
          <stop offset="100%" stopColor="var(--color-s6-sky-2)" />
        </linearGradient>
        <radialGradient id="ts6-glow" cx="60%" cy="45%" r="50%">
          <stop offset="0%" stopColor="var(--color-s6-glow-1)" />
          <stop offset="100%" stopColor="var(--color-s6-glow-2)" />
        </radialGradient>
        <linearGradient id="ts6-horizon" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="var(--color-s6-horizon-1)" />
          <stop offset="100%" stopColor="var(--color-s6-horizon-2)" />
        </linearGradient>
        <radialGradient id="ts6-ceil" cx="50%" cy="0%" r="50%">
          <stop offset="0%" stopColor="var(--color-s6-ceil-stop-1)" />
          <stop offset="100%" stopColor="var(--color-s6-ceil-stop-2)" />
        </radialGradient>
      </defs>
      <rect width="1440" height="900" fill="url(#ts6-sky)" />
      <rect width="1440" height="900" fill="url(#ts6-glow)" />
      <rect x="240" y="0" width="960" height="700" fill="var(--color-s6-window)" rx="2" />
      <rect x="280" y="400" width="60" height="300" fill="var(--color-s6-bldg-1)" />
      <rect x="350" y="320" width="80" height="380" fill="var(--color-s6-bldg-2)" />
      <rect x="440" y="280" width="100" height="420" fill="var(--color-s6-bldg-3)" />
      <rect x="550" y="350" width="70" height="350" fill="var(--color-s6-bldg-4)" />
      <rect x="630" y="240" width="120" height="460" fill="var(--color-s6-bldg-5)" />
      <rect x="760" y="310" width="90" height="390" fill="var(--color-s6-bldg-6)" />
      <rect x="860" y="360" width="70" height="340" fill="var(--color-s6-bldg-3)" />
      <rect x="940" y="290" width="100" height="410" fill="var(--color-s6-bldg-4)" />
      <rect x="1050" y="380" width="80" height="320" fill="var(--color-s6-bldg-7)" />
      <rect x="1140" y="340" width="60" height="360" fill="var(--color-s6-bldg-6)" />
      <g fill="var(--color-s6-win-lit-strong)">
        <rect x="368" y="340" width="8" height="8" rx="1" />
        <rect x="382" y="340" width="8" height="8" rx="1" />
        <rect x="368" y="356" width="8" height="8" rx="1" />
        <rect x="458" y="300" width="8" height="8" rx="1" />
        <rect x="472" y="300" width="8" height="8" rx="1" />
        <rect x="486" y="300" width="8" height="8" rx="1" />
        <rect x="458" y="316" width="8" height="8" rx="1" />
        <rect x="472" y="316" width="8" height="8" rx="1" />
        <rect x="648" y="264" width="10" height="10" rx="1" />
        <rect x="664" y="264" width="10" height="10" rx="1" />
        <rect x="680" y="264" width="10" height="10" rx="1" />
        <rect x="648" y="282" width="10" height="10" rx="1" />
        <rect x="696" y="264" width="10" height="10" rx="1" />
        <rect x="664" y="282" width="10" height="10" rx="1" />
        <rect x="680" y="282" width="10" height="10" rx="1" />
        <rect x="780" y="330" width="8" height="8" rx="1" />
        <rect x="796" y="330" width="8" height="8" rx="1" />
        <rect x="780" y="346" width="8" height="8" rx="1" />
        <rect x="960" y="310" width="8" height="8" rx="1" />
        <rect x="976" y="310" width="8" height="8" rx="1" />
        <rect x="992" y="310" width="8" height="8" rx="1" />
      </g>
      <g fill="var(--color-s6-win-lit-soft)">
        <rect x="396" y="356" width="8" height="8" rx="1" />
        <rect x="500" y="316" width="8" height="8" rx="1" />
        <rect x="712" y="282" width="10" height="10" rx="1" />
        <rect x="812" y="346" width="8" height="8" rx="1" />
      </g>
      <rect x="240" y="580" width="960" height="120" fill="url(#ts6-horizon)" />
      <circle cx="1080" cy="120" r="36" fill="var(--color-s6-moon)" />
      <circle cx="1095" cy="112" r="28" fill="var(--color-s6-moon-cutout)" />
      <g fill="var(--color-s6-star)">
        <circle cx="320" cy="80" r="1" opacity="0.4" />
        <circle cx="480" cy="60" r="1.2" opacity="0.5" />
        <circle cx="600" cy="100" r="1" opacity="0.3" />
        <circle cx="750" cy="50" r="1.5" opacity="0.5" />
        <circle cx="900" cy="90" r="1" opacity="0.4" />
        <circle cx="1020" cy="70" r="1.2" opacity="0.3" />
        <circle cx="1150" cy="60" r="1" opacity="0.5" />
      </g>
      <line x1="240" y1="0" x2="240" y2="700" stroke="var(--color-s6-mullion-strong)" strokeWidth="3" />
      <line x1="560" y1="0" x2="560" y2="700" stroke="var(--color-s6-mullion-soft)" strokeWidth="2" />
      <line x1="880" y1="0" x2="880" y2="700" stroke="var(--color-s6-mullion-soft)" strokeWidth="2" />
      <line x1="1200" y1="0" x2="1200" y2="700" stroke="var(--color-s6-mullion-strong)" strokeWidth="3" />
      <rect x="0" y="700" width="1440" height="200" fill="var(--color-s6-floor)" />
      <rect x="0" y="700" width="1440" height="4" fill="var(--color-s6-floor-edge)" />
      <rect x="380" y="740" width="680" height="120" fill="var(--color-s6-table-shadow)" rx="8" />
      <rect x="386" y="746" width="668" height="108" fill="var(--color-s6-table)" rx="5" />
      <rect x="440" y="755" width="100" height="70" fill="var(--color-s6-book-1)" rx="3" />
      <rect x="443" y="758" width="94" height="64" fill="var(--color-s6-book-1-inner)" rx="2" />
      <rect x="560" y="760" width="80" height="60" fill="var(--color-s6-book-2)" rx="3" />
      <rect x="700" y="755" width="100" height="70" fill="var(--color-s6-book-1)" rx="3" />
      <ellipse cx="440" cy="740" rx="40" ry="12" fill="var(--color-s6-chair)" />
      <ellipse cx="620" cy="740" rx="40" ry="12" fill="var(--color-s6-chair)" />
      <ellipse cx="800" cy="740" rx="40" ry="12" fill="var(--color-s6-chair)" />
      <ellipse cx="980" cy="740" rx="40" ry="12" fill="var(--color-s6-chair)" />
      <ellipse cx="620" cy="864" rx="40" ry="12" fill="var(--color-s6-chair)" />
      <ellipse cx="800" cy="864" rx="40" ry="12" fill="var(--color-s6-chair)" />
      <rect x="100" y="620" width="18" height="80" fill="var(--color-s6-pot)" rx="4" />
      <ellipse cx="109" cy="615" rx="55" ry="70" fill="var(--color-s6-plant-1)" opacity="0.9" />
      <ellipse cx="80" cy="640" rx="30" ry="18" fill="var(--color-s6-plant-2)" opacity="0.7" />
      <ellipse cx="138" cy="640" rx="30" ry="18" fill="var(--color-s6-plant-2)" opacity="0.7" />
      <rect width="1440" height="900" fill="url(#ts6-ceil)" />
    </svg>
  );
}
