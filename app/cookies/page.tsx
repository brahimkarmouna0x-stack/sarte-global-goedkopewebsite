import type { Metadata } from "next";

import { LegalPage } from "@/components/legal/LegalPage";
import { LEGAL_COOKIES } from "@/constants/legal";

export const metadata: Metadata = {
  title: `${LEGAL_COOKIES.titleLead} ${LEGAL_COOKIES.titleEm}`,
  description: LEGAL_COOKIES.intro,
  alternates: { canonical: "/cookies" },
  robots: { index: true, follow: true },
};

export default function CookiesPage() {
  return <LegalPage document={LEGAL_COOKIES} />;
}
