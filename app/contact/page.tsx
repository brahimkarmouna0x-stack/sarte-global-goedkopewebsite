import type { Metadata } from "next";

import { ContactChannels } from "@/components/contact/ContactChannels";
import { ContactPageBody } from "@/components/contact/ContactPageBody";
import { PageHero } from "@/components/page/PageHero";
import { CONTACT_HERO } from "@/constants/contact-page";

const PAGE_TITLE = "Contact";
const PAGE_DESC =
  "Neem contact op met Sarte Global voor een goedkope website laten maken. E-mail, telefoon of WhatsApp — we reageren binnen één werkdag.";

export const metadata: Metadata = {
  title: PAGE_TITLE,
  description: PAGE_DESC,
  alternates: { canonical: "/contact" },
  openGraph: {
    title: `${PAGE_TITLE} · Sarte Global`,
    description: PAGE_DESC,
    url: "/contact",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: `${PAGE_TITLE} · Sarte Global`,
    description: PAGE_DESC,
  },
};

const SITE_URL = "https://goedkopewebsite-latenmaken.nl";

const CONTACT_JSON_LD = {
  "@context": "https://schema.org",
  "@type": "ContactPage",
  url: `${SITE_URL}/contact`,
  name: "Contact · Sarte Global",
  description: PAGE_DESC,
  mainEntity: {
    "@type": "Organization",
    name: "Sarte Global",
    email: "info@goedkopewebsite-latenmaken.nl",
    // TODO: vervang door definitief Nederlands telefoonnummer
    telephone: "+31-00-000-0000",
    address: {
      "@type": "PostalAddress",
      // TODO: vul echte vestigingsgegevens in
      streetAddress: "",
      addressLocality: "",
      postalCode: "",
      addressCountry: "NL",
    },
  },
};

export default function ContactPage() {
  return (
    <main className="contact-page" id="top">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(CONTACT_JSON_LD) }}
      />
      <PageHero content={CONTACT_HERO} id="contact-h" />
      <ContactChannels />
      <ContactPageBody />
    </main>
  );
}
