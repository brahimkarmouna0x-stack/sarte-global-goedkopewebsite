import type { LocalBusinessIconProps } from "@/types";

export function LocalBusinessIcon({ name }: LocalBusinessIconProps) {
  const common = {
    viewBox: "0 0 48 48",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.4,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    "aria-hidden": true,
  } as const;

  switch (name) {
    case "scissors":
      return (
        <svg {...common}>
          <circle cx="12" cy="14" r="5" />
          <circle cx="12" cy="34" r="5" />
          <path d="M17 17l24 18" />
          <path d="M17 31l24-18" />
          <path d="M28 24l-4 3" />
        </svg>
      );
    case "sparkle":
      return (
        <svg {...common}>
          <path d="M24 6l3 12 12 3-12 3-3 12-3-12-12-3 12-3z" />
          <path d="M40 10l1 4 4 1-4 1-1 4-1-4-4-1 4-1z" />
          <path d="M9 32l1 3 3 1-3 1-1 3-1-3-3-1 3-1z" />
        </svg>
      );
    case "hanger":
      return (
        <svg {...common}>
          <path d="M24 14a4 4 0 1 1 4-4" />
          <path d="M24 14v4" />
          <path d="M24 18L7 32a2 2 0 0 0 1.2 3.6h31.6A2 2 0 0 0 41 32L24 18z" />
        </svg>
      );
    case "croissant":
      return (
        <svg {...common}>
          <path d="M8 30c0-9 7-16 16-16s16 7 16 16c-3-2-7-3-10-2-3-3-7-4-12-2-4 0-7 2-10 4z" />
          <path d="M14 28c2-2 5-3 8-2" />
          <path d="M26 26c2-2 5-3 8-2" />
        </svg>
      );
    case "cup":
      return (
        <svg {...common}>
          <path d="M10 18h22v12a8 8 0 0 1-8 8h-6a8 8 0 0 1-8-8V18z" />
          <path d="M32 22h4a4 4 0 0 1 0 8h-4" />
          <path d="M16 10c0 2-2 2-2 4" />
          <path d="M22 10c0 2-2 2-2 4" />
          <path d="M28 10c0 2-2 2-2 4" />
        </svg>
      );
    case "basket":
      return (
        <svg {...common}>
          <path d="M6 18h36l-3 20a4 4 0 0 1-4 4H13a4 4 0 0 1-4-4L6 18z" />
          <path d="M16 18L22 6" />
          <path d="M32 18L26 6" />
          <path d="M18 26v8" />
          <path d="M24 26v8" />
          <path d="M30 26v8" />
        </svg>
      );
    case "cross":
      return (
        <svg {...common}>
          <rect x="8" y="8" width="32" height="32" rx="6" />
          <path d="M24 16v16" />
          <path d="M16 24h16" />
        </svg>
      );
    case "dumbbell":
      return (
        <svg {...common}>
          <rect x="4" y="18" width="6" height="12" rx="1.5" />
          <rect x="38" y="18" width="6" height="12" rx="1.5" />
          <rect x="10" y="21" width="4" height="6" rx="1" />
          <rect x="34" y="21" width="4" height="6" rx="1" />
          <path d="M14 24h20" />
        </svg>
      );
    case "flower":
      return (
        <svg {...common}>
          <circle cx="24" cy="20" r="3" />
          <path d="M24 17c0-4 4-7 7-5s2 7-2 8" />
          <path d="M24 17c0-4-4-7-7-5s-2 7 2 8" />
          <path d="M27 22c3 2 7 1 7-3" />
          <path d="M21 22c-3 2-7 1-7-3" />
          <path d="M24 23v18" />
          <path d="M24 32c-3 1-5 4-5 8" />
          <path d="M24 32c3 1 5 4 5 8" />
        </svg>
      );
    case "wrench":
      return (
        <svg {...common}>
          <path d="M30 10a8 8 0 0 0-7 11L9 35a3 3 0 1 0 4 4l14-14a8 8 0 0 0 11-7l-5 5-5-1-1-5 5-5z" />
        </svg>
      );
    default:
      return null;
  }
}
