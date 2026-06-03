import { ProcessStepData } from "@/types";


export const PROCESS_SECTION = {
    eyebrow: "Zo werken we",
    titleLead: "Vijf stappen van",
    titleEm: "wit canvas",
    titleTail: "naar website die werkt.",
    sub: "Een beproefd traject, getest op 150+ projecten — flexibel voor ondernemers, gestructureerd voor grotere bedrijven.",
} as const;

export const PROCESS_STEPS = [
    {
        number: "01",
        name: "Kennismaking",
        description:
            "Korte intake, audit en marktanalyse — we verdienen het recht op een sterke mening voordat we beginnen.",
    },
    {
        number: "02",
        name: "Strategie",
        description:
            "Positionering, boodschappen en een onderbouwd plan dat aansluit op omzet, niet op opvallen om het opvallen.",
    },
    {
        number: "03",
        name: "Ontwerp",
        description:
            "Visuele identiteit, verhaal en interactie ontworpen vanuit de strategie — nooit andersom.",
    },
    {
        number: "04",
        name: "Bouw",
        description:
            "Productiekwaliteit web, motion en content — gedocumenteerd opgeleverd of door ons end-to-end uitgevoerd.",
    },
    {
        number: "05",
        name: "Groei",
        description:
            "Paid media, SEO en analytics die zich opstapelen — kwartaal-reviews, geen eenmalige lanceringen.",
    },
] as const satisfies readonly ProcessStepData[];
