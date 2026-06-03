import type { ReactElement } from "react";
import { SiMastercard, SiPaypal, SiStripe, SiVisa } from "react-icons/si";

import type { PaymentMethodId } from "@/constants";

function IdealIcon(): ReactElement {
  return (
    <svg
      viewBox="0 0 64 32"
      role="img"
      aria-hidden="true"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect x="0" y="0" width="64" height="32" rx="4" ry="4" fill="#CC0066" />
      <text
        x="32"
        y="22"
        textAnchor="middle"
        fontFamily="Arial, sans-serif"
        fontWeight="700"
        fontSize="14"
        fill="#FFFFFF"
        letterSpacing="0.5"
      >
        iDEAL
      </text>
    </svg>
  );
}

const ICON_MAP: Readonly<Record<PaymentMethodId, () => ReactElement>> = {
  ideal: IdealIcon,
  visa: () => <SiVisa aria-hidden="true" />,
  mastercard: () => <SiMastercard aria-hidden="true" />,
  paypal: () => <SiPaypal aria-hidden="true" />,
  stripe: () => <SiStripe aria-hidden="true" />,
};

interface PaymentIconProps {
  id: PaymentMethodId;
}

export function PaymentIcon({ id }: PaymentIconProps) {
  const Icon = ICON_MAP[id];
  return <Icon />;
}
