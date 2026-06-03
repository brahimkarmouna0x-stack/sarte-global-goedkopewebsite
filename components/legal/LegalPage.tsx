import type { LegalPageProps } from "@/types";

import { Container } from "../ui/Container";

import { LegalContent } from "./LegalContent";
import { LegalCTA } from "./LegalCTA";
import { LegalPageHero } from "./LegalPageHero";
import { LegalTOC } from "./LegalTOC";

export function LegalPage({ document }: LegalPageProps) {
  return (
    <main className="legal-page" id="top">
      <LegalPageHero document={document} />

      <section className="legal-body" aria-label="Documentinhoud">
        <Container>
          <div className="legal-grid">
            <aside className="legal-grid__aside">
              <LegalTOC sections={document.sections} />
            </aside>
            <div className="legal-grid__main">
              <LegalContent sections={document.sections} />
            </div>
          </div>
        </Container>
      </section>

      <LegalCTA document={document} />
    </main>
  );
}
