import { siteContent } from "@/data/siteContent";

export function TopNav() {
  return (
    <header className="sticky top-0 z-40 border-b border-stone-200/70 bg-[color:var(--color-canvas)]/92 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-4 sm:px-6 lg:px-8">
        <a href="#top" className="flex items-center gap-3 text-sm font-semibold tracking-[0.18em] text-[color:var(--color-forest)] uppercase">
          <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-[color:var(--color-clay)]/15 text-base font-bold tracking-normal text-[color:var(--color-clay)]">
            MP
          </span>
          Marija Petrova
        </a>
        <nav className="hidden items-center gap-6 text-sm text-[color:var(--color-ink-soft)] md:flex">
          {siteContent.navigation.map((item) => (
            <a key={item.href} href={item.href} className="transition hover:text-[color:var(--color-forest)]">
              {item.label}
            </a>
          ))}
        </nav>
        <a
          href="#contact"
          className="inline-flex items-center justify-center rounded-full bg-[color:var(--color-forest)] px-5 py-3 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-[color:var(--color-forest-strong)]"
        >
          Plan my trip
        </a>
      </div>
    </header>
  );
}