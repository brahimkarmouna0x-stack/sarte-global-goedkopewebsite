import type { SocialLink } from "@/types";

export interface SocialIconProps {
  readonly icon: SocialLink["icon"];
}

export function SocialIcon({ icon }: SocialIconProps) {
  switch (icon) {
    case "linkedin":
      return (
        <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
          <path d="M4 4h4v4H4zm0 6h4v10H4zm6 0h4v2c1-1.4 2.6-2.2 4-2.2 3 0 5 2 5 5.2V20h-4v-6c0-1.6-.8-2.4-2-2.4s-2 .8-2 2.4v6h-4V10z" />
        </svg>
      );
    case "x":
      return (
        <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
          <path d="M17.5 3h3.3l-7.2 8.3 8.5 11.2h-6.7l-5.2-6.9-6 6.9H1l7.7-8.8L.5 3h6.9l4.7 6.3L17.5 3z" />
        </svg>
      );
    case "dribbble":
      return (
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.6"
          aria-hidden="true"
        >
          <circle cx="12" cy="12" r="10" />
          <path d="M3.5 9c5 0 9.5 1 14 4M5 18c3-5 9-7 16-5M9 3c3 4 5 9 5 18" />
        </svg>
      );
    case "instagram":
      return (
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.6"
          aria-hidden="true"
        >
          <rect x="3" y="3" width="18" height="18" rx="5" />
          <circle cx="12" cy="12" r="4" />
          <circle cx="17.5" cy="6.5" r="1" fill="currentColor" />
        </svg>
      );
    default:
      return null;
  }
}
