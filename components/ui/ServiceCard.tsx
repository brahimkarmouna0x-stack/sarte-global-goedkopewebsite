import Link from "next/link";

import { SERVICE_LINK_LABEL } from "@/constants";
import type { ServiceCardProps } from "@/types";

import { Reveal } from "./Reveal";
import { ServiceIcon } from "./ServiceIcon";

export function ServiceCard({ service, index }: ServiceCardProps) {
  return (
    <Reveal as="article" className="svc" index={index}>
      <Link
        href={service.href}
        className="svc-card-link"
        aria-label={service.name}
      >
        <div>
          <span className="svc-num">{service.number}</span>
          <div className="svc-icon" aria-hidden="true">
            <ServiceIcon name={service.icon} />
          </div>
        </div>
        <div>
          <h3 className="svc-name">{service.name}</h3>
          <p className="svc-desc">{service.description}</p>
        </div>
        <span className="svc-link">{SERVICE_LINK_LABEL}</span>
      </Link>
    </Reveal>
  );
}
