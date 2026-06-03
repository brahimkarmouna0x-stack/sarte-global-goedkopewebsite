import type {
  LocalBusiness,
  LocalBusinessesSectionContent,
} from "@/types";

export const LOCAL_BUSINESSES_SECTION = {
  eyebrow: "Lokale bedrijven die we helpen",
  titleLead: "De juiste website voor",
  titleEm: "jouw lokale bedrijf.",
  sub: "Niet zeker welke website jij nodig hebt? Zoek hieronder jouw branche — wij weten al wat werkt en bouwen het voor je.",
  loadMoreLabel: "Toon meer branches",
  loadLessLabel: "Toon minder",
} as const satisfies LocalBusinessesSectionContent;

export const LOCAL_BUSINESSES = [
  {
    slug: "barber-shop",
    icon: "scissors",
    title: "Kapperszaak",
    description:
      "Toon diensten, prijzen, openingstijden en je locatie op de kaart — klanten kunnen direct boeken via WhatsApp.",
    badge: "Populair",
    ctaLabel: "Vraag deze website aan",
    projectType: "Website voor kapperszaak",
    image: "https://loremflickr.com/720/480/barbershop,haircut?lock=101",
    imageAlt: "Een moderne kapperszaak met leren stoelen en warme verlichting.",
  },
  {
    slug: "beauty-salon",
    icon: "sparkle",
    title: "Schoonheidssalon",
    description:
      "Een elegante site met behandelingen, voor/na-foto's, online reserveren en cadeaubonnen voor vaste klanten.",
    badge: "Voor lokale groei",
    ctaLabel: "Vraag deze website aan",
    projectType: "Website voor schoonheidssalon",
    image: "https://loremflickr.com/720/480/beautysalon,spa?lock=102",
    imageAlt: "Een lichte, elegante schoonheidssalon met behandelplekken.",
  },
  {
    slug: "mens-clothing",
    icon: "hanger",
    title: "Herenmode",
    description:
      "Een strakke catalogus met nieuwe collecties, maten, adres en bestellen via WhatsApp — gebouwd om lokale klanten binnen te halen.",
    ctaLabel: "Vraag deze website aan",
    projectType: "Website voor herenmodewinkel",
    image: "https://loremflickr.com/720/480/menswear,boutique?lock=103",
    imageAlt: "Een herenmodewinkel met rijen hangende overhemden en jasjes.",
  },
  {
    slug: "bakery",
    icon: "croissant",
    title: "Bakkerij & patisserie",
    description:
      "Een warme site met dagmenu, bestellingen voor taarten op maat, openingstijden en afhaalinformatie — eetlust gegarandeerd.",
    badge: "Starterswebsite",
    ctaLabel: "Vraag deze website aan",
    projectType: "Website voor bakkerij",
    image:
      "https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=720&q=80",
    imageAlt: "Vers ambachtelijk brood en gebak in een bakkerij.",
  },
  {
    slug: "restaurant-cafe",
    icon: "cup",
    title: "Restaurant / Café",
    description:
      "Menu, foto's, reserveringen, Google Maps en WhatsApp voor last-minute tafels. Alles wat een hongerige bezoeker nodig heeft.",
    badge: "Populair",
    ctaLabel: "Vraag deze website aan",
    projectType: "Website voor restaurant of café",
    image: "https://loremflickr.com/720/480/restaurant,cafe?lock=105",
    imageAlt: "Een warm restaurantinterieur met gedekte tafels en sfeerverlichting.",
  },
  {
    slug: "grocery-market",
    icon: "basket",
    title: "Supermarkt / Buurtwinkel",
    description:
      "Toon wekelijkse aanbiedingen, verse aanvoer, bezorgzones en contactgegevens — zodat buren jou vinden voor een keten.",
    ctaLabel: "Vraag deze website aan",
    projectType: "Website voor supermarkt",
    image: "https://loremflickr.com/720/480/grocery,market?lock=106",
    imageAlt: "Een buurtsupermarkt met verse groenten en fruit in de uitstalling.",
  },
  {
    slug: "pharmacy",
    icon: "cross",
    title: "Apotheek",
    description:
      "Openingstijden, recept-aanvragen via WhatsApp, locatie en vertrouwenwekkende info — een rustige, professionele site voor jouw patiënten.",
    ctaLabel: "Vraag deze website aan",
    projectType: "Website voor apotheek",
    image: "https://loremflickr.com/720/480/pharmacy,drugstore?lock=107",
    imageAlt: "Een schone, moderne apotheekbalie met producten in de schappen.",
  },
  {
    slug: "gym",
    icon: "dumbbell",
    title: "Sportschool / Fitness",
    description:
      "Lesrooster, trainersprofielen, abonnementen en gratis proefles-aanmelding — gemaakt om jouw ochtendlessen vol te krijgen.",
    badge: "Voor lokale groei",
    ctaLabel: "Vraag deze website aan",
    projectType: "Website voor sportschool",
    image: "https://loremflickr.com/720/480/gym,fitness?lock=108",
    imageAlt: "Een ruime fitnesszaal met fitnessapparatuur en natuurlijk licht.",
  },
  {
    slug: "flower-shop",
    icon: "flower",
    title: "Bloemenwinkel",
    description:
      "Een mooie galerij met boeketten, bezorgzones, gelegenheidsmenu's (bruiloft, verjaardag, condoleance) en bestellen via WhatsApp.",
    ctaLabel: "Vraag deze website aan",
    projectType: "Website voor bloemenzaak",
    image: "https://loremflickr.com/720/480/florist,flowers?lock=109",
    imageAlt: "Een bloemenwinkel vol met verse boeketten en arrangementen.",
  },
  {
    slug: "auto-repair",
    icon: "wrench",
    title: "Autoreparatiebedrijf",
    description:
      "Diensten, certificeringen, openingstijden, locatie en een snel-offerteformulier. Verdien vertrouwen voordat ze de garage in lopen.",
    ctaLabel: "Vraag deze website aan",
    projectType: "Website voor autoreparatiebedrijf",
    image: "https://loremflickr.com/720/480/garage,automotive?lock=110",
    imageAlt: "Een monteur aan het werk in een garage met auto's op heffers.",
  },
] as const satisfies readonly LocalBusiness[];
