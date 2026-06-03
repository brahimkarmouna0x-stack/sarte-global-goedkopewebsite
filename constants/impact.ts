import type { ImpactStat } from "@/types";

export const IMPACT_SECTION = {
    eyebrow: "De cijfers",
    titleLead: "Resultaten, geen",
    titleEm: "loze beloften.",
} as const;

export const IMPACT_STATS: readonly ImpactStat[] = [
    { target: 150, suffix: "+", label: "Projecten opgeleverd" },
    { target: 98, suffix: "%", label: "Tevreden klanten" },
    { target: 2, suffix: " wk", label: "Gemiddelde oplevertijd" },
    { target: 24, suffix: "/7", label: "Support na livegang" },
];
