import { Link } from "@tanstack/react-router";
import { ArrowRight, ArrowDown } from "lucide-react";
import { BOOK } from "@/lib/book-data";

export function HomeHero() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-ink text-white">
      {/* ambient cyan glow */}
      <div className="pointer-events-none absolute -right-40 top-1/4 h-[36rem] w-[36rem] rounded-full bg-cyan/20 blur-[120px]" />
      <div className="pointer-events-none absolute left-1/4 top-0 h-px w-1/2 bg-linear-to-r from-transparent via-cyan/40 to-transparent" />

      <div className="relative mx-auto grid min-h-screen max-w-7xl items-center gap-12 px-4 pt-28 pb-20 sm:px-6 lg:grid-cols-2 lg:px-8">
        <div className="max-w-xl">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-cyan">
            {BOOK.creator}
          </p>
          <h1 className="mt-6 font-display text-5xl font-bold leading-[0.95] tracking-tight sm:text-6xl lg:text-7xl">
            Most insurance agents don't see failure coming.
          </h1>
          <p className="mt-6 max-w-md text-base leading-relaxed text-white/70 sm:text-lg">
            Discover the mistakes, habits, and blind spots that can quietly derail
            an insurance career, from a man who's spent decades in the industry.
          </p>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <Link
              to="/products/top-5-reasons-why-insurance-agents-fail"
              className="group inline-flex items-center justify-center gap-2 bg-cyan px-8 py-4 text-xs font-bold uppercase tracking-widest text-ink transition-transform hover:scale-[1.02]"
            >
              Get the Book
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
            <a
              href="#inside"
              className="inline-flex items-center justify-center gap-2 border border-white/30 px-8 py-4 text-xs font-bold uppercase tracking-widest text-white transition-colors hover:border-cyan hover:text-cyan"
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
          <div className="relative">
            <div className="absolute -inset-8 rounded-full bg-cyan/10 blur-3xl" />
            <div className="relative aspect-[3/4] w-64 sm:w-80 lg:w-96">
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
      className={`relative h-full w-full overflow-hidden rounded-r-md rounded-l-sm bg-linear-to-br from-charcoal to-ink shadow-2xl shadow-cyan/10 ${className}`}
      style={{ transform: "perspective(1200px) rotateY(-12deg)" }}
    >
      {/* spine */}
      <div className="absolute left-0 top-0 h-full w-2 bg-black/40" />
      <div className="flex h-full flex-col justify-between p-6 pl-8 text-white">
        <div>
          <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-cyan">
            <span className="text-white">7</span>Steps™
          </p>
        </div>
        <div>
          <p className="font-display text-2xl font-bold leading-tight tracking-tight sm:text-3xl">
            TOP 5 REASONS
            <br />
            WHY INSURANCE
            <br />
            AGENTS FAIL
          </p>
          <div className="mt-4 h-px w-12 bg-cyan" />
          <p className="mt-4 text-xs font-semibold uppercase tracking-widest text-white/70">
            Eric Howard
          </p>
        </div>
        <p className="text-[9px] uppercase tracking-widest text-white/40">
          The 7Steps, LLC
        </p>
      </div>
    </div>
  );
}
