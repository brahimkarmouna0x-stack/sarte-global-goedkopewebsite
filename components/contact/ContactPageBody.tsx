"use client";

import { useState } from "react";

import { TRUST_LINE } from "@/constants";
import { CONTACT_FORM_SECTION } from "@/constants/contact-page";

import { Container } from "../ui/Container";
import { Reveal } from "../ui/Reveal";

import { ContactForm } from "./ContactForm";

export function ContactPageBody() {
  const [done, setDone] = useState<boolean>(false);

  return (
    <section className="contact-form-section" aria-labelledby="contact-form-h">
      <Container>
        <Reveal as="header" className="section-head">
          <div>
            <span className="eyebrow">{CONTACT_FORM_SECTION.eyebrow}</span>
            <h2 className="h2" id="contact-form-h">
              {CONTACT_FORM_SECTION.titleLead}{" "}
              <em>{CONTACT_FORM_SECTION.titleEm}</em>
            </h2>
          </div>
          <p className="sub">{CONTACT_FORM_SECTION.sub}</p>
        </Reveal>

        <Reveal className="contact-form-section__shell">
          {done ? (
            <div className="contact-form-section__success" role="status">
              <h3>Je bericht is doorgezet naar WhatsApp.</h3>
              <p>
                We reageren binnenkort vanuit hetzelfde gesprek. Werkt de
                doorverwijzing niet? Stuur ons een e-mail op{" "}
                <a href="mailto:info@groeimetwebdesign.nl">
                  info@groeimetwebdesign.nl
                </a>
                .
              </p>
              <button
                type="button"
                className="btn btn-ghost"
                onClick={() => setDone(false)}
              >
                Nog een bericht versturen
              </button>
            </div>
          ) : (
            <ContactForm onComplete={() => setDone(true)} />
          )}
        </Reveal>

        <p className="contact-trust">{TRUST_LINE}</p>
      </Container>
    </section>
  );
}
