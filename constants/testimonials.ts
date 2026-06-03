import type { Testimonial } from "@/types";

const avatar = (gender: "men" | "women", id: number): string =>
  `https://randomuser.me/api/portraits/${gender}/${id}.jpg`;

export const TESTIMONIALS_SECTION = {
  heading: "Google reviews",
  rating: "4,9",
  basedOn: "Gebaseerd op 2.400+ reviews",
  verifiedLabel: "Geverifieerde klanten",
} as const;

export const TESTIMONIALS: readonly Testimonial[] = [
  {
    name: "Sanne van der Berg",
    time: "2 weken geleden",
    rating: 5,
    content:
      "Sarte Global heeft onze nieuwe website opgeleverd en de investeerders waren onder de indruk. Heldere strategie, vakwerk en op tijd live. Zeker een aanrader.",
    image: avatar("women", 25),
  },
  {
    name: "Jeroen de Vries",
    time: "1 maand geleden",
    rating: 5,
    content:
      "We wisten niet precies wat we nodig hadden en kregen een compleet merksysteem en een plan dat na twee jaar nog steeds rendeert. Een van de beste bureaus waar we mee gewerkt hebben.",
    image: avatar("men", 11),
  },
  {
    name: "Anna Kowalski",
    time: "1 maand geleden",
    rating: 5,
    content:
      "Sarte heeft onze rommelige productpositionering omgezet in een verhaal dat het hele team kan vertellen. Onze inbound leads verdubbelden in het eerste kwartaal na livegang.",
    image: avatar("women", 32),
  },
  {
    name: "Marcus Bauer",
    time: "2 maanden geleden",
    rating: 5,
    content:
      "De designkwaliteit is uitzonderlijk, maar wat me het meest verraste was het strategisch denkwerk. Ze duwden onze briefing op de juiste manieren terug.",
    image: avatar("men", 14),
  },
  {
    name: "Priya Sharma",
    time: "2 maanden geleden",
    rating: 5,
    content:
      "Ingehuurd voor een website-update, kregen er een merk-definiërend moment bij. Elke euro waard — en meer.",
    image: avatar("women", 8),
  },
  {
    name: "Daniël de Boer",
    time: "3 maanden geleden",
    rating: 5,
    content:
      "Beste samenwerking in tien jaar bureauwerk. Senior team aan tafel, geen waterval, geen junior accountmanagers. Echte partners.",
    image: avatar("men", 28),
  },
  {
    name: "Emma Wilson",
    time: "3 maanden geleden",
    rating: 5,
    content:
      "Sarte Global is dat zeldzame bureau dat zowel prachtig werk als meetbare groei levert. Conversie is met 41% gestegen sinds livegang en blijft groeien.",
    image: avatar("women", 44),
  },
  {
    name: "Yusuf Aslan",
    time: "3 maanden geleden",
    rating: 5,
    content:
      "Echt samenwerken — ze hielpen mee in onze boardroom-voorbereiding en het investeerdersverhaal. Dat alleen al verdiende de hele opdracht terug.",
    image: avatar("men", 5),
  },
  {
    name: "Sophie Laurent",
    time: "4 maanden geleden",
    rating: 5,
    content:
      "Aanrader. Slim, snel en ze obsederen op de kleine details die andere bureaus overslaan. Dat zie je terug in elke pixel.",
    image: avatar("women", 17),
  },
  {
    name: "Carlos Mendoza",
    time: "4 maanden geleden",
    rating: 5,
    content:
      "Onze rebrand met Sarte tilde ons van startup-uitstraling naar marktleider-niveau. De voor/na vergelijking blijft me elke keer verbazen.",
    image: avatar("men", 36),
  },
  {
    name: "Hiroshi Tanaka",
    time: "5 maanden geleden",
    rating: 5,
    content:
      "Strategisch denkwerk én vakmanschap. De meeste bureaus doen er één goed. Sarte doet beide op hoog niveau. Het hele proces voelde verrassend volwassen.",
    image: avatar("men", 51),
  },
  {
    name: "Olivia Brown",
    time: "5 maanden geleden",
    rating: 5,
    content:
      "Daarvoor met drie andere bureaus gewerkt. Geen vergelijking. Direct, met een duidelijke mening en het werk spreekt voor zich. Vertrouwen verdiend in no time.",
    image: avatar("women", 19),
  },
  {
    name: "Henrik Sørensen",
    time: "6 maanden geleden",
    rating: 5,
    content:
      "Op tijd, binnen scope, en de campagne haalde de KPI's al in de eerste week. Scherp team om mee te werken, van kickoff tot oplevering.",
    image: avatar("men", 65),
  },
  {
    name: "Isabella Costa",
    time: "6 maanden geleden",
    rating: 5,
    content:
      "LinkedIn-engagement en organisch verkeer schoten omhoog na de relaunch. Het merk voelt eindelijk als het bedrijf dat we altijd wilden zijn.",
    image: avatar("women", 22),
  },
  {
    name: "Lars Hendriks",
    time: "7 maanden geleden",
    rating: 5,
    content:
      "Stuurde de nieuwe website naar mijn mentor en zijn eerste reactie was: 'wie heeft dat gebouwd?' Hoger compliment kan ik niet krijgen. Investering waard.",
    image: avatar("men", 75),
  },
  {
    name: "Zara Khan",
    time: "7 maanden geleden",
    rating: 5,
    content:
      "Als je design ziet als echte business-hefboom in plaats van versiering: huur deze mensen. Ze snappen het op een niveau dat ik nergens anders zag.",
    image: avatar("women", 12),
  },
  {
    name: "Mateo Rossi",
    time: "8 maanden geleden",
    rating: 5,
    content:
      "Slimste en meest respectvolle team waarmee ik in jaren werkte. Ze maakten een inherent stressvol proces zelfs leuk voor iedereen.",
    image: avatar("men", 23),
  },
  {
    name: "Noa Smit",
    time: "8 maanden geleden",
    rating: 4,
    content:
      "Sarte vertaalde iets wat ik 18 maanden niet kon uitleggen naar een merkboek van 12 pagina's dat iedereen meteen begreep. Game-changer.",
    image: avatar("women", 47),
  },
  {
    name: "Tom Andersen",
    time: "9 maanden geleden",
    rating: 5,
    content:
      "Strak afgebakend, strakke planning, mooi resultaat. Het team is echt senior — geen junior accountmanagers die je van het werk afhouden.",
    image: avatar("men", 47),
  },
  {
    name: "Ava Thompson",
    time: "10 maanden geleden",
    rating: 5,
    content:
      "Twijfel je tussen Sarte en een ander bureau? Doe het gewoon. Wij hebben het gedaan en nooit teruggekeken. Vijf sterren, en altijd een aanrader.",
    image: avatar("women", 38),
  },
];
