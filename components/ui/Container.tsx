import type { ReactNode } from "react";

type AllowedElement = "div" | "section" | "header" | "footer" | "nav" | "article" | "aside" | "main";

interface ContainerProps {
  as?: AllowedElement;
  className?: string;
  children: ReactNode;
}

const CONTAINER_BASE = "mx-auto w-full container px-5 sm:px-8 lg:px-12 xl:px-16";

export function Container({ as: Tag = "div", className, children }: ContainerProps) {
  const classes = className ? `${CONTAINER_BASE} ${className}` : CONTAINER_BASE;
  return <Tag className={classes}>{children}</Tag>;
}
