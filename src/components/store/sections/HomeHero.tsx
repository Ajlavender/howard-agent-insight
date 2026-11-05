import { Link } from "@tanstack/react-router";
import { ArrowRight, ArrowDown } from "lucide-react";
import { BOOK, BOOK_COVER_FRONT } from "@/lib/book-data";

export function HomeHero() {
  return (
    <section className="relative min-h-dvh overflow-hidden bg-ink text-white">
      {/* ambient cyan glow */}
      <div className="pointer-events-none absolute -right-40 top-1/4 h-[36rem] w-[36rem] rounded-full bg-cyan/10 blur-[140px]" />
      <div className="pointer-events-none absolute left-1/4 top-0 h-px w-1/2 bg-linear-to-r from-transparent via-white/15 to-transparent" />

      <div className="relative mx-auto grid min-h-dvh max-w-7xl items-center gap-10 px-5 pt-28 pb-24 sm:gap-12 sm:px-6 lg:grid-cols-2 lg:px-8">
        <div className="max-w-xl">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-white/50">
            {BOOK.creator}
          </p>
          <h1 className="mt-6 font-display text-[2.6rem] font-bold leading-[0.98] tracking-tight text-balance sm:text-6xl lg:text-7xl">
            Most insurance agents don't see failure coming.
          </h1>
          <p className="mt-6 max-w-md text-base leading-relaxed text-white/70 sm:text-lg">
            Discover the mistakes, habits, and blind spots that can quietly derail an insurance
            career, from a man who's spent decades in the industry.
          </p>

          <div className="mt-9 flex flex-col gap-3 sm:mt-10 sm:flex-row sm:gap-4">
            <Link
              to="/products/top-5-reasons-why-insurance-agents-fail"
              className="group inline-flex min-h-12 flex-1 items-center justify-center gap-2 bg-cyan px-8 py-4 text-xs font-bold uppercase tracking-widest text-ink transition-transform hover:scale-[1.02]"
            >
              Get the Book
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
            <a
              href="#inside"
              className="inline-flex min-h-12 items-center justify-center gap-2 border border-white/30 px-8 py-4 text-xs font-bold uppercase tracking-widest text-white transition-colors hover:border-cyan hover:text-cyan"
            >
              See What's Inside
            </a>
          </div>

          <div className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-2 text-xs uppercase tracking-widest text-white/50">
            <span>Digital E-Book</span>
            <span className="text-cyan">•</span>
            <span>Audiobook</span>
            <span className="text-cyan">•</span>
            <span>Paperback</span>
          </div>
        </div>

        {/* Book visual */}
        <div className="relative flex items-center justify-center">
          <div className="relative w-full max-w-[20rem] sm:max-w-sm">
            <div className="absolute -inset-8 rounded-full bg-white/5 blur-3xl" />
            <div className="relative aspect-[3/4] w-64 max-w-full sm:w-80 lg:w-96">
              <BookCoverMock />
            </div>
          </div>
        </div>
      </div>

      <a
        href="#purchase"
        className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 text-white/50 lg:flex"
      >
        <span className="text-[10px] uppercase tracking-[0.3em]">Scroll to discover</span>
        <ArrowDown className="h-4 w-4 animate-bounce" />
      </a>
    </section>
  );
}

export function BookCoverMock({ className = "" }: { className?: string }) {
  return (
    <div
      className={`relative h-full w-full overflow-hidden rounded-r-md rounded-l-sm shadow-2xl shadow-cyan/10 ${className}`}
      style={{ transform: "perspective(1200px) rotateY(-12deg)" }}
    >
      {/* spine */}
      <div className="absolute left-0 top-0 z-10 h-full w-2 bg-black/40" />
      <img
        src={BOOK_COVER_FRONT}
        alt="Top 5 Reasons Why Insurance Agents Fail — book cover"
        className="h-full w-full object-cover"
        loading="eager"
      />
    </div>
  );
}
