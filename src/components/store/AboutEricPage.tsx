import { Link } from "@tanstack/react-router";
import { Quote } from "lucide-react";
import { FinalCta } from "./sections/FinalCta";

const TIMELINE = [
  {
    h: "Entering the Industry",
    p: "Eric Howard began his career in insurance sales, learning the products, the pitches, and the realities of the business from the ground up.",
  },
  {
    h: "The Obstacles",
    p: "Like many agents, he experienced the frustrations, setbacks, and dry spells that test whether someone stays in the business or walks away.",
  },
  {
    h: "What Those Experiences Taught Him",
    p: "He paid attention to the patterns behind the struggles — not just his own, but the agents around him — and started to see what separated the ones who grew from the ones who stalled.",
  },
  {
    h: "The 7Steps™ System",
    p: "Those lessons became the foundation of The 7Steps™ System, a structured approach to helping agents work with more clarity, consistency, and purpose.",
  },
  {
    h: "Teaching Agents",
    p: "Eric dedicated himself to training agents, sharing what he learned so others could avoid the pitfalls that cost him time and momentum early in his career.",
  },
  {
    h: "Why He Wrote This Book",
    p: "Top 5 Reasons Why Insurance Agents Fail distills the lessons he believes agents need to understand before the same mistakes cost them valuable time and opportunities.",
  },
  {
    h: "What He Hopes Readers Take Away",
    p: "Not a guarantee of success, but a better perspective — the ability to recognize what's holding them back and make better decisions about their business.",
  },
];

export function AboutEricPage() {
  return (
    <div className="pt-16">
      {/* Hero */}
      <section className="relative overflow-hidden bg-ink py-24 text-white sm:py-32">
        <div className="pointer-events-none absolute -right-40 top-1/4 h-[36rem] w-[36rem] rounded-full bg-cyan/15 blur-[120px]" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-cyan">
                Meet the Author
              </p>
              <h1 className="mt-4 font-display text-5xl font-bold leading-tight tracking-tight sm:text-6xl">
                The experience behind the words.
              </h1>
              <p className="mt-6 max-w-md text-base leading-relaxed text-white/70">
                Eric Howard has spent more than 30 years in the insurance industry. This is the
                story behind the book.
              </p>
            </div>
            <div className="flex justify-center">
              <div className="relative aspect-[4/5] w-full max-w-sm overflow-hidden rounded-lg bg-linear-to-br from-charcoal to-ink">
                <div className="flex h-full w-full items-center justify-center">
                  <div className="text-center">
                    <div className="mx-auto flex h-40 w-40 items-center justify-center rounded-full border-2 border-cyan/40 font-display text-6xl font-bold text-cyan">
                      EH
                    </div>
                    <p className="mt-4 text-xs uppercase tracking-widest text-white/40">
                      Eric Howard
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quote */}
      <section className="bg-white py-16">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <blockquote className="border-l-2 border-cyan pl-8">
            <Quote className="h-8 w-8 text-cyan" />
            <p className="mt-4 font-display text-2xl font-medium italic leading-snug text-foreground sm:text-3xl">
              "I'm teaching you my pitfalls so that you don't fall into the pit."
            </p>
            <cite className="mt-4 block text-xs uppercase tracking-widest text-muted-foreground not-italic">
              — Eric Howard
            </cite>
          </blockquote>
        </div>
      </section>

      {/* Story timeline */}
      <section className="bg-soft py-24 sm:py-32">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <div className="space-y-12">
            {TIMELINE.map((t, i) => (
              <div key={i} className="border-l-2 border-line pl-8">
                <span className="font-display text-3xl font-bold text-cyan">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-2 font-display text-xl font-bold uppercase tracking-tight">
                  {t.h}
                </h3>
                <p className="mt-3 text-base leading-relaxed text-muted-foreground">{t.p}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <FinalCta />
    </div>
  );
}
