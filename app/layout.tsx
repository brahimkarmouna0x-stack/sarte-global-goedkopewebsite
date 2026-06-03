import type { Metadata, Viewport } from "next";
import { DM_Sans, Playfair_Display } from "next/font/google";
import dynamic from "next/dynamic";
import type { ReactNode } from "react";

import { WhatsAppFloatingButton } from "@/components/contact/WhatsAppFloatingButton";
import { CookieBar } from "@/components/ui/CookieBar";
import { Footer } from "@/components/layouts/Footer";
import { Navigation } from "@/components/layouts/Navigation";
import { ArticleDialogProvider } from "@/contexts/ArticleDialogContext";
import { ContactDialogProvider } from "@/contexts/ContactDialogContext";
import { SITE } from "@/constants";

import "./globals.css";

const ContactDialog = dynamic(
  () => import("@/components/contact/ContactDialog").then((m) => m.ContactDialog),
);

const ArticleDialog = dynamic(
  () => import("@/components/journal/ArticleDialog").then((m) => m.ArticleDialog),
);

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  weight: ["400", "600", "700", "800"],
  style: ["normal", "italic"],
  display: "swap",
  preload: true,
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
  weight: ["400", "500", "600", "700"],
  display: "swap",
  preload: true,
});

const SITE_URL = "goedkopewebsite-latenmaken.nl";
const SITE_NAME = "Sarte Global";
const SERVICE_NAME = "Goedkopewebsitelatenmaken";
const CONTACT_EMAIL = "info@goedkopewebsite-latenmaken.nl";
// TODO: vervang door definitief Nederlands telefoonnummer
const CONTACT_PHONE = "+31 00 000 0000";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: SITE.title,
    template: "%s · Sarte Global",
  },
  description: SITE.description,
  applicationName: SITE_NAME,
  authors: [{ name: SITE_NAME, url: SITE_URL }],
  creator: SITE_NAME,
  publisher: SITE_NAME,
  category: "Webdesign & Webdevelopment",
  keywords: [
    "goedkopewebsitelatenmaken",
    "website-latenmaken",
    "goedkopewebsite",
    "webdesigner Nederland",
    "webdesign MKB",
    "webdesign ondernemers",
    "webshop latenmaken",
    "landingspagina latenmaken",
    "WordPress website-latenmaken",
    "Next.js website",
    "SEO website Nederland",
    "betaalbare website",
    "professionele website-latenmaken",
    "Sarte Global",
  ],
  alternates: {
    canonical: SITE_URL,
  },
  openGraph: {
    type: "website",
    url: SITE_URL,
    siteName: SITE_NAME,
    title: SITE.title,
    description: SITE.description,
    locale: "nl_NL",
    images: [
      {
        url: "/images/company-img.png",
        width: 1200,
        height: 800,
        alt: "Sarte Global — Goedkopewebsitelatenmaken",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: SITE.title,
    description: SITE.description,
    images: ["/images/company-img.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  manifest: "/site.webmanifest",
  icons: {
    icon: [
      { url: "/favicon/favicon.ico?v=3", sizes: "any" },
      { url: "/favicon/favicon-16x16.png?v=3", type: "image/png", sizes: "16x16" },
      { url: "/favicon/favicon-32x32.png?v=3", type: "image/png", sizes: "32x32" },
      { url: "/favicon/favicon-48x48.png?v=3", type: "image/png", sizes: "48x48" },
      { url: "/favicon/android-chrome-192x192.png?v=3", type: "image/png", sizes: "192x192" },
      { url: "/favicon/android-chrome-512x512.png?v=3", type: "image/png", sizes: "512x512" },
    ],
    shortcut: ["/favicon/favicon.ico?v=3"],
    apple: [
      { url: "/favicon/apple-touch-icon-152x152.png?v=3", type: "image/png", sizes: "152x152" },
      { url: "/favicon/apple-touch-icon-167x167.png?v=3", type: "image/png", sizes: "167x167" },
      { url: "/favicon/apple-touch-icon.png?v=3", type: "image/png", sizes: "180x180" },
    ],
    other: [
      {
        rel: "mask-icon",
        url: "/favicon/safari-pinned-tab.svg?v=3",
        color: "#C8A848",
      },
    ],
  },
  other: {
    "msapplication-TileColor": SITE.themeColor,
    "msapplication-TileImage": "/favicon/mstile-144x144.png?v=3",
    "msapplication-config": "/browserconfig.xml",
  },
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
};

export const viewport: Viewport = {
  themeColor: SITE.themeColor,
  width: "device-width",
  initialScale: 1,
  colorScheme: "dark",
};

interface RootLayoutProps {
  readonly children: ReactNode;
}

const ORGANIZATION_JSON_LD = {
  "@context": "https://schema.org",
  "@type": ["Organization", "ProfessionalService"],
  "@id": `${SITE_URL}/#organization`,
  name: SITE_NAME,
  alternateName: ["Sarte Global", "Goedkopewebsitelatenmaken"],
  legalName: SITE_NAME,
  url: SITE_URL,
  logo: `${SITE_URL}/images/company-img.png`,
  image: `${SITE_URL}/images/company-img.png`,
  description:
    "Sarte Global maakt goedkope, professionele websites voor ondernemers en bedrijven in Nederland. Vaste prijs, snelle oplevering en focus op resultaat.",
  slogan: "Professionele en betaalbare websites voor bedrijven en ondernemers in Nederland.",
  priceRange: "€€",
  sameAs: [
    "https://linkedin.com/company/sarteglobal",
    "https://twitter.com/sarteglobal",
    "https://instagram.com/sarteglobal",
  ],
  knowsAbout: [
    "Goedkopewebsitelatenmaken",
    "Website-latenmaken",
    "Webshop latenmaken",
    "Landingspagina latenmaken",
    "SEO",
    "Webhosting",
    "Online marketing",
    "AI oplossingen",
  ],
  areaServed: {
    "@type": "Country",
    name: "Netherlands",
  },
  address: {
    "@type": "PostalAddress",
    addressCountry: "NL",
    // TODO: vul echte vestigingsgegevens aan (straat, postcode, plaats)
  },
  contactPoint: [
    {
      "@type": "ContactPoint",
      contactType: "customer support",
      email: CONTACT_EMAIL,
      telephone: CONTACT_PHONE,
      availableLanguage: ["Dutch", "English"],
      areaServed: "NL",
    },
    {
      "@type": "ContactPoint",
      contactType: "sales",
      email: CONTACT_EMAIL,
      telephone: CONTACT_PHONE,
      availableLanguage: ["Dutch", "English"],
      areaServed: "NL",
    },
  ],
};

const SERVICE_JSON_LD = {
  "@context": "https://schema.org",
  "@type": "Service",
  "@id": `${SITE_URL}/#service-website-laten-maken`,
  name: SERVICE_NAME,
  serviceType: "Website-latenmaken",
  provider: { "@id": `${SITE_URL}/#organization` },
  areaServed: {
    "@type": "Country",
    name: "Netherlands",
  },
  description:
    "Goedkopewebsitelatenmaken voor ondernemers en bedrijven in Nederland. Professionele websites met vaste prijs, snelle oplevering en focus op conversie.",
  offers: {
    "@type": "AggregateOffer",
    priceCurrency: "EUR",
    lowPrice: "499",
    availability: "https://schema.org/InStock",
  },
};

const WEBSITE_JSON_LD = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${SITE_URL}/#website`,
  name: SITE_NAME,
  alternateName: "Goedkopewebsitelatenmaken",
  url: SITE_URL,
  publisher: { "@id": `${SITE_URL}/#organization` },
  inLanguage: "nl-NL",
};

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="nl" className={`${playfair.variable} ${dmSans.variable}`}>
      <head>
        <link rel="preconnect" href="https://images.unsplash.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://images.unsplash.com" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(ORGANIZATION_JSON_LD),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(SERVICE_JSON_LD),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(WEBSITE_JSON_LD),
          }}
        />
      </head>
      <body suppressHydrationWarning>
        <a href="#top" className="sr-only focus:not-sr-only">
          Direct naar inhoud
        </a>
        <ContactDialogProvider>
          <ArticleDialogProvider>
            <Navigation />
            {children}
            <Footer />
            <CookieBar />
            <WhatsAppFloatingButton />
            <ContactDialog />
            <ArticleDialog />
          </ArticleDialogProvider>
        </ContactDialogProvider>
      </body>
    </html>
  );
}
