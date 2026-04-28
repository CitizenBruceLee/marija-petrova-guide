import { siteContent } from "@/data/siteContent";

export function TestimonialsSection() {
  return (
    <section className="px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
      <div className="mx-auto max-w-7xl rounded-[2rem] bg-[color:var(--color-card)] px-6 py-10 sm:px-8 lg:px-12 lg:py-14">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[color:var(--color-clay)]">
            Social proof
          </p>
          <h2 className="mt-4 font-display text-4xl text-[color:var(--color-ink)] sm:text-5xl">
            Placeholder testimonials ready to be replaced with approved real feedback
          </h2>
        </div>
        <div className="mt-10 grid gap-5 lg:grid-cols-3">
          {siteContent.testimonials.map((testimonial) => (
            <article key={testimonial.quote} className="rounded-[1.5rem] bg-white px-6 py-6 shadow-[0_18px_45px_rgba(43,34,27,0.06)]">
              {testimonial.placeholder ? (
                <span className="rounded-full bg-[color:var(--color-canvas-strong)] px-3 py-1 text-xs font-semibold uppercase tracking-[0.16em] text-[color:var(--color-clay)]">
                  Placeholder testimonial
                </span>
              ) : null}
              <p className="mt-4 text-lg leading-8 text-[color:var(--color-ink)]">“{testimonial.quote}”</p>
              <p className="mt-6 text-sm font-semibold uppercase tracking-[0.16em] text-[color:var(--color-ink-soft)]">
                {testimonial.name} · {testimonial.origin}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}