import { Link } from "@tanstack/react-router";
import { BookOpen, Headphones, Layers, BookMarked, ExternalLink } from "lucide-react";
import { LULU_PAPERBACK_URL } from "@/lib/book-data";

const CARDS = [
  {
    icon: BookOpen,
    title: "Read It Anywhere",
    name: "Digital E-Book",
    desc: "A digital edition for reading on your preferred compatible device.",
    cta: "Choose E-Book",
    to: "/products/top-5-reasons-why-insurance-agents-fail" as const,
    external: false,
  },
  {
    icon: Headphones,
    title: "Take It on the Road",
    name: "Audiobook",
    desc: "Listen during your commute, between appointments, or whenever it fits your day.",
    cta: "Choose Audiobook",
    to: "/products/top-5-reasons-why-insurance-agents-fail" as const,
    external: false,
  },
  {
    icon: Layers,
    title: "Get Both",
    name: "E-Book + Audiobook",
    desc: "Switch between reading and listening whenever you want.",
    cta: "Choose Bundle",
    to: "/products/top-5-reasons-why-insurance-agents-fail" as const,
    external: false,
  },
  {
    icon: BookMarked,
    title: "Keep It on Your Shelf",
    name: "Paperback",
    desc: "A printed edition you can read, mark up, and return to.",
    cta: "Order Paperback",
    to: "/products/top-5-reasons-why-insurance-agents-fail" as const,
    external: true,
  },
];

export function FormatComparison() {
  return (
    <section className="bg-white py-20 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-muted-foreground">
            Your Book
          </p>
          <h2 className="mt-4 font-display text-4xl font-bold tracking-tight sm:text-5xl">
            Your way.
          </h2>
        </div>

        <div className="mt-12 grid gap-4 sm:gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {CARDS.map((c) => {
            const Icon = c.icon;
            const inner = (
              <>
                <Icon className="h-8 w-8 text-foreground/70" />
                <h3 className="mt-6 font-display text-lg font-bold uppercase tracking-tight">
                  {c.title}
                </h3>
                <p className="mt-1 text-xs font-medium uppercase tracking-widest text-muted-foreground">
                  {c.name}
                </p>
                <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{c.desc}</p>
                <span className="mt-auto inline-flex items-center gap-1 pt-6 text-xs font-bold uppercase tracking-widest text-ink">
                  {c.cta}
                  {c.external && <ExternalLink className="h-3 w-3" />}
                </span>
              </>
            );
            return c.external ? (
              <a
                key={c.title}
                href={LULU_PAPERBACK_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex flex-col rounded-lg border border-line bg-soft p-6 transition-all hover:-translate-y-1 hover:border-cyan hover:shadow-xl sm:p-8"
              >
                {inner}
              </a>
            ) : (
              <Link
                key={c.title}
                to={c.to}
                className="group flex flex-col rounded-lg border border-line bg-soft p-6 transition-all hover:-translate-y-1 hover:border-cyan hover:shadow-xl sm:p-8"
              >
                {inner}
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
