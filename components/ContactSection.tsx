"use client";

import { FormEvent, useState } from "react";

import { siteContent } from "@/data/siteContent";

type SubmitState = "idle" | "submitted";

export function ContactSection() {
  const [submitState, setSubmitState] = useState<SubmitState>("idle");
  const [error, setError] = useState<string>("");

  const whatsappHref = `https://wa.me/${siteContent.contact.whatsappNumber}?text=${encodeURIComponent(
    "Hi Marija, I would like to plan a trip to North Macedonia."
  )}`;

  function trackEvent(name: string, detail?: Record<string, string | number>) {
    if (typeof window === "undefined") {
      return;
    }

    window.dispatchEvent(new CustomEvent("marija-site-event", { detail: { name, ...detail } }));
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setError("");

    const form = event.currentTarget;
    const formData = new FormData(form);
    const interests = formData.getAll("interests");

    if (interests.length === 0) {
      setError("Please select at least one interest so Marija can shape a relevant first idea.");
      return;
    }

    const payload = Object.fromEntries(formData.entries());
    console.log("Trip request placeholder submit", {
      ...payload,
      interests,
    });
    trackEvent("form-submit", { interests: interests.length });
    form.reset();
    setSubmitState("submitted");
  }

  return (
    <section id="contact" className="px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
      <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="rounded-[2rem] bg-[color:var(--color-forest)] px-6 py-8 text-white shadow-[0_26px_70px_rgba(39,61,52,0.22)] sm:px-8 lg:p-10">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[color:var(--color-card-strong)]/90">
            Contact Marija
          </p>
          <h2 className="mt-4 font-display text-4xl sm:text-5xl">{siteContent.contact.title}</h2>
          <p className="mt-5 text-lg leading-8 text-white/80">{siteContent.contact.subtitle}</p>
          <form className="mt-8 space-y-5" onSubmit={handleSubmit} noValidate>
            <div className="grid gap-4 sm:grid-cols-2">
              <label className="space-y-2">
                <span className="text-sm font-medium text-white/85">Name</span>
                <input name="name" required className="field" autoComplete="name" />
              </label>
              <label className="space-y-2">
                <span className="text-sm font-medium text-white/85">Email</span>
                <input name="email" type="email" required className="field" autoComplete="email" />
              </label>
              <label className="space-y-2">
                <span className="text-sm font-medium text-white/85">WhatsApp / phone number</span>
                <input name="phone" required className="field" autoComplete="tel" />
              </label>
              <label className="space-y-2">
                <span className="text-sm font-medium text-white/85">Travel dates</span>
                <input name="dates" required placeholder="e.g. 12-19 September" className="field" />
              </label>
              <label className="space-y-2">
                <span className="text-sm font-medium text-white/85">Number of travelers</span>
                <input name="travelers" required className="field" inputMode="numeric" />
              </label>
              <label className="space-y-2">
                <span className="text-sm font-medium text-white/85">Travel duration</span>
                <input name="duration" required placeholder="e.g. 7 days" className="field" />
              </label>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              <label className="space-y-2">
                <span className="text-sm font-medium text-white/85">Approximate budget</span>
                <input name="budget" required placeholder="e.g. €1,500 to €2,500" className="field" />
              </label>
              <div className="space-y-3">
                <span className="text-sm font-medium text-white/85">Interests</span>
                <div className="grid grid-cols-2 gap-2 rounded-[1.5rem] bg-white/8 p-3 sm:grid-cols-3">
                  {siteContent.contact.interestOptions.map((option) => (
                    <label key={option} className="flex items-center gap-2 rounded-full border border-white/10 px-3 py-2 text-sm text-white/90">
                      <input type="checkbox" name="interests" value={option} className="accent-[color:var(--color-clay)]" />
                      <span>{option}</span>
                    </label>
                  ))}
                </div>
              </div>
            </div>
            <label className="space-y-2">
              <span className="text-sm font-medium text-white/85">Message</span>
              <textarea
                name="message"
                required
                rows={5}
                placeholder="Tell Marija about the kind of trip you want, the pace you prefer, and any must-see places."
                className="field min-h-36 resize-y"
              />
            </label>
            <label className="flex items-start gap-3 rounded-[1.25rem] bg-white/8 px-4 py-4 text-sm leading-6 text-white/85">
              <input type="checkbox" name="consent" value="yes" required className="mt-1 accent-[color:var(--color-clay)]" />
              <span>{siteContent.contact.consentLabel}</span>
            </label>
            {error ? <p className="rounded-2xl bg-[#fbe6df] px-4 py-3 text-sm font-medium text-[#7f2e18]">{error}</p> : null}
            {submitState === "submitted" ? (
              <p className="rounded-2xl bg-[#e3efe8] px-4 py-3 text-sm font-medium text-[#244738]">
                Thanks. This MVP currently logs the form data to the browser console and is ready for a real API or email workflow.
              </p>
            ) : null}
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
              <button
                type="submit"
                className="inline-flex items-center justify-center rounded-full bg-[color:var(--color-card-strong)] px-7 py-4 text-base font-semibold text-[color:var(--color-forest)] transition hover:-translate-y-0.5 hover:bg-white"
              >
                {siteContent.contact.submitLabel}
              </button>
              <a
                href={whatsappHref}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center rounded-full border border-white/20 px-7 py-4 text-base font-semibold text-white transition hover:bg-white/10"
                onClick={() => trackEvent("whatsapp-click")}
              >
                {siteContent.contact.whatsappLabel}
              </a>
            </div>
          </form>
        </div>
        <aside className="space-y-6 rounded-[2rem] border border-stone-200 bg-white p-6 shadow-[0_24px_60px_rgba(43,34,27,0.08)] sm:p-8">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[color:var(--color-clay)]">
              Direct contact
            </p>
            <h3 className="mt-4 font-display text-3xl text-[color:var(--color-ink)]">Prefer a quicker first message?</h3>
            <p className="mt-4 leading-7 text-[color:var(--color-ink-soft)]">
              Use WhatsApp for a fast conversation or send an email if you already know your dates and the kind of experience you want.
            </p>
          </div>
          <div className="rounded-[1.5rem] bg-[color:var(--color-canvas-strong)] p-5">
            <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[color:var(--color-clay)]">WhatsApp placeholder</p>
            <a
              href={whatsappHref}
              target="_blank"
              rel="noreferrer"
              className="mt-2 block text-xl font-semibold text-[color:var(--color-forest)]"
              onClick={() => trackEvent("whatsapp-click-sidebar")}
            >
              +{siteContent.contact.whatsappNumber}
            </a>
          </div>
          <div className="rounded-[1.5rem] border border-stone-200 p-5">
            <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[color:var(--color-clay)]">Email fallback</p>
            <a
              href={`mailto:${siteContent.contact.email}`}
              className="mt-2 block text-xl font-semibold text-[color:var(--color-forest)]"
              onClick={() => trackEvent("email-click")}
            >
              {siteContent.contact.email}
            </a>
          </div>
          <div className="rounded-[1.5rem] border border-stone-200 p-5">
            <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[color:var(--color-clay)]">What happens next</p>
            <p className="mt-3 leading-7 text-[color:var(--color-ink-soft)]">
              Marija reviews your request, replies with the next steps, and shapes a first route or travel concept around your dates, interests, and budget.
            </p>
          </div>
        </aside>
      </div>
    </section>
  );
}