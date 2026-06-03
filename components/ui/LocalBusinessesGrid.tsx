"use client";

import { useState } from "react";

import { LOCAL_BUSINESSES_SECTION } from "@/constants";
import type { LocalBusiness } from "@/types";

import { LocalBusinessCard } from "./LocalBusinessCard";

interface LocalBusinessesGridProps {
  readonly businesses: readonly LocalBusiness[];
  readonly initialCount?: number;
}

export function LocalBusinessesGrid({
  businesses,
  initialCount = 6,
}: LocalBusinessesGridProps) {
  const [visible, setVisible] = useState(initialCount);
  const shown = businesses.slice(0, visible);
  const hasMore = visible < businesses.length;
  const expanded = visible >= businesses.length;
  const showsControls = businesses.length > initialCount;

  return (
    <>
      <div className="local-biz__grid" role="list">
        {shown.map((business, index) => (
          <div key={business.slug} role="listitem">
            <LocalBusinessCard business={business} index={index} />
          </div>
        ))}
      </div>

      {showsControls ? (
        <div className="local-biz__foot">
          {hasMore ? (
            <button
              type="button"
              onClick={() => setVisible(businesses.length)}
              className="btn btn-ghost local-biz__more"
            >
              {LOCAL_BUSINESSES_SECTION.loadMoreLabel}
              <span aria-hidden="true">
                {" "}
                · +{businesses.length - visible}
              </span>
              <span className="arr" aria-hidden="true">
                ↓
              </span>
            </button>
          ) : null}
          {expanded ? (
            <button
              type="button"
              onClick={() => setVisible(initialCount)}
              className="local-biz__less"
            >
              {LOCAL_BUSINESSES_SECTION.loadLessLabel}
            </button>
          ) : null}
        </div>
      ) : null}
    </>
  );
}
