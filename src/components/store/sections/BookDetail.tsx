import { SPECS } from "@/lib/book-data";
import { BookCoverMock } from "./HomeHero";

export function BookDetail() {
  return (
    <section className="bg-charcoal py-24 text-white sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-16 lg:grid-cols-2 lg:items-center">
          <div className="flex justify-center">
            <div className="relative aspect-[3/4] w-full max-w-sm">
              <div className="absolute -inset-6 rounded-full bg-cyan/10 blur-3xl" />
              <BookCoverMock />
            </div>
          </div>

          <div>
            <h2 className="font-display text-4xl font-bold leading-tight tracking-tight text-balance sm:text-5xl">
              Built for the agent who wants more than another pep talk.
            </h2>
            <p className="mt-6 text-base leading-relaxed text-white/70">
              Straightforward perspective from someone who has spent decades learning,
              teaching, and working in the insurance industry.
            </p>

            <div className="mt-10 grid grid-cols-2 gap-px overflow-hidden rounded-lg bg-white/10">
              {SPECS.map((s) => (
                <div key={s.label} className="bg-charcoal p-5">
                  <p className="text-[10px] font-semibold uppercase tracking-widest text-cyan">
                    {s.label}
                  </p>
                  <p className="mt-1 font-display text-lg font-bold">{s.value}</p>
                </div>
              ))}
            </div>

            <div className="mt-8 rounded-lg border border-white/10 p-6">
              <p className="text-xs font-semibold uppercase tracking-widest text-cyan">
                Look Inside
              </p>
              <p className="mt-2 text-sm text-white/60">
                Authentic interior pages will appear here when approved spreads are available.
                Until then, browse the cover and format gallery on the product page.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
