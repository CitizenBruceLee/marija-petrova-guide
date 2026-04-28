type TrustBadgesProps = {
  items: readonly string[];
};

export function TrustBadges({ items }: TrustBadgesProps) {
  return (
    <ul className="grid gap-3 text-sm text-[color:var(--color-ink-soft)] sm:grid-cols-2 xl:grid-cols-4">
      {items.map((item) => (
        <li
          key={item}
          className="flex items-center gap-3 rounded-full border border-stone-200 bg-white/80 px-4 py-3 shadow-[0_12px_30px_rgba(40,31,25,0.08)] backdrop-blur"
        >
          <span className="inline-flex h-2.5 w-2.5 rounded-full bg-[color:var(--color-clay)]" />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}