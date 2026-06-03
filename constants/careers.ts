import type { CareerRole, CareerValue, HiringStep, PageHeroContent } from "@/types";

export const CAREERS_HERO: PageHeroContent = {
  icon: "spark",
  eyebrow: "Vacatures · Werk bij Sarte Global",
  titleLead: "Bouw aan websites die",
  titleEm: "écht impact maken.",
  intro:
    "We zijn een klein, ervaren team dat ambitieus werk levert voor ambitieuze klanten. Klinkt dat als de lat waar jij jezelf langs wilt leggen? Dan praten we graag.",
};

export const CAREERS_VALUES_SECTION = {
  eyebrow: "Hoe we werken",
  titleLead: "Vijf dingen die we",
  titleEm: "écht menen.",
  sub: "We zeggen wat we bedoelen, schrijven het op en nemen mensen aan die hetzelfde doen. Voelt iets niet kloppen? Dan zijn we waarschijnlijk niet de juiste match.",
} as const;

export const CAREERS_VALUES: readonly CareerValue[] = [
  {
    icon: "spark",
    title: "Vakmanschap boven snelheid",
    description:
      "Liever in week zes het juiste opleveren dan in week twee het verkeerde. Kwaliteit verdient zichzelf terug.",
  },
  {
    icon: "layers",
    title: "Kleine teams, volledige eigenaarschap",
    description:
      "Twee tot vier mensen dragen een project van eerste schets tot live-cijfers.",
  },
  {
    icon: "cursor",
    title: "Eerst schrijven, dan bouwen",
    description:
      "Elk project start met een korte schriftelijke briefing. Kan je het niet opschrijven? Dan begrijp je het nog niet.",
  },
  {
    icon: "shield",
    title: "Vertrouwen als basis",
    description:
      "Geen micromanagement, geen uren bijhouden. We nemen mensen aan die we vertrouwen en geven ze ruimte om hun werk te doen.",
  },
  {
    icon: "rocket",
    title: "Remote-first, met respect voor tijd",
    description:
      "Werk vanaf overal. We plannen bewuste overlap, schrijven dingen op en respecteren elkaars focus.",
  },
  {
    icon: "chart",
    title: "Resultaat, geen schijn",
    description:
      "We meten succes aan wat live ging, wat werkte en wat we leerden — niet aan gewerkte uren.",
  },
];

export const CAREERS_HIRING_SECTION = {
  eyebrow: "Sollicitatieproces",
  titleLead: "Een kort, eerlijk",
  titleEm: "sollicitatieproces.",
  sub: "Vier stappen, ongeveer drie weken in totaal. We respecteren jouw tijd en laten je in elke stap weten waar je staat.",
} as const;

export const CAREERS_HIRING_STEPS: readonly HiringStep[] = [
  {
    number: "01",
    title: "Kennismakingsgesprek",
    description:
      "Een gesprek van 30 minuten met een oprichter. Wij vertellen wat we doen, jij vertelt wat je zoekt — en samen kijken we of er voldoende overlap is.",
  },
  {
    number: "02",
    title: "Portfolio-presentatie",
    description:
      "60 minuten waarin je ons drie projecten laat zien waar je trots op bent — wat je deed, wat je nu anders zou doen en wat het team ervan leerde.",
  },
  {
    number: "03",
    title: "Betaalde proefdag",
    description:
      "Eén echte dag aan een echt project, tegen jouw dagtarief. Jij ontmoet het team waarmee je écht zou werken — en wij zien hoe we samenwerken.",
  },
  {
    number: "04",
    title: "Aanbod & referenties",
    description:
      "Binnen 48 uur na de proefdag ontvang je een schriftelijk aanbod. Parallel bellen we twee referenties van jouw keuze — geen verrassingen.",
  },
];

export const CAREERS_ROLES_SECTION = {
  eyebrow: "Openstaande vacatures",
  titleLead: "Waar we nu",
  titleEm: "naar zoeken.",
  sub: "We werven bewust. Zie je geen passende rol? Stuur ons toch een berichtje — we houden goede mensen warm voor wanneer het juiste project langskomt.",
  emptyState:
    "Op dit moment geen openstaande vacatures — maar we ontmoeten altijd graag getalenteerde mensen. Mail ons jouw portfolio en we houden je in gedachten.",
  generalApplyEmail: "info@goedkopewebsite-latenmaken.nl",
} as const;

export const CAREERS_ROLES: readonly CareerRole[] = [
  {
    id: "senior-product-designer",
    title: "Senior Product Designer",
    team: "Design",
    location: "Remote · Nederland",
    type: "Fulltime",
    summary:
      "Verantwoordelijk voor het ontwerp van onderzoek tot live pixels, op twee à drie projecten tegelijk. Je werkt in Figma en hebt een mening over hoe het in code wordt opgeleverd.",
    applyEmail: "info@goedkopewebsite-latenmaken.nl",
  },
  {
    id: "senior-fullstack-engineer",
    title: "Senior Full-Stack Developer",
    team: "Development",
    location: "Remote · Nederland",
    type: "Fulltime",
    summary:
      "Next.js, TypeScript, Postgres. Je schrijft code waar andere developers van willen leren en geeft net zoveel om het datamodel als om de hover-state.",
    applyEmail: "info@goedkopewebsite-latenmaken.nl",
  },
  {
    id: "growth-strategist",
    title: "Growth Strategist",
    team: "Strategie",
    location: "Remote · Nederland",
    type: "Fulltime",
    summary:
      "Leidt strategie voor SEO, content en analytics. Je houdt 's ochtends een gesprek met een CMO en schrijft 's middags de funnel-analyse.",
    applyEmail: "info@goedkopewebsite-latenmaken.nl",
  },
];
