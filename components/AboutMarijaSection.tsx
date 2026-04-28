import Image from "next/image";

import { siteContent } from "@/data/siteContent";

export function AboutMarijaSection() {
  return (
    <section id="about-marija" className="px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
      <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[color:var(--color-clay)]">
            About Marija
          </p>
          <h2 className="mt-4 font-display text-4xl text-[color:var(--color-ink)] sm:text-5xl">
            {siteContent.about.title}
          </h2>
          <div className="mt-6 space-y-5 text-lg leading-8 text-[color:var(--color-ink-soft)]">
            {siteContent.about.description.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
          <dl className="mt-8 grid gap-4 sm:grid-cols-2">
            {siteContent.about.facts.map((fact) => (
              <div key={fact.label} className="rounded-[1.5rem] border border-stone-200 bg-white px-5 py-5 shadow-[0_18px_45px_rgba(43,34,27,0.05)]">
                <dt className="text-sm font-semibold uppercase tracking-[0.16em] text-[color:var(--color-clay)]">
                  {fact.label}
                </dt>
                <dd className="mt-2 text-base font-medium leading-7 text-[color:var(--color-ink)]">{fact.value}</dd>
              </div>
            ))}
          </dl>
          <div className="mt-8 flex flex-wrap gap-3">
            {siteContent.about.miniFacts.map((fact) => (
              <span key={fact} className="rounded-full bg-[color:var(--color-canvas-strong)] px-4 py-2 text-sm font-semibold text-[color:var(--color-forest)]">
                {fact}
              </span>
            ))}
          </div>
        </div>
        <div className="overflow-hidden rounded-[2rem] border border-stone-200 bg-white p-3 shadow-[0_24px_60px_rgba(43,34,27,0.08)]">
          <Image
            src={siteContent.about.image}
            alt={siteContent.about.imageAlt}
            width={780}
            height={980}
            className="h-full w-full rounded-[1.5rem] object-cover"
            sizes="(max-width: 1024px) 100vw, 38vw"
          />
        </div>
      </div>
    </section>
  );
}