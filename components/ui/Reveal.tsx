"use client";

import { createElement, type CSSProperties, type Ref } from "react";

import { useReveal } from "@/hooks/useReveal";
import type { CSSVarStyle, RevealProps } from "@/types";

export function Reveal({
  children,
  as = "div",
  className,
  index,
  style,
  id,
  ariaLabelledby,
  ariaLabel,
}: RevealProps) {
  const { ref, isIn } = useReveal<HTMLElement>();

  const composedStyle: CSSProperties =
    index !== undefined
      ? ({ ...(style ?? {}), "--i": index } as CSSVarStyle)
      : style ?? {};

  const composedClassName: string | undefined = isIn
    ? className
      ? `${className} is-in`
      : "is-in"
    : className;

  return createElement(
    as,
    {
      ref: ref as Ref<HTMLElement>,
      "data-reveal": "",
      className: composedClassName,
      style: composedStyle,
      id,
      "aria-labelledby": ariaLabelledby,
      "aria-label": ariaLabel,
    },
    children
  );
}
