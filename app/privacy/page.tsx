import type { Metadata } from "next";

import { LegalPage } from "@/components/legal/LegalPage";
import { LEGAL_PRIVACY } from "@/constants/legal";

export const metadata: Metadata = {
  title: `${LEGAL_PRIVACY.titleLead} ${LEGAL_PRIVACY.titleEm}`,
  description: LEGAL_PRIVACY.intro,
  alternates: { canonical: "/privacy" },
  robots: { index: true, follow: true },
};

export default function PrivacyPage() {
  return <LegalPage document={LEGAL_PRIVACY} />;
}
