"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import type { MouseEvent } from "react";

import { NAV_CTA, NAV_LINKS, SITE } from "@/constants";

import { CTAButton } from "./CTAButton";

export interface MobileDrawerProps {
  readonly isOpen: boolean;
  readonly onClose: () => void;
}

export function MobileDrawer({
  isOpen,
  onClose,
}: MobileDrawerProps) {
  const pathname = usePathname();
  const isHome = pathname === "/";

  const handleHashClick = (
    event: MouseEvent<HTMLAnchorElement>,
    hash: string,
  ) => {
    onClose();
    if (!isHome) return;
    event.preventDefault();
    const target = document.getElementById(hash.slice(1));
    if (!target) return;
    target.scrollIntoView({ behavior: "smooth", block: "start" });
    window.history.replaceState(null, "", hash);
  };

  return (
    <>
      <div
        className={isOpen ? "scrim is-open" : "scrim"}
        id="scrim"
        aria-hidden={!isOpen}
        onClick={onClose}
      />
      <aside
        className={isOpen ? "drawer is-open" : "drawer"}
        id="drawer"
        aria-label="Mobiel menu"
        aria-hidden={!isOpen}
      >
        <div className="drawer-head">
          <span className="brand">
            {SITE.brandName}
            <span>{SITE.brandAccent}</span>
          </span>
          <button
            className="hamburger"
            aria-label="Menu sluiten"
            onClick={onClose}
            type="button"
          >
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.6"
              aria-hidden="true"
            >
              <path d="M6 6l12 12M18 6L6 18" />
            </svg>
          </button>
        </div>
        <ul>
          {NAV_LINKS.map((link) => {
            const href = isHome ? link.href : `/${link.href}`;
            return (
              <li key={link.href}>
                <Link
                  href={href}
                  onClick={(event) => handleHashClick(event, link.href)}
                >
                  {link.label}
                </Link>
              </li>
            );
          })}
        </ul>
        <CTAButton
          label={NAV_CTA.label}
          variant="primary"
          onClick={onClose}
        />
      </aside>
    </>
  );
}
