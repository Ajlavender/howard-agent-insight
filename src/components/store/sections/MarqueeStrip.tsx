const ITEMS = ["Less Guesswork", "Better Habits", "Stronger Foundations", "Learn From Experience"];

export function MarqueeStrip() {
  const row = [...ITEMS, ...ITEMS, ...ITEMS, ...ITEMS];
  return (
    <section className="overflow-hidden bg-ink py-5 sm:py-6">
      <div className="marquee-track flex w-max items-center gap-6 whitespace-nowrap sm:gap-8">
        {row.map((item, i) => (
          <div key={i} className="flex items-center gap-8">
            <span className="font-display text-xl font-bold uppercase tracking-tight text-white sm:text-2xl sm:text-3xl">
              {item}
            </span>
            <span className="text-white/25">•</span>
          </div>
        ))}
      </div>
    </section>
  );
}
