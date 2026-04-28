import Image from "next/image";

import { siteContent } from "@/data/siteContent";

export function IntroSection() {
  return (
    <section className="px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
      <div className="mx-auto grid max-w-7xl gap-10 rounded-[2rem] bg-white p-6 shadow-[0_24px_60px_rgba(43,34,27,0.08)] sm:p-8 lg:grid-cols-[0.85fr_1.15fr] lg:items-center lg:p-12">
        <div className="overflow-hidden rounded-[1.75rem] border border-stone-200 bg-[color:var(--color-card)]">
          <Image
            src={siteContent.intro.image}
            alt={siteContent.intro.imageAlt}
            width={720}
            height={840}
            className="h-full w-full object-cover"
            sizes="(max-width: 1024px) 100vw, 36vw"
          />
        </div>
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[color:var(--color-clay)]">
            {siteContent.intro.eyebrow}
          </p>
          <h2 className="mt-4 font-display text-4xl leading-tight text-[color:var(--color-ink)] sm:text-5xl">
            {siteContent.intro.title}
          </h2>
          <p className="mt-5 text-lg leading-8 text-[color:var(--color-ink-soft)]">
            {siteContent.intro.description}
          </p>
          <div className="mt-8 grid gap-4 sm:grid-cols-3">
            {siteContent.intro.highlights.map((highlight) => (
              <div key={highlight} className="rounded-[1.5rem] bg-[color:var(--color-canvas-strong)] px-5 py-4 text-center text-sm font-semibold text-[color:var(--color-forest)]">
                {highlight}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}