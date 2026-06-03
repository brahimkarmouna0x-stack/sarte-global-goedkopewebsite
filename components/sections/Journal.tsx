import { JOURNAL_ARTICLES, JOURNAL_SECTION } from "@/constants";

import { ArticleCard } from "../ui/ArticleCard";
import { Container } from "../ui/Container";
import { Reveal } from "../ui/Reveal";

export function Journal() {
  return (
    <section id="journal" aria-labelledby="journal-h">
      <Container>
        <Reveal as="header" className="section-head">
          <div>
            <span className="eyebrow">{JOURNAL_SECTION.eyebrow}</span>
            <h2 className="h2" id="journal-h">
              {JOURNAL_SECTION.titleLead} <em>{JOURNAL_SECTION.titleEm}</em>
            </h2>
          </div>
          <p className="sub">{JOURNAL_SECTION.sub}</p>
        </Reveal>

        <div className="journal-grid">
          {JOURNAL_ARTICLES.map((article, index) => (
            <ArticleCard
              key={article.title}
              article={article}
              index={index}
            />
          ))}
        </div>
      </Container>
    </section>
  );
}
