"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useRef, type ReactNode } from "react";

import { ArticleArtwork } from "@/components/ui/ArticleArtwork";
import { CTAButton } from "@/components/ui/CTAButton";
import { useArticleDialog } from "@/contexts/ArticleDialogContext";
import type { ArticleParagraph } from "@/types";

const EASE = [0.2, 0.7, 0.2, 1] as const;

function renderParagraph(node: ArticleParagraph, key: number): ReactNode {
  if (typeof node === "string") {
    return (
      <p key={key} className="ad-body__p">
        {node}
      </p>
    );
  }
  if (node.type === "heading") {
    return (
      <h3 key={key} className="ad-body__h">
        {node.text}
      </h3>
    );
  }
  return (
    <ul key={key} className="ad-body__list">
      {node.items.map((item, i) => (
        <li key={i}>{item}</li>
      ))}
    </ul>
  );
}

export function ArticleDialog() {
  const { article, open, closeArticle } = useArticleDialog();
  const previouslyFocused = useRef<HTMLElement | null>(null);
  const panelRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!open) return;

    previouslyFocused.current =
      (document.activeElement as HTMLElement | null) ?? null;

    const root = document.documentElement;
    const prevOverflow = root.style.overflow;
    root.style.overflow = "hidden";

    function handleKey(event: KeyboardEvent) {
      if (event.key === "Escape") {
        event.preventDefault();
        closeArticle();
        return;
      }
      if (event.key !== "Tab") return;

      const panel = panelRef.current;
      if (!panel) return;
      const focusables = panel.querySelectorAll<HTMLElement>(
        'a[href], button:not([disabled]), textarea:not([disabled]), input:not([disabled]), select:not([disabled]), [tabindex]:not([tabindex="-1"])',
      );
      const first = focusables[0];
      const last = focusables[focusables.length - 1];
      if (!first || !last) return;
      const active = document.activeElement as HTMLElement | null;

      if (event.shiftKey && active === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && active === last) {
        event.preventDefault();
        first.focus();
      }
    }

    window.addEventListener("keydown", handleKey);
    return () => {
      window.removeEventListener("keydown", handleKey);
      root.style.overflow = prevOverflow;
      previouslyFocused.current?.focus?.();
    };
  }, [open, closeArticle]);

  const hasExternalLink = Boolean(article?.href && article.href !== "#");

  return (
    <AnimatePresence>
      {open && article ? (
        <motion.div
          className="cd-root"
          role="dialog"
          aria-modal="true"
          aria-labelledby="article-dialog-title"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25, ease: EASE }}
        >
          <motion.div
            className="cd-overlay"
            onClick={closeArticle}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3, ease: EASE }}
            aria-hidden="true"
          />

          <motion.div
            ref={panelRef}
            className="ad-panel"
            initial={{ opacity: 0, scale: 0.96, y: 14 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.97, y: 8 }}
            transition={{ duration: 0.45, ease: EASE }}
          >
            <span className="cd-panel__glow" aria-hidden="true" />

            <button
              type="button"
              className="cd-close"
              onClick={closeArticle}
              aria-label="Artikel sluiten"
            >
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.6"
                aria-hidden="true"
              >
                <path d="M6 6l12 12M18 6L6 18" strokeLinecap="round" />
              </svg>
            </button>

            <div className="ad-panel__hero" aria-hidden="true">
              <ArticleArtwork id={article.artwork} />
            </div>

            <div className="ad-head">
              <span className="ad-tag">{article.tag}</span>
              <h2 className="ad-title" id="article-dialog-title">
                {article.title}
              </h2>
              <div className="ad-meta">
                <span>{article.date}</span>
                {article.readMinutes ? (
                  <span>{article.readMinutes} min leestijd</span>
                ) : null}
                {article.author ? <span>{article.author}</span> : null}
              </div>
            </div>

            {article.excerpt ? (
              <p className="ad-excerpt">{article.excerpt}</p>
            ) : null}

            {article.body && article.body.length > 0 ? (
              <div className="ad-body">
                {article.body.map((node, i) => renderParagraph(node, i))}
              </div>
            ) : null}

            <div className="ad-footer">
              <CTAButton
                label="Verder praten over jouw project"
                variant="primary"
                onClick={closeArticle}
              />
              {hasExternalLink ? (
                <a
                  href={article.href}
                  className="btn btn-ghost"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Origineel openen <span className="arr">↗</span>
                </a>
              ) : null}
            </div>
          </motion.div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
