import type { Service } from "@/types";

export const SERVICES_SECTION = {
  eyebrow: "Wat we doen",
  titleLead: "Negen diensten.",
  titleEm: "Eén partner.",
  sub: "Van een goedkope website tot complete digitale groei — Sarte Global verzorgt het hele traject, met vaste prijzen en focus op resultaat.",
  footLabel: "Bekijk alle diensten →",
} as const;

export const SERVICE_LINK_LABEL = "Meer informatie →" as const;

export const SERVICES = [
  {
    slug: "web-development",
    number: "01",
    name: "Website laten maken",
    tagline:
      "Professionele en goedkope websites voor ondernemers en bedrijven in Nederland.",
    description:
      "Snelle, veilige en betaalbare websites — gebouwd op Next.js, WordPress of een platform dat past bij jouw bedrijf.",
    href: "/services/web-development",
    icon: "code",
    heroEyebrow: "Dienst · Website laten maken",
    heroTitleLead: "Een professionele website",
    heroTitleEm: "binnen 2 weken.",
    features: [
      {
        title: "Snel & technisch sterk",
        description:
          "Razendsnelle laadtijden, perfecte Core Web Vitals en een solide technische basis voor groei.",
        iconName: "lightning",
      },
      {
        title: "Mobielvriendelijk design",
        description:
          "Elke website werkt vlekkeloos op telefoon, tablet en desktop — zonder concessies.",
        iconName: "layers",
      },
      {
        title: "SEO-klaar",
        description:
          "Vindbaar in Google vanaf dag één: nette structuur, schema markup en sterke metadata.",
        iconName: "search",
      },
      {
        title: "Vaste prijs vooraf",
        description:
          "Geen verrassingen achteraf. Eén heldere offerte en duidelijke planning — zo werken wij.",
        iconName: "gauge",
      },
    ],
    process: [
      { number: "01", title: "Kennismaking", description: "We bespreken jouw bedrijf, doelen en wensen. Daarna ontvang je een vaste offerte." },
      { number: "02", title: "Ontwerp", description: "We ontwerpen jouw website met focus op jouw doelgroep — strak, modern en conversiegericht." },
      { number: "03", title: "Bouw", description: "We bouwen de site, vullen 'm met jouw content en testen alles op snelheid, mobiel en SEO." },
      { number: "04", title: "Lancering", description: "We zetten je website live, regelen hosting en blijven beschikbaar voor onderhoud en updates." },
    ],
    techIds: ["Next.js", "React", "TypeScript", "Node.js", "Tailwind", "PostgreSQL"],
    relatedCategories: ["Landing Page", "SaaS", "WordPress"],
    cta: {
      titleLead: "Klaar voor jouw nieuwe",
      titleEm: "website?",
      sub: "Vertel ons kort over jouw bedrijf. Binnen 24 uur ontvang je een vrijblijvende offerte op maat.",
      primaryLabel: "Offerte aanvragen",
      primaryHref: "mailto:info@goedkopewebsite-latenmaken.nl?subject=Website%20laten%20maken",
      secondaryLabel: "Plan kennismaking",
      secondaryHref: "#cta",
    },
  },
  {
    slug: "ecommerce",
    number: "02",
    name: "Webshop laten maken",
    tagline:
      "Webshops die verkopen — betaalbaar, snel en gebouwd om te converteren.",
    description:
      "Shopify, WooCommerce of maatwerk: een webshop die past bij jouw producten, klanten en groeiplannen.",
    href: "/services/ecommerce",
    icon: "cart",
    heroEyebrow: "Dienst · Webshop laten maken",
    heroTitleLead: "Een webshop die",
    heroTitleEm: "echt verkoopt.",
    features: [
      {
        title: "Conversiegericht ontwerp",
        description:
          "Productpagina's, winkelwagen en checkout ontworpen om bezoekers in klanten om te zetten.",
        iconName: "layers",
      },
      {
        title: "iDEAL & meer",
        description:
          "Alle Nederlandse betaalmethoden: iDEAL, Bancontact, creditcard, Apple Pay en achteraf betalen.",
        iconName: "lightning",
      },
      {
        title: "Beheer zonder gedoe",
        description:
          "Eenvoudig zelf producten, voorraad en bestellingen beheren — zonder technische kennis.",
        iconName: "palette",
      },
      {
        title: "Groeianalyse",
        description:
          "Inzicht in je verkoop, verkeer en conversie via Google Analytics 4 en een helder dashboard.",
        iconName: "chart",
      },
    ],
    process: [
      { number: "01", title: "Analyse", description: "Welke producten, welke klanten en welk platform past het beste? We bepalen samen de strategie." },
      { number: "02", title: "Ontwerp", description: "Een storefront die past bij jouw merk — productpagina's, collecties en checkout op maat." },
      { number: "03", title: "Bouw", description: "We bouwen de webshop, koppelen betalingen, verzending en koppelingen met boekhouding of CRM." },
      { number: "04", title: "Optimaliseren", description: "Na livegang testen we de funnel en optimaliseren we voor meer omzet — niet alleen meer bezoekers." },
    ],
    techIds: ["Next.js", "React", "TypeScript", "Node.js", "PostgreSQL", "Redis"],
    relatedCategories: ["E-Commerce"],
    cta: {
      titleLead: "Maak van bezoekers",
      titleEm: "kopers.",
      sub: "Een professionele webshop met vaste prijs en snelle oplevering — voor ondernemers die willen verkopen.",
      primaryLabel: "Offerte aanvragen",
      primaryHref: "mailto:info@goedkopewebsite-latenmaken.nl?subject=Webshop%20laten%20maken",
      secondaryLabel: "Plan kennismaking",
      secondaryHref: "#cta",
    },
  },
  {
    slug: "landing-page-optimization",
    number: "03",
    name: "Landingspagina laten maken",
    tagline:
      "Krachtige landingspagina's die bezoekers omzetten in leads en klanten.",
    description:
      "Een snelle, conversiegerichte landingspagina voor jouw campagne, dienst of product — gebouwd om te scoren.",
    href: "/services/landing-page-optimization",
    icon: "rocket",
    heroEyebrow: "Dienst · Landingspagina",
    heroTitleLead: "Een landingspagina die",
    heroTitleEm: "verkoopt.",
    features: [
      {
        title: "Conversie-analyse",
        description:
          "We analyseren waar bezoekers afhaken en bouwen een pagina die wel scoort.",
        iconName: "search",
      },
      {
        title: "Sterke koppen & CTA's",
        description:
          "Tekst, koppen en knoppen geschreven vanuit het perspectief van jouw klant.",
        iconName: "spark",
      },
      {
        title: "Snel op mobiel",
        description:
          "Een mobile-first pagina die in seconden laadt — zelfs op een 4G-verbinding.",
        iconName: "lightning",
      },
      {
        title: "A/B testen",
        description:
          "We testen koppen, layouts en CTA's om elke maand meer omzet uit dezelfde bezoekers te halen.",
        iconName: "chart",
      },
    ],
    process: [
      { number: "01", title: "Audit", description: "Wat werkt al, wat niet en welke knoppen of teksten houden conversie tegen?" },
      { number: "02", title: "Strategie", description: "Een lijst met prioritaire wijzigingen, gerangschikt op verwachte impact en inspanning." },
      { number: "03", title: "Bouw", description: "Ontwerp, copy en techniek worden samen opgeleverd — klaar voor verkeer vanaf dag één." },
      { number: "04", title: "Testen & schalen", description: "We testen de belangrijkste elementen en koppelen winnende varianten terug aan ads en e-mail." },
    ],
    techIds: ["Next.js", "TypeScript", "Tailwind", "GA4", "Hotjar", "Stripe"],
    relatedCategories: ["Landing Page", "E-Commerce", "Shopify & Dropshipping"],
    cta: {
      titleLead: "Meer conversie",
      titleEm: "uit jouw campagne?",
      sub: "Stuur ons jouw huidige landingspagina. Binnen 48 uur ontvang je een vrijblijvend verbeterplan.",
      primaryLabel: "Offerte aanvragen",
      primaryHref: "mailto:info@goedkopewebsite-latenmaken.nl?subject=Landingspagina%20laten%20maken",
      secondaryLabel: "Plan kennismaking",
      secondaryHref: "#cta",
    },
  },
  {
    slug: "ui-ux-design",
    number: "04",
    name: "UX / UI design",
    tagline:
      "Interfaces die intuïtief aanvoelen en bezoekers helpen het juiste te doen.",
    description:
      "Doordacht ontwerp gebaseerd op gebruikersonderzoek, gemaakt om te bouwen en gestuurd door data.",
    href: "/services/ui-ux-design",
    icon: "palette",
    heroEyebrow: "Dienst · UX / UI Design",
    heroTitleLead: "Interfaces die",
    heroTitleEm: "moeiteloos werken.",
    features: [
      {
        title: "Gebruikersonderzoek",
        description:
          "We begrijpen jouw bezoekers voordat we ontwerpen — daarom werkt onze UX in de praktijk.",
        iconName: "cursor",
      },
      {
        title: "Design systeem",
        description:
          "Componenten, kleuren en typografie die schaalbaar zijn voor jouw merk en team.",
        iconName: "layers",
      },
      {
        title: "Interactief prototype",
        description:
          "Een klikbare versie van jouw site — test de ervaring voordat we ook maar één regel code schrijven.",
        iconName: "spark",
      },
      {
        title: "Naadloze oplevering",
        description:
          "Figma-bestanden met design tokens die direct in code worden vertaald — geen verlies tussen design en bouw.",
        iconName: "gauge",
      },
    ],
    process: [
      { number: "01", title: "Onderzoek", description: "Interviews, gebruikerstesten en concurrentie-analyse vormen de basis van elke ontwerpkeuze." },
      { number: "02", title: "Architectuur", description: "Sitemaps, journey maps en contentmodel — eerst structuur, dan pixels." },
      { number: "03", title: "Ontwerp", description: "Van wireframe naar high-fidelity ontwerp — zo snel mogelijk in de browser." },
      { number: "04", title: "Oplevering", description: "Componenten geleverd als Figma + productiecode, niet als platte bestanden." },
    ],
    techIds: ["React", "Next.js", "Tailwind", "TypeScript", "Vue", "Sass"],
    relatedCategories: ["Design Tools", "SaaS", "AI"],
    cta: {
      titleLead: "Een ontwerp dat",
      titleEm: "echt converteert?",
      sub: "We koppelen designers en developers vanaf dag één. Minder overdracht, sneller live.",
      primaryLabel: "Offerte aanvragen",
      primaryHref: "mailto:info@goedkopewebsite-latenmaken.nl?subject=UX%2FUI%20Design",
      secondaryLabel: "Plan kennismaking",
      secondaryHref: "#cta",
    },
  },
  {
    slug: "seo",
    number: "05",
    name: "SEO & groei",
    tagline:
      "Technische SEO, content en analyses die jouw site structureel beter laten scoren.",
    description:
      "Een sterke technische basis, content die rankt en analyses die laten zien wat er écht werkt.",
    href: "/services/seo",
    icon: "search",
    heroEyebrow: "Dienst · SEO & groei",
    heroTitleLead: "Organische groei die",
    heroTitleEm: "blijft.",
    features: [
      {
        title: "Technische SEO",
        description:
          "Indexering, schema markup, Core Web Vitals en crawl-budget — netjes geregeld, niet achteraf gerepareerd.",
        iconName: "gauge",
      },
      {
        title: "Sterke content",
        description:
          "Langere artikelen, geschreven door experts — gemaakt om te ranken én gelezen te worden.",
        iconName: "spark",
      },
      {
        title: "Lokale SEO",
        description:
          "Beter vindbaar in jouw regio: Google Bedrijfsprofiel, lokale landingspagina's en reviews.",
        iconName: "layers",
      },
      {
        title: "Rapportages",
        description:
          "Search Console, GA4 en een eigen dashboard dat precies laat zien wat werkt.",
        iconName: "chart",
      },
    ],
    process: [
      { number: "01", title: "Audit", description: "Technische, content- en linkaudit om te zien waar de grootste kansen liggen." },
      { number: "02", title: "Strategie", description: "Een contentplan dat aansluit op zoekvraag én op jouw verkoopdoelen." },
      { number: "03", title: "Uitvoering", description: "Wekelijks nieuwe content, on-page verbeteringen en technische optimalisaties." },
      { number: "04", title: "Meten", description: "Maandelijkse rapportages, gekoppeld aan business-doelen — niet alleen rankings." },
    ],
    techIds: ["Next.js", "TypeScript", "Tailwind", "PostgreSQL", "Node.js"],
    relatedCategories: ["Landing Page", "WordPress"],
    cta: {
      titleLead: "Beter vindbaar in",
      titleEm: "Google?",
      sub: "Technische SEO, content en metingen — alles wat je nodig hebt om jaren door te groeien.",
      primaryLabel: "Offerte aanvragen",
      primaryHref: "mailto:info@goedkopewebsite-latenmaken.nl?subject=SEO%20%26%20Groei",
      secondaryLabel: "Plan kennismaking",
      secondaryHref: "#cta",
    },
  },
  {
    slug: "mobile-development",
    number: "06",
    name: "Mobiele apps",
    tagline:
      "Native en cross-platform apps die op elk toestel premium aanvoelen.",
    description:
      "iOS, Android of cross-platform — apps gebouwd met App Store-kwaliteit en oog voor detail.",
    href: "/services/mobile-development",
    icon: "mobile",
    heroEyebrow: "Dienst · Mobiele apps",
    heroTitleLead: "Apps met",
    heroTitleEm: "premium gevoel.",
    features: [
      {
        title: "Cross-platform",
        description:
          "React Native en Flutter — sneller live op zowel iOS als Android, met één gedeelde codebase.",
        iconName: "layers",
      },
      {
        title: "Native diepgang",
        description:
          "Swift en Kotlin waar performance of native interactie écht het verschil maken.",
        iconName: "spark",
      },
      {
        title: "Release-proces",
        description:
          "Versies, OTA-updates en App Store-publicatie geregeld zonder gedoe.",
        iconName: "rocket",
      },
      {
        title: "Monitoring",
        description:
          "Crash-analytics, performance-tracking en feature flags — al vóór de lancering ingebouwd.",
        iconName: "gauge",
      },
    ],
    process: [
      { number: "01", title: "Strategie", description: "We bepalen samen wat past: cross-platform of native — gebaseerd op jouw doelen en budget." },
      { number: "02", title: "Prototype", description: "Een klikbaar prototype op een echt toestel binnen de eerste twee weken." },
      { number: "03", title: "Bouw", description: "Sprints van twee weken met TestFlight + Play Internal builds bij elke mijlpaal." },
      { number: "04", title: "Lancering", description: "Gefaseerde uitrol, monitoring van crash-vrije sessies en optimalisatie na livegang." },
    ],
    techIds: ["React Native", "Flutter", "Swift", "Kotlin", "TypeScript"],
    relatedCategories: ["Consumer Apps", "Digital Products"],
    cta: {
      titleLead: "Jouw app-idee",
      titleEm: "tot leven brengen?",
      sub: "Van eerste prototype tot een vijfsterren App Store-lancering — wij begeleiden het hele traject.",
      primaryLabel: "Offerte aanvragen",
      primaryHref: "mailto:info@goedkopewebsite-latenmaken.nl?subject=Mobiele%20app",
      secondaryLabel: "Plan kennismaking",
      secondaryHref: "#cta",
    },
  },
  {
    slug: "ai-automation",
    number: "07",
    name: "AI & automatisering",
    tagline:
      "AI-oplossingen en automatiseringen die echt waarde toevoegen aan jouw bedrijf.",
    description:
      "LLM-toepassingen, chatbots en workflow-automatisering — geleverd als product, niet als demo.",
    href: "/services/ai-automation",
    icon: "cpu",
    heroEyebrow: "Dienst · AI & automatisering",
    heroTitleLead: "AI die werkt als",
    heroTitleEm: "echt product.",
    features: [
      {
        title: "LLM-toepassingen",
        description:
          "Slimme zoekfunctie, chatbots en agents — gekoppeld aan jouw eigen data.",
        iconName: "spark",
      },
      {
        title: "Workflow-automatisering",
        description:
          "Vervang handmatig werk door event-gedreven pipelines op serverless infrastructuur.",
        iconName: "lightning",
      },
      {
        title: "Maatwerk modellen",
        description:
          "Fine-tuned classificatie-, ranking- en embedding-modellen, getraind op jouw data.",
        iconName: "cpu",
      },
      {
        title: "Veilig & meetbaar",
        description:
          "Evaluaties, regressietests en guardrails — AI die je in productie durft te zetten.",
        iconName: "shield",
      },
    ],
    process: [
      { number: "01", title: "Audit", description: "We zoeken de workflows waar AI écht waarde toevoegt — en die waar het juist geld kost." },
      { number: "02", title: "Prototype", description: "Een werkend LLM-prototype op jouw eigen data binnen één sprint." },
      { number: "03", title: "Product maken", description: "Prompts, retrieval en evaluaties opgenomen in een service die productie aankan." },
      { number: "04", title: "Monitoren", description: "Dashboards voor kosten, snelheid en kwaliteit — vanaf dag één, niet achteraf." },
    ],
    techIds: ["Python", "OpenAI", "LangChain", "TensorFlow", "PyTorch", "Node.js"],
    relatedCategories: ["AI"],
    cta: {
      titleLead: "Maak AI een",
      titleEm: "voorsprong.",
      sub: "We bouwen productie-AI voor teams die resultaat willen, geen demo's.",
      primaryLabel: "Offerte aanvragen",
      primaryHref: "mailto:info@goedkopewebsite-latenmaken.nl?subject=AI%20%26%20Automatisering",
      secondaryLabel: "Plan kennismaking",
      secondaryHref: "#cta",
    },
  },
  {
    slug: "brand-strategy",
    number: "08",
    name: "Merkstrategie",
    tagline:
      "Positionering, verhaal en identiteit die jouw bedrijf onvergetelijk maken.",
    description:
      "Strategiesessies, naamgeving, verbale identiteit en visueel systeem voor ambitieuze bedrijven.",
    href: "/services/brand-strategy",
    icon: "megaphone",
    heroEyebrow: "Dienst · Merkstrategie",
    heroTitleLead: "Een merk dat je",
    heroTitleEm: "niet vergeet.",
    features: [
      {
        title: "Positionering",
        description:
          "Een scherp, geschreven standpunt dat richting geeft aan elke pagina, pitch en productkeuze.",
        iconName: "cursor",
      },
      {
        title: "Verbale identiteit",
        description:
          "Naamgeving, taglines en tone of voice die door jouw hele team gedragen kunnen worden.",
        iconName: "megaphone",
      },
      {
        title: "Visuele identiteit",
        description:
          "Logo, typografie, kleur en motion — gemaakt om te schalen van billboard tot favicon.",
        iconName: "palette",
      },
      {
        title: "Brand guidelines",
        description:
          "Levende richtlijnen in code en Figma — zodat jouw merk consistent blijft, ook na livegang.",
        iconName: "layers",
      },
    ],
    process: [
      { number: "01", title: "Ontdekking", description: "Interviews met stakeholders en concurrentie-analyse om jouw unieke territorium te vinden." },
      { number: "02", title: "Strategie", description: "Een geschreven positioneringsdocument — doelgroep, belofte, bewijs — waar het hele team achter staat." },
      { number: "03", title: "Identiteit", description: "Verbale en visuele identiteit, ontworpen tegen de strategie — niet tegen trends." },
      { number: "04", title: "Activatie", description: "Richtlijnen, templates en lanceeruitingen zodat het merk vanaf dag één leeft." },
    ],
    techIds: ["Figma", "Notion", "Webflow", "Next.js", "Tailwind"],
    relatedCategories: ["Branding", "Creative Studio", "Landing Page"],
    cta: {
      titleLead: "Klaar voor een merk",
      titleEm: "dat het zware werk doet?",
      sub: "Zes tot tien weken focus. Strategie, identiteit en lanceer-assets — alles bij elkaar.",
      primaryLabel: "Offerte aanvragen",
      primaryHref: "mailto:info@goedkopewebsite-latenmaken.nl?subject=Merkstrategie",
      secondaryLabel: "Plan kennismaking",
      secondaryHref: "#cta",
    },
  },
  {
    slug: "paid-media",
    number: "09",
    name: "Online advertising",
    tagline:
      "Performance marketing ingericht als product — meetbaar, schaalbaar en met focus op ROI.",
    description:
      "Google Ads, Meta Ads en creatieve productie, gekoppeld aan een meetraamwerk dat ROI bewijst.",
    href: "/services/paid-media",
    icon: "chart",
    heroEyebrow: "Dienst · Online advertising",
    heroTitleLead: "Advertenties die",
    heroTitleEm: "écht renderen.",
    features: [
      {
        title: "Kanaalstrategie",
        description:
          "Waar adverteren, wat verwachten en hoe schalen — bepaald door jouw funnel, niet door gemiddelden.",
        iconName: "chart",
      },
      {
        title: "Creatie-motor",
        description:
          "Snelle productie van ad-creatives — statisch, video en UGC — die ad fatigue voorblijven.",
        iconName: "spark",
      },
      {
        title: "Metingen",
        description:
          "Server-side tracking en dashboards die laten zien wat werkt — en wat niet.",
        iconName: "gauge",
      },
      {
        title: "Schalen & optimaliseren",
        description:
          "Wekelijkse testcycli en herverdeling van budget om efficiëntie samen te laten groeien.",
        iconName: "rocket",
      },
    ],
    process: [
      { number: "01", title: "Audit", description: "Funnel-analyse, attributie-check en helder beeld van waar budget weglekt." },
      { number: "02", title: "Inrichting", description: "Accountstructuur, tracking en creatieve briefings — alles klaar voor optimalisatie." },
      { number: "03", title: "Lancering", description: "Campagnes in golven met duidelijke hypotheses — geen 'kijken wat plakt'." },
      { number: "04", title: "Schalen", description: "Wekelijks testen, killen en doorzetten. Maandelijkse business reviews tegen pipeline." },
    ],
    techIds: ["Google Ads", "Meta Ads", "GA4", "Looker", "Segment", "Stripe"],
    relatedCategories: ["E-Commerce", "Landing Page", "SaaS"],
    cta: {
      titleLead: "Adverteren als",
      titleEm: "groeimotor?",
      sub: "Strategie, creatie en metingen — aan elkaar geknoopt zodat elke euro zichzelf terugverdient.",
      primaryLabel: "Offerte aanvragen",
      primaryHref: "mailto:info@goedkopewebsite-latenmaken.nl?subject=Online%20advertising",
      secondaryLabel: "Plan kennismaking",
      secondaryHref: "#cta",
    },
  },
] as const satisfies readonly Service[];
