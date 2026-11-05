import { Link } from "@tanstack/react-router";
import { BookCoverMock } from "./HomeHero";

export function FinalCta() {
  return (
    <section className="relative overflow-hidden bg-ink py-20 text-white sm:py-32">
      <div className="pointer-events-none absolute left-1/2 top-0 h-px w-1/2 -translate-x-1/2 bg-linear-to-r from-transparent via-white/15 to-transparent" />
      <div className="pointer-events-none absolute -left-20 bottom-0 h-96 w-96 rounded-full bg-cyan/5 blur-[120px]" />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        <div className="grid items-center gap-16 lg:grid-cols-2">
          <div className="flex justify-center order-2 lg:order-1">
            <div className="aspect-[3/4] w-64 sm:w-72">
              <BookCoverMock />
            </div>
          </div>
          <div className="order-1 lg:order-2">
            <h2 className="font-display text-4xl font-bold leading-tight tracking-tight text-balance sm:text-5xl lg:text-6xl">
              The next lesson is yours to learn.
            </h2>
            <p className="mt-6 max-w-md text-base leading-relaxed text-white/70">
              You don't have to figure everything out the hard way. Get Eric Howard's book and take
              a closer look at the decisions, habits, and blind spots that shape an insurance
              career.
            </p>
            <Link
              to="/products/top-5-reasons-why-insurance-agents-fail"
              className="mt-8 inline-flex items-center justify-center bg-cyan px-10 py-4 text-xs font-bold uppercase tracking-widest text-ink transition-transform hover:scale-[1.02]"
            >
              Get the Book
            </Link>
            <p className="mt-4 text-xs uppercase tracking-widest text-white/50">
              Available in Digital, Audio & Paperback Formats
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
