import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { ServiceCTA } from "@/components/services/ServiceCTA";
import { ServiceFeatures } from "@/components/services/ServiceFeatures";
import { ServicePageHero } from "@/components/services/ServicePageHero";
import { ServiceProcess } from "@/components/services/ServiceProcess";
import { ServiceRelatedProjects } from "@/components/services/ServiceRelatedProjects";
import { ServiceTech } from "@/components/services/ServiceTech";
import { SERVICES } from "@/constants";

const SITE_URL = "https://groeimetwebdesign.nl";

interface ServicePageProps {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return SERVICES.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({ params }: ServicePageProps): Promise<Metadata> {
  const { slug } = await params;
  const service = SERVICES.find((s) => s.slug === slug);
  if (!service) return {};

  const title = service.name;
  const description = service.tagline;
  const canonical = `/services/${service.slug}`;

  return {
    title,
    description,
    alternates: { canonical },
    keywords: [
      service.name,
      `${service.name} laten maken`,
      `goedkope ${service.name.toLowerCase()}`,
      `${service.name} Nederland`,
      `Sarte Global ${service.name}`,
    ],
    openGraph: {
      title: `${title} · Sarte Global`,
      description,
      url: canonical,
      type: "website",
      images: [{ url: "/images/company-img.png", width: 1200, height: 800, alt: `${title} · Sarte Global` }],
    },
    twitter: {
      card: "summary_large_image",
      title: `${title} · Sarte Global`,
      description,
      images: ["/images/company-img.png"],
    },
  };
}

export default async function ServicePage({ params }: ServicePageProps) {
  const { slug } = await params;
  const service = SERVICES.find((s) => s.slug === slug);
  if (!service) {
    notFound();
    return null;
  }

  const serviceJsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: service.name,
    name: service.name,
    description: service.tagline,
    url: `${SITE_URL}/services/${service.slug}`,
    provider: { "@id": `${SITE_URL}/#organization` },
    areaServed: { "@type": "Country", name: "Netherlands" },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: `${service.name} - aanbod`,
      itemListElement: service.features.map((feature) => ({
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: feature.title,
          description: feature.description,
        },
      })),
    },
  };

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
      { "@type": "ListItem", position: 2, name: "Diensten", item: `${SITE_URL}/services` },
      {
        "@type": "ListItem",
        position: 3,
        name: service.name,
        item: `${SITE_URL}/services/${service.slug}`,
      },
    ],
  };

  return (
    <main className="service-page" id="top">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <ServicePageHero service={service} />
      <ServiceFeatures features={service.features} />
      <ServiceProcess steps={service.process} />
      <ServiceTech techIds={service.techIds} />
      <ServiceRelatedProjects
        categories={service.relatedCategories}
        serviceName={service.name}
      />
      <ServiceCTA copy={service.cta} projectType={service.name} />
    </main>
  );
}
