import { Link } from "@tanstack/react-router";
import { THEMES } from "@/lib/book-data";

export function InsideTheBook() {
  return (
    <section id="inside" className="bg-ink py-20 text-white sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-white/40">
            Between the Covers
          </p>
          <h2 className="mt-4 font-display text-4xl font-bold leading-tight tracking-tight text-balance sm:text-5xl">
            53 pages that might change how you see your business.
          </h2>
          <p className="mt-6 text-base leading-relaxed text-white/70">
            This isn't another textbook about insurance products. It's a closer look at why agents
            struggle and the decisions that can make the difference between staying stuck and
            building a better foundation.
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:gap-8 md:grid-cols-3">
          {THEMES.map((t) => (
            <div
              key={t.n}
              className="group border-t border-white/10 pt-8 transition-colors hover:border-cyan"
            >
              <p className="font-display text-6xl font-bold text-white/15 transition-colors group-hover:text-cyan">
                {t.n}
              </p>
              <h3 className="mt-4 font-display text-xl font-bold uppercase tracking-tight">
                {t.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-white/60">{t.body}</p>
            </div>
          ))}
        </div>

        <p className="mt-12 max-w-2xl text-sm text-white/40">
          The book addresses five reasons. These themes are an editorial summary of the book's
          subject matter, not official chapter titles.
        </p>

        <Link
          to="/products/top-5-reasons-why-insurance-agents-fail"
          className="mt-8 inline-flex items-center justify-center bg-cyan px-8 py-4 text-xs font-bold uppercase tracking-widest text-ink transition-transform hover:scale-[1.02]"
        >
          Get Your Copy
        </Link>
      </div>
    </section>
  );
}
