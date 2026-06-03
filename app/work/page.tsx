import type { Metadata } from "next";

import { PageHero } from "@/components/page/PageHero";
import { ProjectsSection } from "@/components/projects/projects-section";
import { CallToAction } from "@/components/sections/CallToAction";
import { ImpactStats } from "@/components/sections/ImpactStats";
import { Testimonials } from "@/components/sections/Testimonials";

const PAGE_TITLE = "Werk";
const PAGE_DESC =
  "Geselecteerd werk van Sarte Global. Websites, webshops en design voor ondernemers en bedrijven in Nederland en daarbuiten.";

export const metadata: Metadata = {
  title: PAGE_TITLE,
  description: PAGE_DESC,
  alternates: { canonical: "/work" },
  openGraph: {
    title: `${PAGE_TITLE} · Sarte Global`,
    description: PAGE_DESC,
    url: "/work",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: `${PAGE_TITLE} · Sarte Global`,
    description: PAGE_DESC,
  },
};

const HERO = {
  icon: "layers" as const,
  eyebrow: "Werk · Portfolio",
  titleLead: "Geselecteerde projecten",
  titleEm: "waar we trots op zijn.",
  intro:
    "Een verzorgde selectie recente projecten — filter op categorie om het soort werk te zien dat we het meest opleveren.",
  align: "center" as const,
};

export default function WorkPage() {
  return (
    <main className="work-page" id="top">
      <PageHero content={HERO} id="work-h" />
      <ProjectsSection />
      <ImpactStats />
      <Testimonials />
      <CallToAction />
    </main>
  );
}
