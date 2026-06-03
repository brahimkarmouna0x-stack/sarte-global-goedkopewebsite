"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState, type MouseEvent } from "react";

import { NAV_CTA, NAV_LINKS } from "@/constants";
import { useMobileDrawer } from "@/hooks/useMobileDrawer";
import { useScrolled } from "@/hooks/useScrolled";

import { Logo } from "../shared/Logo";
import { Container } from "../ui/Container";
import { CTAButton } from "../ui/CTAButton";
import { MobileDrawer } from "../ui/MobileDrawer";

const SCROLL_THRESHOLD = 40;

export function Navigation() {
  const [isActive, setIsActive] = useState<string>(NAV_LINKS[0].href);
  const scrolled = useScrolled(SCROLL_THRESHOLD);
  const drawer = useMobileDrawer();
  const pathname = usePathname();
  const isHome = pathname === "/";

  useEffect(() => {
    const syncHash = () => {
      setIsActive(window.location.hash || NAV_LINKS[0].href);
    };
    syncHash();
    window.addEventListener("hashchange", syncHash);
    return () => window.removeEventListener("hashchange", syncHash);
  }, []);

  const handleHashClick = (
    event: MouseEvent<HTMLAnchorElement>,
    hash: string,
  ) => {
    setIsActive(hash);
    if (!isHome) return;
    event.preventDefault();
    const target = document.getElementById(hash.slice(1));
    if (!target) return;
    target.scrollIntoView({ behavior: "smooth", block: "start" });
    window.history.replaceState(null, "", hash);
  };

  return (
    <>
      <nav
        className={scrolled ? "nav is-scrolled" : "nav"}
        aria-label="Hoofdnavigatie"
      >
        <Container className="nav-inner">
          <Logo />
          <ul className="nav-links">
            {NAV_LINKS.map((link) => {
              const active = isActive === link.href;
              const href = isHome ? link.href : `/${link.href}`;
              return (
                <li key={link.href}>
                  <Link
                    href={href}
                    className={active ? "active" : ""}
                    aria-current={active ? "page" : undefined}
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
            variant="outline"
            className="nav-cta"
          />
          <button
            className="hamburger"
            aria-label="Menu openen"
            aria-controls="drawer"
            aria-expanded={drawer.isOpen}
            onClick={drawer.open}
            type="button"
          >
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.6"
              aria-hidden="true"
            >
              <path d="M3 7h18M3 12h18M3 17h18" />
            </svg>
          </button>
        </Container>
      </nav>
      <MobileDrawer isOpen={drawer.isOpen} onClose={drawer.close} />
    </>
  );
}
