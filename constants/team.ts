import { SocialLink, TeamMember } from "@/types";


export const TEAM_SECTION = {
    eyebrow: "De mensen achter het werk",
    ctaPrimary: { label: "Bekijk ons werk", href: "#work" },
    ctaSecondary: { label: "Word collega", href: "#cta" },
    durationMs: 3000,
} as const;

export const TEAM_MEMBERS = [
    {
        name: "Alex Chen",
        role: "Creative Director",
        bio: "Bouwt visuele identiteiten die meerwaarde verdienen nog voordat de pitchdeck opengaat. Verantwoordelijk voor meerdere bekroonde rebrandings in tech, fintech en consumentenmarkten.",
        scene: "scene-studio",
    },
    {
        name: "Sara Müller",
        role: "Strategy Lead",
        bio: "Vertaalt marktonderzoek naar verhalen die zittende spelers verdringen. Schreef positioneringsraamwerken die door drie internationale merkteams werden overgenomen.",
        scene: "scene-strategy",
    },
    {
        name: "Jordan Park",
        role: "Lead Developer",
        bio: "Bouwt productiesystemen die net zo goed presteren als ze eruitzien. Leverde 40+ websites met laadtijden onder de 2 seconden en geen kritieke incidenten na livegang.",
        scene: "scene-code",
    },
    {
        name: "Priya Nair",
        role: "Growth Director",
        bio: "Bouwt acquisitiemotoren die kwartaal op kwartaal renderen. Verantwoordelijk voor €18M paid media in B2B en consumentenmarkten.",
        scene: "scene-presentation",
    },
    {
        name: "Kai Torres",
        role: "Design Lead",
        bio: "Ontwerpt interfaces die vanzelfsprekend aanvoelen zodra je ze gebruikt. Eerder product designer bij twee series-B SaaS-bedrijven voordat hij bij Sarte Global startte.",
        scene: "scene-photo",
    },
    {
        name: "Yuna Walsh",
        role: "Brand Director",
        bio: "Orkestreert identiteitssystemen van logo tot motion language. Brengt tien jaar redactioneel design mee uit topbureaus in Londen en Amsterdam.",
        scene: "scene-office",
    },
] as const satisfies readonly TeamMember[];

export const TEAM_SOCIALS = [
    { label: "LinkedIn", href: "#", icon: "linkedin" },
    { label: "X", href: "#", icon: "x" },
] as const satisfies readonly SocialLink[];
