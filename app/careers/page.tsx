import type { Metadata } from "next";

import { CareersHiring } from "@/components/careers/CareersHiring";
import { CareersRoles } from "@/components/careers/CareersRoles";
import { CareersValues } from "@/components/careers/CareersValues";
import { PageHero } from "@/components/page/PageHero";
import { CallToAction } from "@/components/sections/CallToAction";
import { TeamShowcase } from "@/components/sections/TeamShowcase";
import { CAREERS_HERO } from "@/constants/careers";

const PAGE_TITLE = "Vacatures";
const PAGE_DESC =
  "Werk bij Sarte Global. Remote-first, kleine teams met volledige eigenaarschap. Bekijk onze openstaande vacatures en hoe we werken.";

export const metadata: Metadata = {
  title: PAGE_TITLE,
  description: PAGE_DESC,
  alternates: { canonical: "/careers" },
  openGraph: {
    title: `${PAGE_TITLE} · Sarte Global`,
    description: PAGE_DESC,
    url: "/careers",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: `${PAGE_TITLE} · Sarte Global`,
    description: PAGE_DESC,
  },
};

export default function CareersPage() {
  return (
    <main className="careers-page" id="top">
      <PageHero content={CAREERS_HERO} id="careers-h" />
      <CareersValues />
      <TeamShowcase />
      <CareersRoles />
      <CareersHiring />
      <CallToAction />
    </main>
  );
}
