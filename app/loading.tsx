export default function Loading() {
  return (
    <main className="grid min-h-screen place-items-center px-4" id="top">
      <div className="flex flex-col items-center gap-6" role="status" aria-label="Pagina laden">
        <div
          className="w-10 h-10 rounded-full border-2 border-(--color-border-strong) border-t-(--color-accent) animate-spin"
          aria-hidden="true"
        />
        <p className="text-(--color-text-secondary) text-sm">Even geduld alstublieft…</p>
      </div>
    </main>
  );
}
