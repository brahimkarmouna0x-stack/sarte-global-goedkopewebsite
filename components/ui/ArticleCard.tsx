"use client";

import { useArticleDialog } from "@/contexts/ArticleDialogContext";
import type { ArticleCardProps } from "@/types";

import { ArticleArtwork } from "./ArticleArtwork";
import { Reveal } from "./Reveal";

export function ArticleCard({ article, index }: ArticleCardProps) {
  const { openArticle } = useArticleDialog();

  return (
    <Reveal as="article" className="article" index={index}>
      <button
        type="button"
        className="article-trigger"
        onClick={() => openArticle(article)}
        aria-label={`Open article: ${article.title}`}
      >
        <div className="article-head">
          <ArticleArtwork id={article.artwork} />
        </div>
        <div className="article-body">
          <span className="article-tag">{article.tag}</span>
          <h3 className="article-title">{article.title}</h3>
          <div className="article-meta">
            <span>{article.date}</span>
            <span className="article-meta__read">
              {article.readLabel}{" "}
              <svg
                width="12"
                height="12"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                aria-hidden="true"
              >
                <path d="M5 12h14M13 5l7 7-7 7" />
              </svg>
            </span>
          </div>
        </div>
      </button>
    </Reveal>
  );
}
