import type {
  FooterColumn,
  HeroContent,
  NavLink,
  SiteMeta,
  SocialLink
} from "@/types";

export const SITE = {
  title: "Goedkopewebsitelatenmaken | Professionele Websites - Sarte Global",
  description:
    "Goedkopewebsitelatenmaken bouwt professionele en betaalbare websites voor ondernemers en bedrijven in Nederland. Snelle oplevering en vaste prijzen door Sarte Global.",
  themeColor: "#0D0D0D",
  brandName: "SARTE GLOBAL",
  brandAccent: ".",
} as const satisfies SiteMeta;

export const TRUST_LINE =
  "Goedkopewebsitelatenmaken is een dienst van Sarte Global." as const;

export const NAV_LINKS = [
  { label: "Laten maken", href: "/" },
  { label: "Diensten", href: "#services" },
  { label: "Werk", href: "#work" },
  { label: "Proces", href: "#process" },
  { label: "Over ons", href: "#about" },
  { label: "Team", href: "#team" },
  { label: "Journal", href: "#journal" },
] as const satisfies readonly NavLink[];

export const NAV_CTA = {
  label: "Offerte aanvragen",
  href: "#cta",
} as const;

export const HERO = {
  eyebrow: "Sarte Global",
  title: [
    {
      words: [
        { text: "Goedkopewebsitelatenmaken", italicAccent: true },
      ],
    },
  ],
  subtitle:
    "Professionele en betaalbare websites voor bedrijven en ondernemers in Nederland. Vaste prijs vooraf, snelle oplevering en focus op resultaat.",
  primaryCta: { label: "Website laten maken", href: "#cta" },
  secondaryCta: { label: "Bekijk portfolio", href: "/work" },
  stats: [
    { label: "Vaste prijs vooraf" },
    { label: "Binnen 2 weken online" },
    { label: "Voor MKB & ondernemers" },
  ],
  scrollLabel: "Scroll",
  badgeText:
    "GOEDKOPEWEBSITELATENMAKEN · SARTE GLOBAL · GOEDKOPEWEBSITELATENMAKEN · SARTE GLOBAL · ",
} as const satisfies HeroContent;

export const TRUSTED_LABEL = "Vertrouwd door Nederlandse ondernemers" as const;

export const TRUSTED_BRANDS = [
  "Meridian",
  "Volta",
  "Claros",
  "Orbis",
  "Fenix",
  "Stratum",
  "Kova",
  "Helion",
] as const satisfies readonly string[];

export const CTA_SECTION = {
  titleLead: "Laat jouw website",
  titleEm: "vandaag starten.",
  sub: "Plan een gratis kennismaking van 30 minuten — geen verplichtingen, gewoon een open gesprek over jouw website en doelen.",
  ctaLabel: "Neem contact op",
  ctaHref: "mailto:info@goedkopewebsite-latenmaken.nl",
} as const;

export const FOOTER_MISSION =
  "Goedkope, professionele websites voor ondernemers en bedrijven in Nederland. Een dienst van Sarte Global — gebouwd voor groei en gemaakt om te verkopen." as const;

export const FOOTER_COLUMNS = [
  {
    title: "Diensten",
    links: [
      { label: "Website laten maken", href: "/services/web-development" },
      { label: "Webshop laten maken", href: "/services/ecommerce" },
      { label: "Landingspagina", href: "/services/landing-page-optimization" },
      { label: "UX / UI design", href: "/services/ui-ux-design" },
      { label: "SEO & content", href: "/services/seo" },
    ],
  },
  {
    title: "Bedrijf",
    links: [
      { label: "Over ons", href: "/about" },
      { label: "Werk", href: "/work" },
      { label: "Journal", href: "/journal" },
      { label: "Vacatures", href: "/careers" },
      { label: "Contact", href: "/contact" },
    ],
  },
] as const satisfies readonly FooterColumn[];

export const NEWSLETTER = {
  title: "De Nieuwsbrief",
  description:
    "Eén beknopte e-mail per maand. Praktische tips over websites, SEO en online groei voor ondernemers.",
  placeholder: "jij@bedrijf.nl",
  buttonLabel: "Inschrijven",
  defaultNote: "Geen spam. Op elk moment uitschrijven.",
  errorNote: "Voer een geldig e-mailadres in.",
  successNote: "Bedankt! Je ontvangt binnenkort onze eerste e-mail.",
} as const;

export const FOOTER_LEGAL = {
  copyright: "© 2025 Sarte Global",
  links: [
    { label: "Privacy", href: "/privacy" },
    { label: "Voorwaarden", href: "/terms" },
    { label: "Cookies", href: "/cookies" },
  ],
} as const;

export const PAYMENT_METHODS_LABEL = "Wij accepteren" as const;

export const PAYMENT_METHODS = [
  { id: "ideal", label: "iDEAL", color: "#CC0066" },
  { id: "visa", label: "Visa", color: "#1A1F71" },
  { id: "mastercard", label: "Mastercard", color: "#EB001B" },
  { id: "paypal", label: "PayPal", color: "#00457C" },
  { id: "stripe", label: "Stripe", color: "#635BFF" },
] as const;

export type PaymentMethodId = (typeof PAYMENT_METHODS)[number]["id"];

export const SOCIAL_LINKS = [
  { label: "LinkedIn", href: "#", icon: "linkedin" },
  { label: "X", href: "#", icon: "x" },
  { label: "Dribbble", href: "#", icon: "dribbble" },
  { label: "Instagram", href: "#", icon: "instagram" },
] as const satisfies readonly SocialLink[];

export const COOKIE_COPY = {
  message:
    "We gebruiken een klein aantal cookies om verkeer te begrijpen en deze website te verbeteren.",
  policyLabel: "Lees onze cookieverklaring",
  policyHref: "/cookies",
  declineLabel: "Weigeren",
  acceptLabel: "Accepteren",
  storageKey: "sarte_cookies",
  delayMs: 1200,
} as const;

export * from "./about";
export * from "./journal";
export * from "./services";
export * from "./team";
export * from "./testimonials";
export * from "./work";
export * from "./process";
export * from "./impact";
export * from "./technologies";
export * from "./hero-projects";
export * from "./hero-stage";
export * from "./local-businesses";
