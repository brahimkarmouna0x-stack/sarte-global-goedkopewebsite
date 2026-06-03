"use client";

import type { ReactNode } from "react";

import { useContactDialog } from "@/contexts/ContactDialogContext";

type Variant = "primary" | "ghost" | "outline";

interface CTAButtonProps {
  readonly label: string;
  readonly variant?: Variant;
  readonly size?: "default" | "large";
  readonly projectType?: string;
  readonly className?: string;
  readonly showArrow?: boolean;
  readonly onClick?: () => void;
  readonly children?: ReactNode;
}

export function CTAButton({
  label,
  variant = "primary",
  size = "default",
  projectType,
  className,
  showArrow = true,
  onClick,
  children,
}: CTAButtonProps) {
  const { openDialog } = useContactDialog();

  const classes = [
    "btn",
    `btn-${variant}`,
    size === "large" ? "btn-large" : "",
    className ?? "",
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <button
      type="button"
      className={classes}
      onClick={() => {
        onClick?.();
        openDialog(projectType ? { projectType } : undefined);
      }}
    >
      {children ?? label}
      {showArrow ? <span className="arr">→</span> : null}
    </button>
  );
}
