import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Pagina niet gevonden",
  description: "De pagina die u zoekt bestaat niet of is verplaatst.",
  robots: { index: false, follow: true },
};

export default function NotFound() {
  return (
    <main className="grid min-h-screen place-items-center px-4" id="top">
      <div className="text-center">
        <p className="font-[family-name:var(--font-display)] text-[clamp(100px,20vw,200px)] font-bold leading-none text-(--color-accent) select-none">
          404
        </p>
        <h1 className="font-[family-name:var(--font-display)] text-3xl font-bold mt-6 mb-3">
          Pagina niet gevonden
        </h1>
        <p className="text-(--color-text-secondary) max-w-md mx-auto mb-8">
          Deze pagina bestaat niet of is verplaatst. Geen zorgen — u kunt terug naar de
          homepage of contact met ons opnemen.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Link href="/" className="btn btn-primary btn-large">
            Terug naar home
          </Link>
          <Link href="/contact" className="btn btn-ghost btn-large">
            Neem contact op
          </Link>
        </div>
      </div>
    </main>
  );
}
