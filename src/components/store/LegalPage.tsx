interface Section {
  h: string;
  p: string;
}

export function LegalPage({
  title,
  intro,
  sections,
}: {
  title: string;
  intro: string;
  sections: Section[];
}) {
  return (
    <div className="pt-16">
      <section className="bg-ink py-20 text-white sm:py-28">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-cyan">Legal</p>
          <h1 className="mt-4 font-display text-4xl font-bold tracking-tight sm:text-5xl">
            {title}
          </h1>
          <p className="mt-4 text-base text-white/70">{intro}</p>
        </div>
      </section>

      <section className="bg-soft py-16 sm:py-24">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <div className="space-y-10">
            {sections.map((s, i) => (
              <div key={i}>
                <h2 className="font-display text-xl font-bold uppercase tracking-tight">{s.h}</h2>
                <p className="mt-3 text-base leading-relaxed text-muted-foreground">{s.p}</p>
              </div>
            ))}
          </div>
          <div className="mt-12 border-t border-line pt-8 text-sm text-muted-foreground">
            <p>© 2026 The 7Steps, LLC. All Rights Reserved.</p>
          </div>
        </div>
      </section>
    </div>
  );
}
