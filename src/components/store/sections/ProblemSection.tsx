import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";

const POINTS = [
  "Working hard without a clear direction.",
  "Repeating habits that aren't helping.",
  "Depending on luck instead of consistency.",
  "Missing the bigger picture.",
  "Not recognizing what's holding you back.",
];

export function ProblemSection() {
  return (
    <section className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-16 lg:grid-cols-2 lg:items-center">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-muted-foreground">
              The Problem
            </p>
            <h2 className="mt-4 font-display text-4xl font-bold leading-tight tracking-tight text-balance sm:text-5xl">
              You can give this business everything you've got and still feel stuck.
            </h2>
            <div className="mt-8 space-y-4 text-base leading-relaxed text-muted-foreground">
              <p>You got licensed. You learned the products. You put in the hours.</p>
              <p>
                But nobody really prepared you for the habits, decisions, and mistakes that can make
                this business harder than it needs to be.
              </p>
              <p>
                Eric Howard has watched agents come into the industry with enormous potential, only
                to struggle with challenges they never saw coming.
              </p>
              <p className="font-medium text-foreground">That's why he wrote this book.</p>
            </div>
            <Link
              to="/products/top-5-reasons-why-insurance-agents-fail"
              className="mt-8 inline-flex items-center gap-2 text-sm font-bold uppercase tracking-widest text-ink transition-colors hover:text-cyan"
            >
              Discover What's Inside
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="grid gap-4">
            {POINTS.map((p, i) => (
              <div
                key={i}
                className="flex items-center gap-4 border-l-2 border-foreground/15 bg-soft p-5 transition-all hover:translate-x-1 hover:border-cyan"
              >
                <span className="font-display text-2xl font-bold text-muted-foreground/60">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <p className="font-medium text-foreground">{p}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
