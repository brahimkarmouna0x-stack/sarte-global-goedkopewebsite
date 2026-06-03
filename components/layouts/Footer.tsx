import {
  FOOTER_COLUMNS,
  FOOTER_LEGAL,
  FOOTER_MISSION,
  NEWSLETTER,
  PAYMENT_METHODS,
  PAYMENT_METHODS_LABEL,
  SOCIAL_LINKS,
  TRUST_LINE,
} from "@/constants";

import { Container } from "../ui/Container";
import { NewsletterForm } from "../ui/NewsletterForm";
import { PaymentIcon } from "../ui/PaymentIcon";
import { SocialIcon } from "../ui/SocialIcon";
import { Logo } from "../shared/Logo";

export function Footer() {
  return (
    <footer aria-label="Sitevoettekst">
      <Container>
        <div className="foot-grid">
          <div className="foot-brand">
            <Logo />
            <p className="foot-mission">{FOOTER_MISSION}</p>
            <div className="mt-8 flex flex-col gap-4 text-sm text-(--color-text-secondary)">
              <div className="flex items-start gap-3 group">
                <svg
                  className="w-5 h-5 mt-0.5 text-(--color-accent) shrink-0 transition-transform duration-300 group-hover:scale-110"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
                <div className="flex flex-col">
                  <span className="font-medium text-(--color-text) transition-colors duration-300">
                    Gevestigd in Nederland
                  </span>
                  <span className="text-xs text-(--color-text-muted)">
                    Nederland · Bezoek alleen op afspraak
                  </span>
                </div>
              </div>

              <a
                href="mailto:info@goedkopewebsite-latenmaken.nl"
                className="flex items-center gap-3 group w-fit transition-colors duration-300 hover:text-(--color-accent)"
                aria-label="Stuur ons een e-mail"
              >
                <svg
                  className="w-5 h-5 text-(--color-accent) shrink-0 transition-transform duration-300 group-hover:scale-110"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                  <path d="m22 6-10 7L2 6" />
                </svg>
                <span className="font-medium text-(--color-text) group-hover:text-(--color-accent) transition-colors duration-300">
                  info@goedkopewebsite-latenmaken.nl
                </span>
              </a>
            </div>
          </div>
          {FOOTER_COLUMNS.map((column) => (
            <div key={column.title} className="foot-col">
              <h4>{column.title}</h4>
              <ul>
                {column.links.map((link) => (
                  <li key={`${column.title}-${link.label}`}>
                    <a href={link.href}>{link.label}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
          <div className="foot-col">
            <h4>{NEWSLETTER.title}</h4>
            <p className="foot-news-desc">{NEWSLETTER.description}</p>
            <NewsletterForm />
          </div>
        </div>

        <div className="foot-payments" aria-label="Geaccepteerde betaalmethoden">
          <span className="foot-payments__label">{PAYMENT_METHODS_LABEL}</span>
          <ul className="foot-payments__list" role="list">
            {PAYMENT_METHODS.map((method) => (
              <li
                key={method.id}
                className="foot-payment"
                style={{ ["--brand-color" as string]: method.color } as React.CSSProperties}
                aria-label={method.label}
                title={method.label}
              >
                <PaymentIcon id={method.id} />
              </li>
            ))}
          </ul>
        </div>

        <p className="foot-trust">{TRUST_LINE}</p>

        <div className="foot-bar">
          <div className="foot-legal">
            <span>{FOOTER_LEGAL.copyright}</span>
            {FOOTER_LEGAL.links.map((link) => (
              <a key={link.label} href={link.href}>
                {link.label}
              </a>
            ))}
          </div>
          <div className="socials" aria-label="Social media">
            {SOCIAL_LINKS.map((social) => (
              <a key={social.icon} href={social.href} aria-label={social.label}>
                <SocialIcon icon={social.icon} />
              </a>
            ))}
          </div>
        </div>
      </Container>
    </footer>
  );
}
