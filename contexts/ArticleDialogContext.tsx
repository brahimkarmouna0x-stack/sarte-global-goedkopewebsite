"use client";

import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
  type ReactNode,
} from "react";

import type { Article } from "@/types";

interface ArticleDialogContextValue {
  readonly article: Article | null;
  readonly open: boolean;
  readonly openArticle: (article: Article) => void;
  readonly closeArticle: () => void;
}

const ArticleDialogContext = createContext<ArticleDialogContextValue | null>(
  null,
);

interface ArticleDialogProviderProps {
  readonly children: ReactNode;
}

export function ArticleDialogProvider({ children }: ArticleDialogProviderProps) {
  const [article, setArticle] = useState<Article | null>(null);

  const openArticle = useCallback((next: Article) => {
    setArticle(next);
  }, []);

  const closeArticle = useCallback(() => {
    setArticle(null);
  }, []);

  const value = useMemo<ArticleDialogContextValue>(
    () => ({
      article,
      open: article !== null,
      openArticle,
      closeArticle,
    }),
    [article, openArticle, closeArticle],
  );

  return (
    <ArticleDialogContext.Provider value={value}>
      {children}
    </ArticleDialogContext.Provider>
  );
}

export function useArticleDialog(): ArticleDialogContextValue {
  const ctx = useContext(ArticleDialogContext);
  if (!ctx) {
    throw new Error(
      "useArticleDialog must be used within an <ArticleDialogProvider />",
    );
  }
  return ctx;
}
