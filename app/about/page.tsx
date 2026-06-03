import type { Metadata } from "next";

import { AboutCompany } from "@/components/sections/AboutCompany";
import { PageHero } from "@/components/page/PageHero";
import { CallToAction } from "@/components/sections/CallToAction";
import { ImpactStats } from "@/components/sections/ImpactStats";
import { Process } from "@/components/sections/Process";
import { TeamShowcase } from "@/components/sections/TeamShowcase";
import { Testimonials } from "@/components/sections/Testimonials";

const PAGE_TITLE = "Over ons · Sarte Global";
const PAGE_DESC =
  "Sarte Global is het bureau achter goedkopewebsite-latenmaken.nl. We bouwen professionele en betaalbare websites voor ondernemers en bedrijven in Nederland.";

export const metadata: Metadata = {
  title: PAGE_TITLE,
  description: PAGE_DESC,
  alternates: { canonical: "/about" },
  openGraph: {
    title: `${PAGE_TITLE} · Sarte Global`,
    description: PAGE_DESC,
    url: "/about",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: `${PAGE_TITLE} · Sarte Global`,
    description: PAGE_DESC,
  },
};

const HERO = {
  icon: "shield" as const,
  eyebrow: "Over ons · Het bureau",
  titleLead: "Een gefocust team dat",
  titleEm: "ambitieus werk levert.",
  intro:
    "Een klein, ervaren team in Nederland — strategie, design en development voor ondernemers en bedrijven die om kwaliteit geven.",
  align: "center" as const,
};

export default function AboutPage() {
  return (
    <main className="about-page" id="top">
      <PageHero content={HERO} id="about-h" />
      <AboutCompany />
      <ImpactStats />
      <Process />
      <TeamShowcase />
      <Testimonials />
      <CallToAction />
    </main>
  );
}
