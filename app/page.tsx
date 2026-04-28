import { BenefitsSection } from "@/components/BenefitsSection";
import { ContactSection } from "@/components/ContactSection";
import { ExperiencesSection } from "@/components/ExperiencesSection";
import { FAQSection } from "@/components/FAQSection";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/Hero";
import { HowItWorksSection } from "@/components/HowItWorksSection";
import { IntroSection } from "@/components/IntroSection";
import { PracticalInfoSection } from "@/components/PracticalInfoSection";
import { SampleItinerarySection } from "@/components/SampleItinerarySection";
import { StickyMobileCta } from "@/components/StickyMobileCta";
import { TestimonialsSection } from "@/components/TestimonialsSection";
import { TopNav } from "@/components/TopNav";
import { siteContent } from "@/data/siteContent";

const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Marija Petrova",
  jobTitle: "Local travel designer",
  description:
    "Marija Petrova helps travelers shape personal, authentic trips in North Macedonia with local insight and tailored routes.",
  address: {
    "@type": "PostalAddress",
    addressCountry: "North Macedonia",
  },
  email: siteContent.contact.email,
  knowsLanguage: ["English"],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: siteContent.faqs.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.answer,
    },
  })),
};

export default function HomePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <TopNav />
      <main>
        <Hero />
        <IntroSection />
        <ExperiencesSection />
        <HowItWorksSection />
        <BenefitsSection />
        <SampleItinerarySection />
        <PracticalInfoSection />
        <TestimonialsSection />
        <FAQSection />
        <ContactSection />
        <section id="privacy" className="px-4 pb-24 pt-6 sm:px-6 lg:px-8 lg:pb-28">
          <div className="mx-auto max-w-7xl rounded-[1.75rem] border border-stone-200 bg-white px-6 py-6 shadow-[0_18px_45px_rgba(43,34,27,0.05)] sm:px-8">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[color:var(--color-clay)]">
              {siteContent.contact.privacyTitle}
            </p>
            <p className="mt-4 max-w-4xl leading-7 text-[color:var(--color-ink-soft)]">{siteContent.contact.privacyText}</p>
          </div>
        </section>
      </main>
      <Footer />
      <StickyMobileCta />
    </>
  );
}