import { AUDIENCES } from "@/lib/book-data";
import { Link } from "@tanstack/react-router";

export function AudienceCards() {
  return (
    <section className="bg-soft py-20 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="font-display text-4xl font-bold leading-tight tracking-tight text-balance sm:text-5xl">
            Whatever stage you're at, there's something here worth thinking about.
          </h2>
        </div>

        <div className="mt-12 grid gap-4 sm:gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {AUDIENCES.map((a, i) => (
            <Link
              key={a.title}
              to="/products/top-5-reasons-why-insurance-agents-fail"
              className="group flex flex-col rounded-lg border border-line bg-white p-6 transition-all hover:-translate-y-1 hover:border-cyan hover:shadow-xl sm:p-8"
            >
              <span className="font-display text-2xl font-bold text-muted-foreground/50 sm:text-3xl">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="mt-3 font-display text-base font-bold uppercase tracking-tight sm:text-lg sm:mt-4">
                {a.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground sm:mt-3">{a.body}</p>
              <span className="mt-auto pt-5 text-xs font-bold uppercase tracking-widest text-ink transition-colors group-hover:text-cyan sm:pt-6">
                Get the Book →
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
