"use client";

import { useState } from "react";

import { siteContent } from "@/data/siteContent";

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number>(0);

  return (
    <section id="faq" className="px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
      <div className="mx-auto max-w-4xl">
        <div className="text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[color:var(--color-clay)]">
            FAQ
          </p>
          <h2 className="mt-4 font-display text-4xl text-[color:var(--color-ink)] sm:text-5xl">
            Clear answers before you send a trip request
          </h2>
        </div>
        <div className="mt-10 space-y-4">
          {siteContent.faqs.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <article key={faq.question} className="overflow-hidden rounded-[1.5rem] border border-stone-200 bg-white shadow-[0_14px_40px_rgba(43,34,27,0.05)]">
                <h3>
                  <button
                    type="button"
                    className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left text-lg font-semibold text-[color:var(--color-ink)]"
                    aria-expanded={isOpen}
                    aria-controls={`faq-panel-${index}`}
                    onClick={() => setOpenIndex(isOpen ? -1 : index)}
                  >
                    <span>{faq.question}</span>
                    <span className="text-2xl text-[color:var(--color-clay)]">{isOpen ? "−" : "+"}</span>
                  </button>
                </h3>
                <div
                  id={`faq-panel-${index}`}
                  className={isOpen ? "border-t border-stone-200 px-6 py-5" : "hidden"}
                >
                  <p className="leading-7 text-[color:var(--color-ink-soft)]">{faq.answer}</p>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}