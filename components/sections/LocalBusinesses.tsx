import { LOCAL_BUSINESSES, LOCAL_BUSINESSES_SECTION } from "@/constants";

import { Container } from "../ui/Container";
import { LocalBusinessesGrid } from "../ui/LocalBusinessesGrid";
import { Reveal } from "../ui/Reveal";

export function LocalBusinesses() {
  return (
    <section
      id="local-businesses"
      className="local-biz"
      aria-labelledby="local-biz-h"
    >
      <div className="local-biz__glow" aria-hidden="true" />
      <Container>
        <Reveal as="header" className="section-head">
          <div>
            <span className="eyebrow">{LOCAL_BUSINESSES_SECTION.eyebrow}</span>
            <h2 className="h2" id="local-biz-h">
              {LOCAL_BUSINESSES_SECTION.titleLead}{" "}
              <em>{LOCAL_BUSINESSES_SECTION.titleEm}</em>
            </h2>
          </div>
          <p className="sub">{LOCAL_BUSINESSES_SECTION.sub}</p>
        </Reveal>

        <LocalBusinessesGrid businesses={LOCAL_BUSINESSES} />
      </Container>
    </section>
  );
}
