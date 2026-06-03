import { Fragment } from "react";

import { TRUSTED_BRANDS, TRUSTED_LABEL } from "@/constants";

import { Container } from "../ui/Container";

export function TrustedMarquee() {
  const loop = [
    ...TRUSTED_BRANDS.map((brand) => ({ brand, cycle: "a" as const })),
    ...TRUSTED_BRANDS.map((brand) => ({ brand, cycle: "b" as const })),
  ];

  return (
    <section
      className="trusted"
      id="trusted"
      aria-label="Vertrouwd door Nederlandse ondernemers"
    >
      <Container>
        <p className="trusted-label">{TRUSTED_LABEL}</p>
      </Container>
      <div className="marquee">
        <div className="marquee-track">
          {loop.map(({ brand, cycle }) => (
            <Fragment key={`${cycle}-${brand}`}>
              <span className="mk">{brand}</span>
              <span className="mk">·</span>
            </Fragment>
          ))}
        </div>
      </div>
    </section>
  );
}
