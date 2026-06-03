import {
  CONTACT_CHANNELS,
  CONTACT_CHANNELS_SECTION,
} from "@/constants/contact-page";
import type { ContactChannel } from "@/types";

import { Container } from "../ui/Container";
import { Reveal } from "../ui/Reveal";

function ChannelIcon({ icon }: { icon: ContactChannel["icon"] }) {
  switch (icon) {
    case "mail":
      return (
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.6"
          aria-hidden="true"
        >
          <rect x="3" y="5" width="18" height="14" rx="2" />
          <path d="m3 7 9 6 9-6" strokeLinecap="round" />
        </svg>
      );
    case "phone":
      return (
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.6"
          aria-hidden="true"
        >
          <path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6 19.8 19.8 0 0 1-3.1-8.7A2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7 12.8 12.8 0 0 0 .7 2.8 2 2 0 0 1-.5 2.1L8.1 9.9a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.4 12.8 12.8 0 0 0 2.8.7 2 2 0 0 1 1.7 2Z" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      );
    case "map":
      return (
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.6"
          aria-hidden="true"
        >
          <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" strokeLinejoin="round" />
          <circle cx="12" cy="10" r="3" />
        </svg>
      );
    case "chat":
    default:
      return (
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.6"
          aria-hidden="true"
        >
          <path d="M21 12a8 8 0 1 1-3.2-6.4L21 5l-.6 3.2A8 8 0 0 1 21 12Z" strokeLinejoin="round" />
          <path d="M8 12h.01M12 12h.01M16 12h.01" strokeLinecap="round" />
        </svg>
      );
  }
}

export function ContactChannels() {
  return (
    <section
      className="contact-channels"
      aria-labelledby="contact-channels-h"
    >
      <Container>
        <Reveal as="header" className="section-head">
          <div>
            <span className="eyebrow">{CONTACT_CHANNELS_SECTION.eyebrow}</span>
            <h2 className="h2" id="contact-channels-h">
              <em>{CONTACT_CHANNELS_SECTION.title}</em>
            </h2>
          </div>
        </Reveal>

        <div className="contact-channels__grid">
          {CONTACT_CHANNELS.map((channel, index) => {
            const isExternal =
              channel.href.startsWith("http") || channel.href.startsWith("mailto");
            return (
              <Reveal
                key={channel.label}
                as="article"
                className="contact-channel"
                index={index}
              >
                <a
                  href={channel.href}
                  className="contact-channel__link"
                  {...(isExternal && channel.href.startsWith("http")
                    ? { target: "_blank", rel: "noopener noreferrer" }
                    : {})}
                >
                  <div className="contact-channel__icon" aria-hidden="true">
                    <ChannelIcon icon={channel.icon} />
                  </div>
                  <span className="contact-channel__label eyebrow">
                    {channel.label}
                  </span>
                  <span className="contact-channel__value">{channel.value}</span>
                  {channel.note ? (
                    <span className="contact-channel__note">{channel.note}</span>
                  ) : null}
                </a>
              </Reveal>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
