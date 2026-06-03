import type { CSSProperties, ReactNode } from "react";

export type ServiceIconName =
  | "shield"
  | "monitor"
  | "cursor"
  | "search"
  | "megaphone"
  | "chart"
  | "code"
  | "palette"
  | "mobile"
  | "cpu"
  | "cart"
  | "rocket"
  | "lightning"
  | "layers"
  | "spark"
  | "gauge";

export interface NavLink {
  readonly label: string;
  readonly href: string;
}

export interface HeroStat {
  readonly label: string;
}

export interface HeroTitleWord {
  readonly text: string;
  readonly italicAccent?: boolean;
}

export interface HeroTitleLine {
  readonly words: readonly HeroTitleWord[];
}

export interface HeroContent {
  readonly eyebrow: string;
  readonly title: readonly HeroTitleLine[];
  readonly subtitle: string;
  readonly primaryCta: { readonly label: string; readonly href: string };
  readonly secondaryCta: { readonly label: string; readonly href: string };
  readonly stats: readonly HeroStat[];
  readonly scrollLabel: string;
  readonly badgeText: string;
}

export interface HeroSlide {
  readonly id: string;
  readonly label: string;
  readonly title: string;
  readonly description: string;
  readonly image: string;
  readonly imageAlt: string;
  readonly accent: string;
}

export interface ServiceFeature {
  readonly title: string;
  readonly description: string;
  readonly iconName: ServiceIconName;
}

export interface ServiceProcessItem {
  readonly number: string;
  readonly title: string;
  readonly description: string;
}

export interface ServiceCTACopy {
  readonly titleLead: string;
  readonly titleEm: string;
  readonly sub: string;
  readonly primaryLabel: string;
  readonly primaryHref: string;
  readonly secondaryLabel: string;
  readonly secondaryHref: string;
}

export interface Service {
  readonly slug: string;
  readonly number: string;
  readonly name: string;
  readonly tagline: string;
  readonly description: string;
  readonly href: string;
  readonly icon: ServiceIconName;
  readonly heroEyebrow: string;
  readonly heroTitleLead: string;
  readonly heroTitleEm: string;
  readonly features: readonly ServiceFeature[];
  readonly process: readonly ServiceProcessItem[];
  readonly techIds: readonly string[];
  readonly relatedCategories: readonly Exclude<ProjectCategory, "All">[];
  readonly cta: ServiceCTACopy;
}

export type WorkArtwork =
  | "volta"
  | "meridian"
  | "fenix"
  | "orbis"
  | "stratum";

export interface WorkItem {
  readonly id: string;
  readonly tag: string;
  readonly metric: string;
  readonly meta: string;
  readonly title: string;
  readonly viewLabel: string;
  readonly artwork: WorkArtwork;
  readonly feature: boolean;
  readonly ariaLabel: string;
}

export interface ProcessStepData {
  readonly number: string;
  readonly name: string;
  readonly description: string;
}

export interface ImpactStat {
  readonly target: number;
  readonly prefix?: string;
  readonly suffix?: string;
  readonly label: string;
}

export interface Testimonial {
  readonly name: string;
  readonly time: string;
  readonly rating: number;
  readonly content: string;
  readonly image: string;
}

export type TeamSceneId =
  | "scene-studio"
  | "scene-strategy"
  | "scene-code"
  | "scene-presentation"
  | "scene-photo"
  | "scene-office";

export interface TeamMember {
  readonly name: string;
  readonly role: string;
  readonly bio: string;
  readonly scene: TeamSceneId;
}

export type ArticleArtwork = "rings" | "lines" | "curves";

export type ArticleParagraph =
  | string
  | { readonly type: "heading"; readonly text: string }
  | { readonly type: "list"; readonly items: readonly string[] };

export interface Article {
  readonly tag: string;
  readonly title: string;
  readonly date: string;
  readonly readLabel: string;
  readonly href: string;
  readonly artwork: ArticleArtwork;
  readonly slug?: string;
  readonly excerpt?: string;
  readonly readMinutes?: number;
  readonly author?: string;
  readonly body?: readonly ArticleParagraph[];
}

export interface FooterLink {
  readonly label: string;
  readonly href: string;
}

export interface FooterColumn {
  readonly title: string;
  readonly links: readonly FooterLink[];
}

export interface SocialLink {
  readonly label: string;
  readonly href: string;
  readonly icon: "linkedin" | "x" | "dribbble" | "instagram";
}

export interface SiteMeta {
  readonly title: string;
  readonly description: string;
  readonly themeColor: string;
  readonly brandName: string;
  readonly brandAccent: string;
}

export interface RevealProps {
  readonly children: ReactNode;
  readonly as?: "div" | "section" | "article" | "header" | "span" | "aside";
  readonly className?: string;
  readonly index?: number;
  readonly style?: CSSProperties;
  readonly id?: string;
  readonly ariaLabelledby?: string;
  readonly ariaLabel?: string;
}

export interface ServiceCardProps {
  readonly service: Service;
  readonly index: number;
}

