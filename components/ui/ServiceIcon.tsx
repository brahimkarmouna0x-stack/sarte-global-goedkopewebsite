import type { ServiceIconProps } from "@/types";

export function ServiceIcon({ name }: ServiceIconProps) {
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
    case "shield":
      return (
        <svg {...common}>
          <path d="M24 6L8 14v12c0 9 7 16 16 18 9-2 16-9 16-18V14L24 6z" />
          <path d="M18 24l4 4 8-8" />
        </svg>
      );
    case "monitor":
      return (
        <svg {...common}>
          <rect x="6" y="10" width="36" height="28" rx="2" />
          <path d="M6 18h36M12 14h.01M16 14h.01M20 14h.01" />
        </svg>
      );
    case "cursor":
      return (
        <svg {...common}>
          <path d="M8 8l32 12-14 4-4 14L8 8z" />
          <path d="M22 22l16 16" />
        </svg>
      );
    case "search":
      return (
        <svg {...common}>
          <circle cx="22" cy="22" r="13" />
          <path d="M32 32l10 10" />
          <path d="M16 22h12M22 16v12" />
        </svg>
      );
    case "megaphone":
      return (
        <svg {...common}>
          <path d="M6 18v12l24 8V10L6 18z" />
          <path d="M30 14h6l4 4v12l-4 4h-6" />
        </svg>
      );
    case "chart":
      return (
        <svg {...common}>
          <path d="M6 38h36M10 38V22M20 38V12M30 38V18M40 38V8" />
        </svg>
      );
    case "code":
      return (
        <svg {...common}>
          <path d="M16 14L6 24l10 10M32 14l10 10-10 10M28 10l-8 28" />
        </svg>
      );
    case "palette":
      return (
        <svg {...common}>
          <path d="M24 6C13.5 6 5 14.5 5 25c0 6 4 10 9 10h4a3 3 0 003-3v-2a3 3 0 013-3h6c5 0 9-3 9-8 0-7.2-7.6-13-15-13z" />
          <circle cx="14" cy="20" r="2" />
          <circle cx="20" cy="13" r="2" />
          <circle cx="30" cy="13" r="2" />
          <circle cx="36" cy="20" r="2" />
        </svg>
      );
    case "mobile":
      return (
        <svg {...common}>
          <rect x="14" y="4" width="20" height="40" rx="3" />
          <path d="M14 12h20M14 36h20M22 40h4" />
        </svg>
      );
    case "cpu":
      return (
        <svg {...common}>
          <rect x="12" y="12" width="24" height="24" rx="2" />
          <rect x="18" y="18" width="12" height="12" rx="1" />
          <path d="M22 6v6M26 6v6M22 36v6M26 36v6M6 22h6M6 26h6M36 22h6M36 26h6" />
        </svg>
      );
    case "cart":
      return (
        <svg {...common}>
          <path d="M6 8h4l4 22h22l4-16H14" />
          <circle cx="18" cy="38" r="3" />
          <circle cx="34" cy="38" r="3" />
        </svg>
      );
    case "rocket":
      return (
        <svg {...common}>
          <path d="M24 4c8 6 12 14 12 22l-6 6h-12l-6-6c0-8 4-16 12-22z" />
          <circle cx="24" cy="20" r="3" />
          <path d="M16 36l-6 8 8-2M32 36l6 8-8-2" />
        </svg>
      );
    case "lightning":
      return (
        <svg {...common}>
          <path d="M26 4L8 28h12l-4 16 20-26H24l2-14z" />
        </svg>
      );
    case "layers":
      return (
        <svg {...common}>
          <path d="M24 6L4 16l20 10 20-10L24 6z" />
          <path d="M4 26l20 10 20-10M4 36l20 10 20-10" />
        </svg>
      );
    case "spark":
      return (
        <svg {...common}>
          <path d="M24 4v12M24 32v12M4 24h12M32 24h12M10 10l8 8M30 30l8 8M10 38l8-8M30 18l8-8" />
        </svg>
      );
    case "gauge":
      return (
        <svg {...common}>
          <path d="M8 32a16 16 0 0132 0" />
          <path d="M24 32l8-10" />
          <circle cx="24" cy="32" r="2" />
        </svg>
      );
    default:
      return null;
  }
}
