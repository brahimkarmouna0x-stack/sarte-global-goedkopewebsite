import { WHATSAPP_NUMBER } from "@/constants/contact";

export interface WhatsAppMessageInput {
  readonly name?: string;
  readonly email?: string;
  readonly projectType?: string;
  readonly message: string;
}

function buildMessage({
  name,
  email,
  projectType,
  message,
}: WhatsAppMessageInput): string {
  const lines: string[] = ["Hallo Sarte Global,"];

  const trimmedName = name?.trim();
  lines.push(
    trimmedName
      ? `Mijn naam is ${trimmedName}.`
      : "Ik ben een potentiële klant.",
  );

  const trimmedType = projectType?.trim();
  lines.push(
    trimmedType
      ? `Ik ben geïnteresseerd in: ${trimmedType}.`
      : "Ik ben geïnteresseerd in een nieuw project.",
  );

  const trimmedEmail = email?.trim();
  if (trimmedEmail) {
    lines.push(`Je kunt mij bereiken op ${trimmedEmail}.`);
  }

  lines.push("", "Bericht:", message.trim());

  return lines.join("\n");
}

export function buildWhatsAppUrl(input: WhatsAppMessageInput): string {
  const text = encodeURIComponent(buildMessage(input));
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${text}`;
}
