import Image from "next/image";

import { siteContent } from "@/data/siteContent";

import { TrustBadges } from "./TrustBadges";

export function Hero() {
  return (
    <section id="top" className="relative isolate overflow-hidden px-4 pb-14 pt-8 sm:px-6 lg:px-8 lg:pb-20 lg:pt-10">
      <div className="mx-auto max-w-7xl overflow-hidden rounded-[2.25rem] shadow-[0_34px_90px_rgba(34,27,22,0.18)]">
        <div className="relative min-h-[720px] px-6 py-8 sm:px-8 lg:px-12 lg:py-12">
          <Image
            src={siteContent.hero.image}
            alt={siteContent.hero.imageAlt}
            fill
            priority
            className="object-cover"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-[linear-gradient(108deg,rgba(26,22,20,0.74)_0%,rgba(26,22,20,0.58)_34%,rgba(26,22,20,0.24)_58%,rgba(26,22,20,0.14)_100%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(185,107,77,0.28),transparent_32%),radial-gradient(circle_at_bottom_right,rgba(245,237,228,0.18),transparent_28%)]" />
          <div className="relative flex min-h-[656px] flex-col justify-between">
            <div className="max-w-3xl pt-6 sm:pt-10 lg:pt-14">
              <p className="mb-5 inline-flex rounded-full border border-white/20 bg-white/14 px-4 py-2 text-sm font-medium text-white shadow-[0_10px_30px_rgba(18,14,11,0.18)] backdrop-blur">
            Personal travel design for curious travelers
          </p>
              <h1 className="font-display text-5xl leading-[0.95] tracking-[-0.03em] text-white sm:text-6xl lg:text-7xl">
            {siteContent.hero.title}
          </h1>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-white/84 sm:text-xl">
            {siteContent.hero.subtitle}
          </p>
              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <a
                  href="#contact"
                  className="inline-flex items-center justify-center rounded-full bg-[color:var(--color-clay)] px-7 py-4 text-base font-semibold text-white transition hover:-translate-y-0.5 hover:bg-[color:var(--color-clay-strong)]"
                  data-analytics-event="hero-primary-cta"
                >
                  {siteContent.hero.primaryCta}
                </a>
                <a
                  href="#experiences"
                  className="inline-flex items-center justify-center rounded-full border border-white/18 bg-white/12 px-7 py-4 text-base font-semibold text-white transition hover:-translate-y-0.5 hover:bg-white/18"
                  data-analytics-event="hero-secondary-cta"
                >
                  {siteContent.hero.secondaryCta}
                </a>
              </div>
            </div>
            <div className="grid gap-6 lg:grid-cols-[1fr_auto] lg:items-end">
              <div className="max-w-4xl">
                <TrustBadges items={siteContent.hero.trustBadges} />
              </div>
              <div className="max-w-sm rounded-[1.5rem] border border-white/18 bg-white/14 p-5 shadow-[0_18px_40px_rgba(18,14,11,0.18)] backdrop-blur">
                <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#f0bfaa]">
                Local support
              </p>
                <p className="mt-2 text-lg font-semibold text-white">
                From Skopje city energy to Ohrid’s calm waterfront and mountain villages in between.
              </p>
                <p className="mt-3 text-sm leading-6 text-white/78">
                  Private planning, honest local advice, and a route that feels relaxed instead of overpacked.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}