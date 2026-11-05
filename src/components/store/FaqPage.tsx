import { useState } from "react";
import { Plus, Minus } from "lucide-react";
import { FAQS } from "@/lib/book-data";

export function FaqPage() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <div className="pt-16">
      <section className="bg-ink py-20 text-white sm:py-28">
        <div className="mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-cyan">FAQ</p>
          <h1 className="mt-4 font-display text-4xl font-bold tracking-tight sm:text-5xl">
            Frequently Asked Questions
          </h1>
          <p className="mt-4 text-base text-white/70">
            Everything you need to know about the book, formats, delivery, and purchasing.
          </p>
        </div>
      </section>

      <section className="bg-soft py-16 sm:py-24">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <div className="divide-y divide-line border-y border-line">
            {FAQS.map((f, i) => {
              const isOpen = open === i;
              return (
                <div key={i}>
                  <button
                    onClick={() => setOpen(isOpen ? null : i)}
                    className="flex w-full items-center justify-between gap-4 py-5 text-left"
                  >
                    <span className="font-display text-base font-semibold text-foreground">{f.q}</span>
                    <span className="shrink-0 text-cyan">
                      {isOpen ? <Minus className="h-5 w-5" /> : <Plus className="h-5 w-5" />}
                    </span>
                  </button>
                  <div className={`grid transition-all duration-300 ${isOpen ? "grid-rows-[1fr] pb-5" : "grid-rows-[0fr]"}`}>
                    <p className="overflow-hidden text-sm leading-relaxed text-muted-foreground">{f.a}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