export type LocalBusinessIconName =
  | "scissors"
  | "sparkle"
  | "hanger"
  | "croissant"
  | "cup"
  | "basket"
  | "cross"
  | "dumbbell"
  | "flower"
  | "wrench";

export interface LocalBusiness {
  readonly slug: string;
  readonly icon: LocalBusinessIconName;
  readonly title: string;
  readonly description: string;
  readonly badge?: string;
  readonly ctaLabel: string;
  readonly projectType: string;
  readonly image: string;
  readonly imageAlt: string;
}

export interface LocalBusinessesSectionContent {
  readonly eyebrow: string;
  readonly titleLead: string;
  readonly titleEm: string;
  readonly sub: string;
  readonly loadMoreLabel: string;
  readonly loadLessLabel: string;
}

export interface LocalBusinessCardProps {
  readonly business: LocalBusiness;
  readonly index: number;
}

export interface LocalBusinessIconProps {
  readonly name: LocalBusinessIconName;
}

export interface WorkCardProps {
  readonly item: WorkItem;
  readonly index: number;
}

export type ProjectCategory =
  | "All"
  | "SaaS"
  | "AI"
  | "Creative Studio"
  | "Design Tools"
  | "Consumer Apps"
  | "E-Commerce"
  | "Landing Page"
  | "Branding"
  | "WordPress"
  | "Shopify & Dropshipping"
  | "Digital Products";

export interface Project {
  readonly id: string;
  readonly title: string;
  readonly category: Exclude<ProjectCategory, "All">;
  readonly description: string;
  readonly techStack: readonly string[];
  readonly tools?: readonly string[];
  readonly industry: string;
  readonly url: string;
  readonly screenshot: string;
  readonly accent?: string;
  readonly year: string;
  readonly isVideo?: boolean;
}

export interface ProjectCardProps {
  readonly project: Project;
  readonly index: number;
}

export interface ProjectsFilterProps {
  readonly categories: readonly ProjectCategory[];
  readonly active: ProjectCategory;
  readonly onChange: (category: ProjectCategory) => void;
}

export interface ProjectsGridProps {
  readonly projects: readonly Project[];
  readonly initialCount?: number;
  readonly step?: number;
}

export interface ProcessStepProps {
  readonly step: ProcessStepData;
}

export interface StatCounterProps {
  readonly target: number;
  readonly start: boolean;
}

export interface TeamStageProps {
  readonly scene: TeamSceneId;
  readonly isActive: boolean;
}

export interface ArticleCardProps {
  readonly article: Article;
  readonly index: number;
}

export interface ServiceIconProps {
  readonly name: ServiceIconName;
}

export type CSSVarStyle = CSSProperties & Record<`--${string}`, string | number>;

export type LegalSlug = "privacy" | "terms" | "cookies";

export type LegalParagraph =
  | string
  | { readonly type: "subheading"; readonly text: string }
  | { readonly type: "list"; readonly items: readonly string[] };

export interface LegalSection {
  readonly id: string;
  readonly heading: string;
  readonly body: readonly LegalParagraph[];
}

export interface LegalDocument {
  readonly slug: LegalSlug;
  readonly icon: ServiceIconName;
  readonly heroEyebrow: string;
  readonly titleLead: string;
  readonly titleEm: string;
  readonly intro: string;
  readonly lastUpdated: string;
  readonly sections: readonly LegalSection[];
  readonly contact: { readonly email: string; readonly subject: string };
}

export interface LegalPageProps {
  readonly document: LegalDocument;
}

export interface PageHeroContent {
  readonly icon?: ServiceIconName;
  readonly eyebrow: string;
  readonly titleLead: string;
  readonly titleEm: string;
  readonly intro?: string;
  readonly align?: "left" | "center";
}

export interface CareerValue {
  readonly icon: ServiceIconName;
  readonly title: string;
  readonly description: string;
}

export interface CareerRole {
  readonly id: string;
  readonly title: string;
  readonly team: string;
  readonly location: string;
  readonly type: string;
  readonly summary: string;
  readonly applyEmail: string;
}

export interface HiringStep {
  readonly number: string;
  readonly title: string;
  readonly description: string;
}

export interface ContactChannel {
  readonly icon: "mail" | "phone" | "map" | "chat";
  readonly label: string;
  readonly value: string;
  readonly href: string;
  readonly note?: string;
}

export interface AboutCompanyPillar {
  readonly title: string;
  readonly description: string;
}

export interface AboutCompanyMetric {
  readonly value: string;
  readonly label: string;
}

export interface AboutCompanyContent {
  readonly eyebrow: string;
  readonly brand: string;
  readonly titleLead: string;
  readonly titleEm: string;
  readonly titleTail: string;
  readonly lead: string;
  readonly paragraphs: readonly string[];
  readonly pillars: readonly AboutCompanyPillar[];
  readonly metrics: readonly AboutCompanyMetric[];
  readonly badge: string;
  readonly mediaImage: string;
  readonly mediaAlt: string;
  readonly mediaCaption: string;
  readonly ctaLabel: string;
  readonly ctaHref: string;
  readonly secondaryLabel: string;
  readonly secondaryHref: string;
}
