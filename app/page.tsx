import type { Metadata } from "next";

import { AboutCompany } from "@/components/sections/AboutCompany";
import { CallToAction } from "@/components/sections/CallToAction";
import { Hero } from "@/components/sections/Hero";
import { ImpactStats } from "@/components/sections/ImpactStats";
import { Journal } from "@/components/sections/Journal";
import { LocalBusinesses } from "@/components/sections/LocalBusinesses";
import { ProjectsSection } from "@/components/projects/projects-section";
import { Process } from "@/components/sections/Process";
import { Services } from "@/components/sections/Services";
import { TeamShowcase } from "@/components/sections/TeamShowcase";
import { TechStack } from "@/components/sections/TechStack";
import { Testimonials } from "@/components/sections/Testimonials";
import { TrustedMarquee } from "@/components/sections/TrustedMarquee";

export const metadata: Metadata = {
  alternates: { canonical: "/" },
};

const SITE_URL = "https://goedkopewebsite-latenmaken.nl";

const HOMEPAGE_JSON_LD = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "@id": `${SITE_URL}/#service`,
  name: "Sarte Global — Goedkopewebsitelatenmaken",
  url: SITE_URL,
  description:
    "Goedkopewebsitelatenmaken bouwt professionele en betaalbare websites voor ondernemers en bedrijven in Nederland. Snelle oplevering en vaste prijzen door Sarte Global.",
  priceRange: "€€",
  areaServed: {
    "@type": "Country",
    name: "Netherlands",
  },
  serviceType: [
    "Website laten maken",
    "Webshop laten maken",
    "Landingspagina laten maken",
    "UX / UI design",
    "SEO & groei",
    "Online advertising",
  ],
  parentOrganization: { "@id": `${SITE_URL}/#organization` },
};

export default function HomePage() {
  return (
    <main id="top">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(HOMEPAGE_JSON_LD) }}
      />
      <Hero />
      <TrustedMarquee />
      <AboutCompany />
      <Services />
      <LocalBusinesses />
      <TechStack />
      <ProjectsSection />
      <Process />
      <ImpactStats />
      <Testimonials />
      <TeamShowcase />
      <Journal />
      <CallToAction />
    </main>
  );
}
