import type { ContactChannel, PageHeroContent } from "@/types";

export const CONTACT_HERO: PageHeroContent = {
  icon: "cursor",
  eyebrow: "Contact · Neem contact op",
  titleLead: "Vertel ons over",
  titleEm: "jouw project.",
  intro:
    "Deel een paar details en we gaan verder via WhatsApp of e-mail. We reageren meestal binnen enkele minuten tijdens kantooruren, en uiterlijk binnen één werkdag.",
};

export const CONTACT_CHANNELS_SECTION = {
  eyebrow: "Andere manieren om contact op te nemen",
  title: "Kies wat voor jou het makkelijkst is.",
} as const;

export const CONTACT_CHANNELS: readonly ContactChannel[] = [
  {
    icon: "mail",
    label: "E-mail",
    value: "info@goedkopewebsite-latenmaken.nl",
    href: "mailto:info@goedkopewebsite-latenmaken.nl",
    note: "Het beste voor offertes en uitgebreide briefings.",
  },
  {
    icon: "phone",
    label: "Telefoon",
    // TODO: vervang door definitief Nederlands telefoonnummer
    value: "+31 00 000 0000",
    href: "tel:+310000000000",
    note: "Maandag–vrijdag · 9:00–18:00.",
  },
  {
    icon: "map",
    label: "Vestiging",
    // TODO: vul echte vestigingsgegevens in
    value: "Nederland · Op afspraak",
    href: "#",
    note: "Bezoek alleen op afspraak.",
  },
  {
    icon: "chat",
    label: "WhatsApp",
    value: "Chat met ons team",
    href: "https://wa.me/31000000000",
    note: "De snelste manier om iemand te spreken.",
  },
];

export const CONTACT_FORM_SECTION = {
  eyebrow: "Start een project",
  titleLead: "Stuur ons een",
  titleEm: "bericht.",
  sub: "Een paar zinnen is genoeg om het gesprek te starten. Hoe meer je deelt, hoe beter onze eerste reactie.",
} as const;
