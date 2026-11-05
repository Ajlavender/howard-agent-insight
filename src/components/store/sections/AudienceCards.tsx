import { AUDIENCES } from "@/lib/book-data";
import { Link } from "@tanstack/react-router";

export function AudienceCards() {
  return (
    <section className="bg-soft py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="font-display text-4xl font-bold leading-tight tracking-tight text-balance sm:text-5xl">
            Whatever stage you're at, there's something here worth thinking about.
          </h2>
        </div>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {AUDIENCES.map((a, i) => (
            <Link
              key={a.title}
              to="/products/top-5-reasons-why-insurance-agents-fail"
              className="group flex flex-col rounded-lg border border-line bg-white p-8 transition-all hover:-translate-y-1 hover:border-cyan hover:shadow-xl"
            >
              <span className="font-display text-3xl font-bold text-muted-foreground/50">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="mt-4 font-display text-lg font-bold uppercase tracking-tight">
                {a.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{a.body}</p>
              <span className="mt-auto pt-6 text-xs font-bold uppercase tracking-widest text-ink transition-colors group-hover:text-cyan">
                Get the Book →
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
