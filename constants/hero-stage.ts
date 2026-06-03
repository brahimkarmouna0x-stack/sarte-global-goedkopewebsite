import type { HeroSlide } from "@/types";

export const HERO_STAGE_INTERVAL_MS = 6200;

export const HERO_STAGE_SLIDES = [
  {
    id: "video-editing",
    label: "Videoproductie",
    title: "Campagneklare beelden en reels",
    description: "Filmische montage voor lanceringen, advertenties en social proof.",
    image:
      "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?auto=format&fit=crop&w=1800&q=88",
    imageAlt:
      "Een professionele video-editing-werkplek met een tijdlijn op het scherm.",
    accent: "#7DD3FC",
  },
  {
    id: "wordpress",
    label: "WordPress",
    title: "Flexibele websites die jij zelf beheert",
    description: "Redactionele layouts, dienstenpagina's en conversiegerichte contentsystemen.",
    image:
      "https://images.unsplash.com/photo-1547658719-da2b51169166?auto=format&fit=crop&w=1800&q=88",
    imageAlt:
      "Een designer beoordeelt een moderne website-interface op een laptopscherm.",
    accent: "#60A5FA",
  },
  {
    id: "product-landing-page",
    label: "Landingspagina",
    title: "Landingspagina's gebouwd om te converteren",
    description: "Scherpe hero-secties, voordelen, social proof, prijzen en duidelijke actiepaden.",
    image:
      "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?auto=format&fit=crop&w=1800&q=88",
    imageAlt:
      "Een responsieve landingspagina, getoond op desktop- en mobiele schermen.",
    accent: "#FBBF24",
  },
  {
    id: "digital-product",
    label: "Digitaal product",
    title: "Funnels voor cursussen, templates en tools",
    description: "Premium pagina's die jouw expertise verpakken en gekwalificeerde verkoop opleveren.",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1800&q=88",
    imageAlt:
      "Een verfijnd analytics-dashboard en een digitale productinterface op een monitor.",
    accent: "#A78BFA",
  },
  {
    id: "ecommerce",
    label: "Webshop",
    title: "Webshops gemaakt om met vertrouwen te kopen",
    description: "Productverhalen, vertrouwenssignalen, checkout-flow en UX voor terugkerende klanten.",
    image:
      "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=1800&q=88",
    imageAlt:
      "Een premium online winkelervaring op een laptop naast verpakte producten.",
    accent: "#34D399",
  },
  {
    id: "saas",
    label: "SaaS",
    title: "SaaS-sites die waarde direct duidelijk maken",
    description: "Positionering, UI-verhalen, featuresecties en demo-gedreven journeys.",
    image:
      "https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=1800&q=88",
    imageAlt:
      "Een productteam bekijkt samen een softwaredashboard en website-interface.",
    accent: "#38BDF8",
  },
  {
    id: "shopify",
    label: "Shopify",
    title: "Merkwebshops met premium afwerking",
    description: "Themes op maat, collectiepagina's, productpagina's en conversiedetails.",
    image:
      "https://images.unsplash.com/photo-1516321497487-e288fb19713f?auto=format&fit=crop&w=1800&q=88",
    imageAlt:
      "Een moderne e-commerce storefront-workflow, geopend op een laptop in een studio.",
    accent: "#86EFAC",
  },
  {
    id: "local-business",
    label: "Lokaal bedrijf",
    title: "Lokale websites die zoekers naar de zaak halen",
    description: "Menu's, reserveringen, kaarten, WhatsApp-knoppen, reviews en vertrouwenspagina's.",
    image:
      "https://images.unsplash.com/photo-1503951914875-452162b0f3f1?auto=format&fit=crop&w=1800&q=88",
    imageAlt:
      "Een professionele kapperszaak met stoelen, spiegels en warme verlichting.",
    accent: "#F97316",
  },
] as const satisfies readonly HeroSlide[];
