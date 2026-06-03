import { SITE } from "@/constants";
import Link from "next/link";
import type { ReactElement } from "react";

export function Logo(): ReactElement {
    return (
        <Link
            href="/"
            className="brand"
            aria-label={`${SITE.brandName} home`}
        >
            {SITE.brandName}
            <span>{SITE.brandAccent}</span>
        </Link>
    );
}