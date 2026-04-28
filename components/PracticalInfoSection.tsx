import { siteContent } from "@/data/siteContent";

export function PracticalInfoSection() {
  return (
    <section className="px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
      <div className="mx-auto max-w-7xl">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[color:var(--color-clay)]">
            Practical information
          </p>
          <h2 className="mt-4 font-display text-4xl text-[color:var(--color-ink)] sm:text-5xl">
            Quick answers for timing, style, and how to shape the trip
          </h2>
        </div>
        <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {siteContent.practicalInfo.map((item) => (
            <article key={item.title} className="rounded-[1.5rem] border border-stone-200 bg-white px-6 py-6 shadow-[0_18px_45px_rgba(43,34,27,0.05)]">
              <h3 className="text-xl font-semibold text-[color:var(--color-ink)]">{item.title}</h3>
              <p className="mt-3 leading-7 text-[color:var(--color-ink-soft)]">{item.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}