import type { Article } from "@/types";

export const JOURNAL_SECTION = {
  eyebrow: "Vanuit ons bureau",
  titleLead: "Inzichten",
  titleEm: "van het vak.",
  sub: "Korte essays, frameworks en lessen uit de projecten waar we over mogen vertellen — en een paar waar we het niet over kunnen hebben.",
} as const;

export const JOURNAL_ARTICLES = [
  {
    slug: "zeven-principes-van-merkherkenning",
    tag: "Merk",
    title: "De zeven principes van merkherkenning",
    date: "14 mei 2026",
    readLabel: "Lees verder",
    href: "#",
    artwork: "rings",
    author: "Sarte Global Redactie",
    readMinutes: 6,
    excerpt:
      "Sterke merken worden niet gebouwd met logo's. Ze worden gebouwd met zeven kleine, herhaalbare keuzes — en de meeste bedrijven maken er maar twee bewust.",
    body: [
      "We spraken met de oprichters van twaalf consumentenmerken die klanten bij naam noemen als je vraagt van wie ze echt fan zijn. We verwachtten moodboards. We kregen Excel-spreadsheets.",
      "Het patroon was niet visueel. Het was structureel: een klein aantal keuzes die zich jaar na jaar opstapelden, bewust gemaakt en nooit uitbesteed.",
      { type: "heading", text: "De zeven principes" },
      {
        type: "list",
        items: [
          "Een naam die werkt als hefboom — eenvoudig te spellen, makkelijker te vragen.",
          "Eén visueel handelsmerk dat onverbiddelijk consistent wordt gebruikt.",
          "Een tone of voice die drie jaar nieuwe medewerkers overleeft.",
          "Prijs als positionering, niet als markttest.",
          "Eén ritueel dat de klant in één zin kan beschrijven.",
          "Schaarste in distributie — het merk verdient zijn omvang.",
          "Een oprichtersverhaal dat overeind blijft als de oprichters vertrekken.",
        ],
      },
      "De meeste teams leveren er twee. De merken die je niet vergeet leveren er zes. Het verschil zit niet in budget. Het zit in of de oprichters merk zien als groeiend werk of als marketingkost.",
      "Lees, als je er één leest, principe vier. Prijs is de luidste boodschap die een merk uitzendt — en de makkelijkste om in een verkoopgesprek onderuit te halen.",
    ],
  },
  {
    slug: "waarom-de-meeste-bureausites-falen",
    tag: "Web",
    title: "Waarom de meeste bureausites falen (en wat de onze fout deed)",
    date: "30 april 2026",
    readLabel: "Lees verder",
    href: "#",
    artwork: "lines",
    author: "Sarte Global Redactie",
    readMinutes: 8,
    excerpt:
      "Na een analyse van veertig bureausites — waaronder drie versies van onze eigen — ontstaat een patroon. De meeste bureaus bouwen voor applaus van collega's, niet voor de klant die op zondagavond hun nummer zoekt.",
    body: [
      "De briefing is altijd hetzelfde: \"Maak het premium.\" Het resultaat ook: een hero-animatie, een marquee met klantlogo's en een contactformulier dat niemand invult.",
      "We leverden onze eigen site drie keer opnieuw op in twaalf jaar. Elke keer dachten we het te begrijpen. Elke keer vertelde de data ons zes maanden later iets anders.",
      { type: "heading", text: "Wat een klant écht overtuigt" },
      "De klant zit alleen. Het is 21:00 uur. Hij heeft een screenshot van jouw hero en twee van concurrenten. Hij gaat niet scrollen. Hij gaat zoeken naar de woorden waar zijn CFO naar zal vragen.",
      {
        type: "list",
        items: [
          "Prijsindicatie — zelfs een range schept vertrouwen.",
          "Recent, benoemd werk — alleen logo's volstaat niet.",
          "Proces — niet de stappen, maar de keuzes die jij voor hem maakt.",
          "Een echte persoon die hij kan mailen zonder formulier.",
        ],
      },
      "Onze tweede site had elke motion-design-truc die we konden bedenken en een conversie van 0,6%. Onze huidige site is tekst-first, heeft één hero-animatie en converteert op 3,1%. Premium betekent niet cinematisch — premium betekent zelfvertrouwen.",
    ],
  },
  {
    slug: "ontwerpen-voor-conversie-2026",
    tag: "Groei",
    title: "Ontwerpen voor conversie in 2026",
    date: "18 maart 2026",
    readLabel: "Lees verder",
    href: "#",
    artwork: "curves",
    author: "Sarte Global Redactie",
    readMinutes: 7,
    excerpt:
      "Conversie-design betekende vroeger A/B-testen met knopkleuren. In 2026 betekent het: het juiste de makkelijkste optie maken — en uit de weg gaan.",
    body: [
      "Optimaliseer je nog steeds op clicks? Dan loop je achter. De teams die nu de beste cijfers neerzetten, optimaliseren op beslismomenten — die drie of vier punten in een flow waar de klant zich afvraagt of hij doorgaat.",
      "Die momenten zitten niet altijd bovenaan de funnel. Ze zitten bij de tweede prijsvraag, het onverwachte veld in de checkout, het moment dat de agenda-uitnodiging binnenkomt en de klant beseft dat hij over een kwartier met iemand moet praten.",
      { type: "heading", text: "Drie patronen waar we steeds op terugkomen" },
      {
        type: "list",
        items: [
          "Toon de prijs vóór het formulier, niet erna.",
          "Vul automatisch in wat je al weet.",
          "Laat de klant pauzeren zonder context te verliezen.",
        ],
      },
      "We bouwden de onboarding van een klant rond deze drie regels en zagen activatie in een kwartaal met 28 punten stijgen. De site zag er bijna identiek uit. De beslissingen waar de klant voor stond waren alleen kleiner, en eerder.",
      "Conversie in 2026 lijkt minder op overtuigen en meer op helderheid. De best converterende landingspagina's die we dit jaar opleverden, zijn ook de rustigste.",
    ],
  },
] as const satisfies readonly Article[];
