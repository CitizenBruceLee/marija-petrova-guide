export function StickyMobileCta() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-50 border-t border-stone-200 bg-white/95 px-4 py-3 shadow-[0_-16px_32px_rgba(43,34,27,0.10)] backdrop-blur md:hidden">
      <a
        href="#contact"
        className="inline-flex w-full items-center justify-center rounded-full bg-[color:var(--color-clay)] px-6 py-4 text-base font-semibold text-white"
      >
        Plan my trip with Marija
      </a>
    </div>
  );
}