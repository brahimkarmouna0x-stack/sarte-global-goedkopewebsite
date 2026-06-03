export function CodeScene() {
  return (
    <svg
      viewBox="0 0 1440 900"
      preserveAspectRatio="xMidYMid slice"
      fill="none"
    >
      <defs>
        <radialGradient id="ts3-glow" cx="55%" cy="45%" r="45%">
          <stop offset="0%" stopColor="var(--color-s3-glow-blue)" />
          <stop offset="100%" stopColor="var(--color-s3-glow-blue)" stopOpacity="0" />
        </radialGradient>
        <radialGradient id="ts3-green" cx="75%" cy="40%" r="30%">
          <stop offset="0%" stopColor="var(--color-s3-glow-green)" />
          <stop offset="100%" stopColor="var(--color-s3-glow-green)" stopOpacity="0" />
        </radialGradient>
        <radialGradient id="ts3-amber" cx="30%" cy="60%" r="25%">
          <stop offset="0%" stopColor="var(--color-s3-glow-amber)" />
          <stop offset="100%" stopColor="var(--color-s3-glow-amber)" stopOpacity="0" />
        </radialGradient>
      </defs>
      <rect width="1440" height="900" fill="var(--color-s3-bg)" />
      <rect width="1440" height="900" fill="url(#ts3-glow)" />
      <rect width="1440" height="900" fill="url(#ts3-green)" />
      <rect width="1440" height="900" fill="url(#ts3-amber)" />
      <rect x="1200" y="100" width="180" height="700" fill="var(--color-s3-rack)" rx="4" />
      <g fill="var(--color-s3-rack-slot)">
        {[120, 154, 188, 222, 256, 290, 324, 358, 392, 426].map((y) => (
          <rect key={y} x="1212" y={y} width="156" height="28" rx="2" />
        ))}
      </g>
      <g fill="var(--color-s3-led-green)" opacity="0.6">
        {[126, 160, 194, 228, 262].map((y) => (
          <rect key={y} x="1348" y={y} width="6" height="6" rx="1" />
        ))}
      </g>
      <g fill="var(--color-s3-led-amber)" opacity="0.7">
        {[296, 330].map((y) => (
          <rect key={y} x="1348" y={y} width="6" height="6" rx="1" />
        ))}
      </g>
      <g fill="var(--color-s3-led-blue)" opacity="0.6">
        {[364, 398].map((y) => (
          <rect key={y} x="1348" y={y} width="6" height="6" rx="1" />
        ))}
      </g>
      <rect x="120" y="530" width="1060" height="280" fill="var(--color-s3-desk)" rx="2" />
      <rect x="120" y="530" width="1060" height="5" fill="var(--color-s3-desk-edge)" />
      <rect x="200" y="140" width="820" height="420" fill="var(--color-s3-monitor-frame)" rx="8" />
      <rect x="208" y="148" width="804" height="404" fill="var(--color-s3-monitor-bg)" rx="4" />
      <rect x="208" y="148" width="56" height="404" fill="var(--color-s3-monitor-rail)" />
      <rect x="264" y="148" width="200" height="404" fill="var(--color-s3-monitor-tree)" />
      <g
        fill="var(--color-s3-file-tree-text)"
        fontFamily="var(--font-body)"
        fontSize="9"
      >
        <text x="272" y="172">src/</text>
        <text x="280" y="188">components/</text>
        <text x="288" y="204">Button.tsx</text>
        <text x="288" y="220">Card.tsx</text>
        <text x="288" y="236">Nav.tsx</text>
        <text x="280" y="252">pages/</text>
        <text x="288" y="268">index.tsx</text>
        <text x="288" y="284">about.tsx</text>
        <text x="280" y="300">utils/</text>
        <text x="288" y="316">api.ts</text>
        <text x="288" y="332">hooks.ts</text>
      </g>
      <rect x="464" y="148" width="548" height="404" fill="var(--color-s3-monitor-edit)" />
      <g
        fill="var(--color-s3-line-no)"
        fontFamily="var(--font-body)"
        fontSize="10"
      >
        {[
          [172, "01"],
          [192, "02"],
          [210, "03"],
          [228, "04"],
          [246, "05"],
          [264, "06"],
          [282, "07"],
          [300, "08"],
          [318, "09"],
          [336, "10"],
          [354, "11"],
          [372, "12"],
        ].map(([y, n]) => (
          <text key={n} x="472" y={y}>
            {n}
          </text>
        ))}
      </g>
      <g fontFamily="var(--font-body)" fontSize="10">
        <text x="494" y="174" fill="var(--color-s3-code-keyword)">
          import
        </text>
        <text x="536" y="174" fill="var(--color-s3-code-text)">
          {" React"}
        </text>
        <text x="572" y="174" fill="var(--color-s3-code-keyword)">
          {" from"}
        </text>
        <text x="604" y="174" fill="var(--color-s3-code-string)">
          {" 'react'"}
        </text>
        <text x="494" y="192" fill="var(--color-s3-code-keyword)">
          import
        </text>
        <text x="536" y="192" fill="var(--color-s3-code-keyword2)">
          {" { useState }"}
        </text>
        <text x="638" y="192" fill="var(--color-s3-code-keyword)">
          {" from"}
        </text>
        <text x="670" y="192" fill="var(--color-s3-code-string)">
          {" 'react'"}
        </text>
        <text x="494" y="228" fill="var(--color-s3-code-keyword2)">
          const
        </text>
        <text x="528" y="228" fill="var(--color-s3-code-fn)">
          {" Hero"}
        </text>
        <text x="556" y="228" fill="var(--color-s3-code-text)">
          {" = () => {"}
        </text>
        <text x="510" y="246" fill="var(--color-s3-code-keyword2)">
          return
        </text>
        <text x="548" y="246" fill="var(--color-s3-code-text)">
          {" ("}
        </text>
        <text x="526" y="264" fill="var(--color-s3-code-tag)">
          {"<section"}
        </text>
        <text x="590" y="264" fill="var(--color-s3-code-string)">
          {" className"}
        </text>
        <text x="658" y="264" fill="var(--color-s3-code-text)">
          =
        </text>
        <text x="665" y="264" fill="var(--color-s3-code-string)">
          {'"hero"'}
        </text>
        <text x="708" y="264" fill="var(--color-s3-code-tag)">
          {">"}
        </text>
        <text x="542" y="282" fill="var(--color-s3-code-tag)">
          {"<h1"}
        </text>
        <text x="566" y="282" fill="var(--color-s3-code-tag)">
          {">"}
        </text>
        <text x="578" y="282" fill="var(--color-s3-code-text)">
          We Build Brands
        </text>
        <text x="710" y="282" fill="var(--color-s3-code-tag)">
          {"</h1>"}
        </text>
        <text x="526" y="300" fill="var(--color-s3-code-tag)">
          {"</section>"}
        </text>
        <text x="510" y="318" fill="var(--color-s3-code-text)">
          )
        </text>
        <text x="494" y="336" fill="var(--color-s3-code-text)">
          {"}"}
        </text>
      </g>
      <rect x="494" y="350" width="6" height="12" fill="var(--color-s3-code-text)" opacity="0.8" />
      <rect x="120" y="240" width="240" height="200" fill="var(--color-s3-side-mon-frame)" rx="6" />
      <rect x="126" y="246" width="228" height="188" fill="var(--color-s3-side-mon-screen)" />
      <rect x="126" y="246" width="228" height="20" fill="var(--color-s3-term-bar)" />
      <circle cx="138" cy="256" r="4" fill="var(--color-s3-term-red)" />
      <circle cx="150" cy="256" r="4" fill="var(--color-s3-term-yel)" />
      <circle cx="162" cy="256" r="4" fill="var(--color-s3-term-grn)" />
      <g fontFamily="var(--font-body)" fontSize="9">
        <text x="134" y="282" fill="var(--color-s3-term-prompt)">
          $ git push origin main
        </text>
        <text x="134" y="296" fill="var(--color-s3-term-line)">
          Counting objects: 12
        </text>
        <text x="134" y="310" fill="var(--color-s3-term-prompt)">
          ✓ Branch deployed
        </text>
        <text x="134" y="324" fill="var(--color-s3-term-prompt)">
          $ npm run build
        </text>
        <text x="134" y="338" fill="var(--color-s3-term-build)">
          ⚡ Build success 2.3s
        </text>
        <text x="134" y="352" fill="var(--color-s3-term-cursor)">
          $ _
        </text>
      </g>
      <path
        d="M420 570 Q460 540 500 570"
        stroke="var(--color-s3-headphone)"
        strokeWidth="6"
        fill="none"
      />
      <rect x="412" y="568" width="16" height="20" fill="var(--color-s3-headphone-cup)" rx="3" />
      <rect x="496" y="568" width="16" height="20" fill="var(--color-s3-headphone-cup)" rx="3" />
      <rect x="560" y="548" width="28" height="48" fill="var(--color-s3-can)" rx="4" />
      <rect x="562" y="550" width="24" height="8" fill="var(--color-s3-can-band)" rx="2" />
    </svg>
  );
}
