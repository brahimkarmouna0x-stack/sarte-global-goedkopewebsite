import type { AboutCompanyContent } from "@/types";

export const ABOUT_COMPANY = {
  eyebrow: "Over Sarte Global",
  brand: "Sarte Global",
  titleLead: "is het bureau achter",
  titleEm: "goedkope websites",
  titleTail: "die écht resultaat opleveren.",
  mediaImage: "/images/company-img.png",
  mediaAlt:
    "Binnen bij Sarte Global — onze werkplek waar goedkope websites worden gebouwd voor ondernemers en bedrijven in Nederland.",
  mediaCaption: "Sarte Global · Nederland",
  lead:
    "Sarte Global is het bureau achter goedkopewebsite-latenmaken.nl. We bouwen professionele en betaalbare websites voor ondernemers en bedrijven in Nederland, met een focus op snelle oplevering, vaste prijzen en meetbare resultaten.",
  paragraphs: [
    "Sarte Global is opgericht met één duidelijk doel: elke Nederlandse ondernemer een professionele website geven zonder de torenhoge prijzen van traditionele bureaus. Onze ervaren designers en developers werken vanaf dag één samen — geen overdrachten, geen verborgen kosten, alleen werk dat live gaat.",
    "Naast websites bouwt Sarte Global webshops, landingspagina's en complete digitale groeitrajecten — denk aan SEO, online marketing, AI-oplossingen en hosting. Eén partner voor jouw digitale aanwezigheid, gegroeid mee met jouw bedrijf.",
  ],
  pillars: [
    {
      title: "Alleen senior specialisten",
      description:
        "Elk project bij Sarte Global wordt geleid door ervaren designers, developers en strategen — niet door juniors die op jouw kosten leren.",
    },
    {
      title: "Eén team voor alles",
      description:
        "Bij Sarte Global zitten strategie, design en development in hetzelfde team. Sneller schakelen, minder verlies tussen disciplines.",
    },
    {
      title: "Resultaat boven uren",
      description:
        "We sturen op omzet, conversie en groei — niet op opgeleverde uren of bestanden.",
    },
    {
      title: "Vaste prijs vooraf",
      description:
        "Voor we beginnen weet je precies wat je betaalt en wanneer jouw site live staat. Geen verrassingen achteraf.",
    },
  ],
  metrics: [
    { value: "150+", label: "Projecten opgeleverd" },
    { value: "98%", label: "Tevreden klanten" },
    { value: "2 wk", label: "Gemiddelde oplevertijd" },
    { value: "NL", label: "Gevestigd in Nederland" },
  ],
  badge: "SARTE GLOBAL · GOEDKOPE WEBSITE LATEN MAKEN · NEDERLAND",
  ctaLabel: "Plan kennismaking",
  ctaHref: "#cta",
  secondaryLabel: "Lees ons verhaal",
  secondaryHref: "/about",
} as const satisfies AboutCompanyContent;
