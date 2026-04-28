import Image from "next/image";

import { siteContent } from "@/data/siteContent";

export function ExperiencesSection() {
  return (
    <section id="experiences" className="px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[color:var(--color-clay)]">
              Example experiences
            </p>
            <h2 className="mt-4 font-display text-4xl text-[color:var(--color-ink)] sm:text-5xl">
              Travel themes Marija can shape into a personal route
            </h2>
          </div>
          <p className="max-w-xl text-base leading-7 text-[color:var(--color-ink-soft)]">
            These are inspiration points rather than fixed packages. Each idea can be adapted to your pace, season, and preferred style of travel.
          </p>
        </div>
        <div className="mt-10 grid gap-6 lg:grid-cols-2 xl:grid-cols-3">
          {siteContent.experiences.map((experience) => (
            <article
              key={experience.title}
              className="group overflow-hidden rounded-[1.75rem] border border-stone-200 bg-white shadow-[0_22px_55px_rgba(43,34,27,0.08)] transition hover:-translate-y-1"
            >
              <div className="relative aspect-[5/4] overflow-hidden bg-[color:var(--color-card)]">
                <Image
                  src={experience.image}
                  alt={experience.imageAlt}
                  width={800}
                  height={640}
                  className="h-full w-full object-cover transition duration-500 group-hover:scale-[1.03]"
                  sizes="(max-width: 1280px) 50vw, 30vw"
                />
                <div className="absolute left-4 top-4 rounded-full bg-[color:var(--color-card-strong)]/90 px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-[color:var(--color-clay)] backdrop-blur">
                  {experience.tag}
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-start justify-between gap-4">
                  <h3 className="text-2xl font-semibold text-[color:var(--color-ink)]">{experience.title}</h3>
                  {experience.duration ? (
                    <span className="rounded-full bg-[color:var(--color-canvas-strong)] px-3 py-1 text-xs font-semibold uppercase tracking-[0.12em] text-[color:var(--color-forest)]">
                      {experience.duration}
                    </span>
                  ) : null}
                </div>
                <p className="mt-4 leading-7 text-[color:var(--color-ink-soft)]">{experience.description}</p>
                <div className="mt-6 flex flex-wrap gap-2">
                  {experience.tags.map((tag) => (
                    <span key={tag} className="rounded-full border border-stone-200 px-3 py-1 text-sm text-[color:var(--color-ink-soft)]">
                      {tag}
                    </span>
                  ))}
                </div>
                <a
                  href="#contact"
                  className="mt-6 inline-flex items-center font-semibold text-[color:var(--color-forest)] transition hover:text-[color:var(--color-clay)]"
                  data-analytics-event={`experience-${experience.title.toLowerCase().replaceAll(" ", "-")}`}
                >
                  Ask Marija to shape this idea
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}