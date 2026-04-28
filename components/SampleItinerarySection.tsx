import { siteContent } from "@/data/siteContent";

export function SampleItinerarySection() {
  return (
    <section className="px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
      <div className="mx-auto max-w-7xl rounded-[2rem] border border-stone-200 bg-[linear-gradient(135deg,rgba(255,255,255,0.95),rgba(235,228,214,0.78))] p-6 shadow-[0_24px_65px_rgba(43,34,27,0.08)] sm:p-8 lg:p-12">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[color:var(--color-clay)]">
            Sample itinerary
          </p>
          <h2 className="mt-4 font-display text-4xl text-[color:var(--color-ink)] sm:text-5xl">
            {siteContent.itinerary.title}
          </h2>
          <p className="mt-5 text-lg leading-8 text-[color:var(--color-ink-soft)]">{siteContent.itinerary.note}</p>
        </div>
        <div className="mt-10 grid gap-4 lg:grid-cols-2 xl:grid-cols-3">
          {siteContent.itinerary.days.map((day) => (
            <div key={day} className="rounded-[1.5rem] bg-white/85 px-5 py-5 shadow-[0_14px_40px_rgba(43,34,27,0.06)]">
              <p className="font-medium leading-7 text-[color:var(--color-ink)]">{day}</p>
            </div>
          ))}
        </div>
        <a
          href="#contact"
          className="mt-10 inline-flex items-center justify-center rounded-full bg-[color:var(--color-clay)] px-6 py-4 text-base font-semibold text-white transition hover:-translate-y-0.5 hover:bg-[color:var(--color-clay-strong)]"
          data-analytics-event="sample-itinerary-cta"
        >
          {siteContent.itinerary.cta}
        </a>
      </div>
    </section>
  );
}