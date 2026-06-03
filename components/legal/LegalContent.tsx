import type { ReactNode } from "react";

import type { LegalParagraph, LegalSection } from "@/types";

import { Reveal } from "../ui/Reveal";

interface LegalContentProps {
  readonly sections: readonly LegalSection[];
}

function renderParagraph(node: LegalParagraph, key: number): ReactNode {
  if (typeof node === "string") {
    return (
      <p key={key} className="legal-section__p">
        {node}
      </p>
    );
  }
  if (node.type === "subheading") {
    return (
      <h3 key={key} className="legal-section__sub">
        {node.text}
      </h3>
    );
  }
  return (
    <ul key={key} className="legal-section__list">
      {node.items.map((item, i) => (
        <li key={i}>{item}</li>
      ))}
    </ul>
  );
}

export function LegalContent({ sections }: LegalContentProps) {
  return (
    <div className="legal-content">
      {sections.map((section, index) => (
        <Reveal
          key={section.id}
          as="section"
          className="legal-section"
          id={section.id}
          ariaLabelledby={`${section.id}-h`}
          index={index}
        >
          <h2 id={`${section.id}-h`} className="legal-section__h">
            <span className="legal-section__num">
              {String(index + 1).padStart(2, "0")}
            </span>
            {section.heading}
          </h2>
          {section.body.map((node, i) => renderParagraph(node, i))}
        </Reveal>
      ))}
    </div>
  );
}
