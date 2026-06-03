import type { Metadata } from "next";

import { LegalPage } from "@/components/legal/LegalPage";
import { LEGAL_TERMS } from "@/constants/legal";

export const metadata: Metadata = {
  title: `${LEGAL_TERMS.titleLead} ${LEGAL_TERMS.titleEm}`,
  description: LEGAL_TERMS.intro,
  alternates: { canonical: "/terms" },
  robots: { index: true, follow: true },
};

export default function TermsPage() {
  return <LegalPage document={LEGAL_TERMS} />;
}
