import type { Metadata } from "next";

import { PageHero } from "@/components/page/PageHero";
import { CallToAction } from "@/components/sections/CallToAction";
import { Journal } from "@/components/sections/Journal";
import { Container } from "@/components/ui/Container";
import { NewsletterForm } from "@/components/ui/NewsletterForm";
import { Reveal } from "@/components/ui/Reveal";
import { NEWSLETTER } from "@/constants";

const PAGE_TITLE = "Journal";
const PAGE_DESC =
  "Inzichten van Sarte Global: tips over websites, SEO en online groei voor ondernemers — één beknopte e-mail per maand.";

export const metadata: Metadata = {
  title: PAGE_TITLE,
  description: PAGE_DESC,
  alternates: { canonical: "/journal" },
  openGraph: {
    title: `${PAGE_TITLE} · Sarte Global`,
    description: PAGE_DESC,
    url: "/journal",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: `${PAGE_TITLE} · Sarte Global`,
    description: PAGE_DESC,
  },
};

const HERO = {
  icon: "spark" as const,
  eyebrow: "Journal · Inzichten",
  titleLead: "Inzichten vanuit",
  titleEm: "ons bureau.",
  intro:
    "Praktische artikelen over websites, SEO en online groei voor ondernemers. Lang genoeg om nuttig te zijn, kort genoeg om bij de koffie te lezen.",
  align: "center" as const,
};

export default function JournalPage() {
  return (
    <main className="journal-page" id="top">
      <PageHero content={HERO} id="journal-h" />
      <Journal />

      <section className="journal-news" aria-labelledby="journal-news-h">
        <Container>
          <Reveal className="journal-news__card">
            <div className="journal-news__body">
              <span className="eyebrow">{NEWSLETTER.title}</span>
              <h2 id="journal-news-h" className="journal-news__title">
                Ontvang inzichten in <em>jouw inbox.</em>
              </h2>
              <p className="journal-news__sub">{NEWSLETTER.description}</p>
            </div>
            <div className="journal-news__form">
              <NewsletterForm />
            </div>
          </Reveal>
        </Container>
      </section>

      <CallToAction />
    </main>
  );
}
