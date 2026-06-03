"use client";

import Image from "next/image";
import { useState } from "react";

import type { LocalBusinessCardProps } from "@/types";

import { CTAButton } from "./CTAButton";
import { LocalBusinessIcon } from "./LocalBusinessIcon";
import { Reveal } from "./Reveal";

export function LocalBusinessCard({ business, index }: LocalBusinessCardProps) {
  const [imageFailed, setImageFailed] = useState(false);

  return (
    <Reveal as="article" className="local-biz-card" index={index}>
      <div className="local-biz-card__media">
        {imageFailed ? (
          <span className="local-biz-card__icon-fallback" aria-hidden="true">
            <LocalBusinessIcon name={business.icon} />
          </span>
        ) : (
          <Image
            src={business.image}
            alt={business.imageAlt}
            fill
            sizes="(max-width: 640px) 92vw, (max-width: 1024px) 46vw, 30vw"
            className="local-biz-card__media-img"
            quality={70}
            loading="lazy"
            onError={() => setImageFailed(true)}
          />
        )}
        <span className="local-biz-card__media-shade" aria-hidden="true" />
        {business.badge ? (
          <span className="local-biz-card__badge">{business.badge}</span>
        ) : null}
      </div>

      <div className="local-biz-card__body">
        <h3 className="local-biz-card__title">{business.title}</h3>
        <p className="local-biz-card__desc">{business.description}</p>
        <CTAButton
          label={business.ctaLabel}
          variant="primary"
          projectType={business.projectType}
          className="local-biz-card__cta"
        />
      </div>
    </Reveal>
  );
}
