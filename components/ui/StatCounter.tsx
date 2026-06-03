"use client";

import { useCounter } from "@/hooks/useCounter";
import type { StatCounterProps } from "@/types";

export function StatCounter({ target, start }: StatCounterProps) {
  const value = useCounter({ target, start });
  return <span className="counter">{value}</span>;
}
