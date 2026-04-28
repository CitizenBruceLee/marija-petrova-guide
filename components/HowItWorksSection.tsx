import { siteContent } from "@/data/siteContent";

export function HowItWorksSection() {
  return (
    <section id="how-it-works" className="px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
      <div className="mx-auto max-w-7xl rounded-[2rem] bg-[color:var(--color-forest)] px-6 py-10 text-white shadow-[0_28px_70px_rgba(39,61,52,0.22)] sm:px-8 lg:px-12 lg:py-14">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[color:var(--color-card-strong)]/90">
            How it works
          </p>
          <h2 className="mt-4 font-display text-4xl sm:text-5xl">
            A simple process that keeps the trip flexible and personal
          </h2>
        </div>
        <div className="mt-10 grid gap-5 lg:grid-cols-4">
          {siteContent.process.map((step, index) => (
            <div key={step.title} className="rounded-[1.5rem] border border-white/15 bg-white/8 p-6 backdrop-blur">
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[color:var(--color-card-strong)]">
                Step {index + 1}
              </p>
              <h3 className="mt-3 text-xl font-semibold">{step.title}</h3>
              <p className="mt-4 leading-7 text-white/80">{step.description}</p>
            </div>
          ))}
        </div>
        <a
          href="#contact"
          className="mt-10 inline-flex items-center justify-center rounded-full bg-[color:var(--color-card-strong)] px-6 py-4 text-base font-semibold text-[color:var(--color-forest)] transition hover:-translate-y-0.5 hover:bg-white"
          data-analytics-event="how-it-works-cta"
        >
          Start planning your trip
        </a>
      </div>
    </section>
  );
}