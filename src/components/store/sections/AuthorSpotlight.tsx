import { Link } from "@tanstack/react-router";
import { Quote } from "lucide-react";

export function AuthorSpotlight() {
  return (
    <section className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-16 lg:grid-cols-2 lg:items-center">
          <div className="relative">
            <div className="relative aspect-[4/5] overflow-hidden rounded-lg bg-ink">
              {/* Author portrait placeholder */}
              <div className="flex h-full w-full items-center justify-center bg-linear-to-br from-charcoal to-ink">
                <div className="text-center">
                  <div className="mx-auto flex h-32 w-32 items-center justify-center rounded-full border-2 border-white/20 font-display text-5xl font-bold text-white/80">
                    EH
                  </div>
                  <p className="mt-4 text-xs uppercase tracking-widest text-white/40">
                    Eric Howard
                  </p>
                </div>
              </div>
              <div className="absolute bottom-0 left-0 right-0 bg-linear-to-t from-ink/80 to-transparent p-6">
                <p className="font-display text-lg font-bold text-white">Eric Howard</p>
                <p className="text-xs uppercase tracking-widest text-cyan">Mr. 7</p>
              </div>
            </div>
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-muted-foreground">
              Meet the Author
            </p>
            <h2 className="mt-4 font-display text-4xl font-bold leading-tight tracking-tight sm:text-5xl">
              Meet Eric Howard.
            </h2>
            <p className="mt-2 font-display text-xl font-medium text-muted-foreground">
              The man behind The 7Steps™ System.
            </p>

            <div className="mt-8 space-y-4 text-base leading-relaxed text-muted-foreground">
              <p>Eric Howard didn't build his career by avoiding mistakes. He learned from them.</p>
              <p>
                With more than 30 years of experience in the insurance industry, Eric has
                experienced the frustrations, setbacks, and turning points that many agents know all
                too well.
              </p>
              <p>
                Those experiences helped shape The 7Steps™ System and his approach to teaching
                agents how to work with more structure, confidence, and purpose.
              </p>
              <p>
                Now, in Top 5 Reasons Why Insurance Agents Fail, Eric is sharing the lessons he
                believes agents need to understand before the same mistakes cost them valuable time
                and opportunities.
              </p>
            </div>

            <blockquote className="mt-8 border-l-2 border-foreground/20 pl-6">
              <Quote className="h-6 w-6 text-foreground/40" />
              <p className="mt-2 font-display text-xl font-medium italic text-foreground">
                "I'm teaching you my pitfalls so that you don't fall into the pit."
              </p>
              <cite className="mt-2 block text-xs uppercase tracking-widest text-muted-foreground not-italic">
                — Eric Howard
              </cite>
            </blockquote>

            <Link
              to="/about-eric"
              className="mt-8 inline-flex items-center justify-center border border-ink px-8 py-4 text-xs font-bold uppercase tracking-widest text-ink transition-colors hover:bg-ink hover:text-white"
            >
              Read More About Eric
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
