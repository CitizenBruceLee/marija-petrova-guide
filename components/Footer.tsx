import { siteContent } from "@/data/siteContent";

export function Footer() {
  return (
    <footer className="border-t border-stone-200 bg-white px-4 py-10 sm:px-6 lg:px-8">
      <div className="mx-auto flex max-w-7xl flex-col gap-6 lg:flex-row lg:items-start lg:justify-between">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[color:var(--color-clay)]">{siteContent.footer.title}</p>
          <p className="mt-3 max-w-xl text-base leading-7 text-[color:var(--color-ink-soft)]">{siteContent.footer.subtitle}</p>
        </div>
        <div className="max-w-xl text-sm leading-6 text-[color:var(--color-ink-soft)]">
          <a href="#privacy" className="font-semibold text-[color:var(--color-forest)] transition hover:text-[color:var(--color-clay)]">
            Privacy policy
          </a>
          <p className="mt-3">{siteContent.footer.copyright}</p>
          <p className="mt-3">{siteContent.contact.disclaimer}</p>
          <details className="mt-4 rounded-[1rem] border border-stone-200 bg-[color:var(--color-canvas)] px-4 py-3">
            <summary className="cursor-pointer font-semibold text-[color:var(--color-forest)]">
              Image credits
            </summary>
            <ul className="mt-3 space-y-3">
              {siteContent.imageCredits.map((credit) => (
                <li key={credit.label}>
                  <span className="font-semibold text-[color:var(--color-ink)]">{credit.label}</span>
                  <span>{" — "}{credit.photographer}, {credit.license}</span>
                  {credit.sourceUrl ? (
                    <>
                      {" "}
                      <a
                        href={credit.sourceUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="font-semibold text-[color:var(--color-forest)] transition hover:text-[color:var(--color-clay)]"
                      >
                        Source
                      </a>
                    </>
                  ) : null}
                </li>
              ))}
            </ul>
          </details>
        </div>
      </div>
    </footer>
  );
}