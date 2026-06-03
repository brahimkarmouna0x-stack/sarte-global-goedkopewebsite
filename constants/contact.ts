// WhatsApp-nummer (zonder + en zonder spaties). Vervang door uw eigen nummer.
export const WHATSAPP_NUMBER = "31000000000" as const;

export const PROJECT_TYPES = [
  "Website laten maken",
  "Webshop laten maken",
  "Landingspagina",
  "UX / UI design",
  "SEO & groei",
  "Mobiele app",
  "AI & automatisering",
  "Merkstrategie",
  "Online advertising",
  "Anders",
] as const;

export type ProjectType = (typeof PROJECT_TYPES)[number];

export const DIALOG_COPY = {
  eyebrow: "Laten we praten",
  title: "Vraag jouw",
  titleEm: "gratis offerte aan.",
  subtitle:
    "Vul een paar gegevens in en we gaan verder via WhatsApp. We reageren meestal binnen enkele minuten.",
  nameLabel: "Je naam",
  namePlaceholder: "Jan Jansen",
  emailLabel: "E-mailadres",
  emailPlaceholder: "jij@bedrijf.nl",
  projectTypeLabel: "Soort project",
  projectTypePlaceholderOption: "Kies een soort project",
  messageLabel: "Vertel kort over jouw project",
  messagePlaceholder:
    "Een nieuwe website voor mijn bedrijf, een webshop voor mijn producten, een landingspagina voor een campagne…",
  submitLabel: "Verder via WhatsApp",
  submittingLabel: "WhatsApp wordt geopend…",
  closeLabel: "Sluiten",
  fabLabel: "Chat met ons via WhatsApp",
} as const;
