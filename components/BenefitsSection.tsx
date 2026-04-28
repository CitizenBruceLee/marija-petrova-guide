import Image from "next/image";

import { siteContent } from "@/data/siteContent";

export function BenefitsSection() {
  return (
    <section className="px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
      <div className="mx-auto max-w-7xl">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[color:var(--color-clay)]">
            Why travel with Marija
          </p>
          <h2 className="mt-4 font-display text-4xl text-[color:var(--color-ink)] sm:text-5xl">
            Local knowledge, thoughtful pacing, and travel ideas shaped around real interests
          </h2>
        </div>
        <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {siteContent.benefits.map((benefit) => (
            <article
              key={benefit.title}
              className="overflow-hidden rounded-[1.75rem] border border-stone-200 bg-[linear-gradient(180deg,rgba(255,255,255,0.92),rgba(247,241,233,0.92))] shadow-[0_18px_45px_rgba(43,34,27,0.06)]"
            >
              <div className="relative aspect-[16/7.5] overflow-hidden bg-[color:var(--color-card)]">
                <Image
                  src={benefit.image}
                  alt={benefit.imageAlt}
                  fill
                  className="object-cover transition duration-500 hover:scale-[1.03]"
                  style={{ objectPosition: benefit.imagePosition ?? "center" }}
                  sizes="(max-width: 1280px) 50vw, 30vw"
                />
                <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(34,27,22,0.02)_0%,rgba(34,27,22,0.28)_100%)]" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-[color:var(--color-ink)]">{benefit.title}</h3>
                <p className="mt-3 leading-7 text-[color:var(--color-ink-soft)]">{benefit.description}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}