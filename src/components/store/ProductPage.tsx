import { useEffect, useState } from "react";
import { Link } from "@tanstack/react-router";
import { Check, ExternalLink, ShoppingBag, ChevronRight, Star } from "lucide-react";
import {
  resolveFormats,
  formatPrice,
  writeCheckoutSelection,
  type ResolvedFormat,
} from "@/lib/catalog";
import { BOOK, BOOK_COVER_FRONT, BOOK_COVER_BACK, SPECS, type FormatKey } from "@/lib/book-data";
import { useCart } from "@/lib/cart";
import { InsideTheBook } from "./sections/InsideTheBook";
import { AuthorSpotlight } from "./sections/AuthorSpotlight";
import { FaqSection } from "./sections/FaqSection";
import { FinalCta } from "./sections/FinalCta";
import { useNavigate } from "@tanstack/react-router";

export function ProductPage() {
  const [formats, setFormats] = useState<ResolvedFormat[]>([]);
  const [selected, setSelected] = useState<FormatKey>("bundle");
  const [qty, setQty] = useState(1);
  const [activeImg, setActiveImg] = useState(0);
  const { add, setOpen } = useCart();
  const navigate = useNavigate();

  useEffect(() => {
    resolveFormats().then(({ formats }) => setFormats(formats));
  }, []);

  const current = formats.find((f) => f.key === selected) ?? formats[0];
  const gallery = [
    { label: "Front", src: BOOK_COVER_FRONT, alt: "Front cover" },
    { label: "Back", src: BOOK_COVER_BACK, alt: "Back cover" },
  ];
  const activeSrc = gallery[activeImg]?.src ?? BOOK_COVER_FRONT;

  const buyNow = () => {
    if (!current) return;
    if (current.external && current.externalUrl) {
      window.open(current.externalUrl, "_blank", "noopener,noreferrer");
      return;
    }
    if (!current.priceId) return;
    writeCheckoutSelection([{ priceId: current.priceId, quantity: qty }]);
    navigate({ to: "/checkout" });
  };

  const addToCart = () => {
    if (!current || current.external || !current.priceId) return;
    add({
      priceId: current.priceId,
      formatKey: current.key,
      name: BOOK.title,
      format: current.name,
      price: current.price,
      currency: current.currency,
      quantity: qty,
    });
    setOpen(true);
  };

  return (
    <div className="pt-16">
      {/* Breadcrumb */}
      <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
        <nav className="flex items-center gap-2 text-xs uppercase tracking-widest text-muted-foreground">
          <Link to="/" className="hover:text-cyan">
            Home
          </Link>
          <ChevronRight className="h-3 w-3" />
          <span className="text-foreground">Top 5 Reasons Why Insurance Agents Fail</span>
        </nav>
      </div>

      {/* Main product */}
      <section className="mx-auto max-w-7xl px-4 pb-24 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2">
          {/* Gallery */}
          <div className="lg:sticky lg:top-24 lg:self-start">
            <div className="relative aspect-[3/4] w-full max-w-md overflow-hidden rounded-r-md rounded-l-sm bg-ink shadow-2xl shadow-cyan/10">
              <div className="absolute left-0 top-0 z-10 h-full w-2 bg-black/40" />
              <img
                src={activeSrc}
                alt={gallery[activeImg]?.alt ?? "Book cover"}
                className="h-full w-full object-cover transition-opacity duration-300"
                loading="eager"
              />
            </div>
            <div className="mt-6 grid grid-cols-2 gap-3">
              {gallery.map((g, i) => (
                <button
                  key={g.label}
                  onClick={() => setActiveImg(i)}
                  className={`relative h-24 overflow-hidden rounded border transition-all ${
                    activeImg === i
                      ? "border-cyan ring-1 ring-cyan"
                      : "border-line hover:border-foreground/30"
                  }`}
                  aria-label={`View ${g.label}`}
                >
                  <img
                    src={g.src}
                    alt={g.alt}
                    className="h-full w-full object-cover"
                    loading="lazy"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Purchase panel */}
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-cyan">
              {BOOK.creator}
            </p>
            <h1 className="mt-3 font-display text-4xl font-bold leading-tight tracking-tight sm:text-5xl">
              {BOOK.title}
            </h1>
            <p className="mt-3 text-base font-medium text-muted-foreground">{BOOK.byline}</p>

            <div className="mt-4 flex items-center gap-2">
              <div className="flex">
                {[0, 1, 2, 3, 4].map((i) => (
                  <Star key={i} className="h-4 w-4 fill-cyan text-cyan" />
                ))}
              </div>
              <span className="text-xs text-muted-foreground">A book worth reading twice</span>
            </div>

            <p className="mt-6 text-base leading-relaxed text-foreground/80">
              A closer look at why agents struggle — and the decisions that can make the difference
              between staying stuck and building a better foundation. Drawn from Eric Howard's
              decades in the insurance industry.
            </p>

            {/* Format selector */}
            <div className="mt-8 grid grid-cols-2 gap-3">
              {formats.map((f) => {
                const active = f.key === selected;
                return (
                  <button
                    key={f.key}
                    onClick={() => setSelected(f.key)}
                    className={`relative rounded-lg border p-4 text-left transition-all ${
                      active
                        ? "border-cyan bg-ink text-white shadow-lg"
                        : "border-line bg-white hover:border-foreground/30"
                    }`}
                  >
                    {f.featured && (
                      <span className="absolute -top-2 left-4 bg-cyan px-2 py-0.5 text-[9px] font-bold uppercase tracking-widest text-ink">
                        Featured
                      </span>
                    )}
                    <div className="flex items-center justify-between">
                      <p
                        className={`text-sm font-bold ${active ? "text-white" : "text-foreground"}`}
                      >
                        {f.name}
                      </p>
                      {active && <Check className="h-4 w-4 text-cyan" />}
                    </div>
                    <p
                      className={`mt-1 text-xs ${active ? "text-white/60" : "text-muted-foreground"}`}
                    >
                      {f.tagline}
                    </p>
                    <p
                      className={`mt-2 text-sm font-semibold ${active ? "text-cyan" : "text-foreground"}`}
                    >
                      {f.external
                        ? "View on Lulu"
                        : f.available
                          ? formatPrice(f.price, f.currency)
                          : "Price at checkout"}
                    </p>
                  </button>
                );
              })}
            </div>

            {current && <p className="mt-4 text-sm text-muted-foreground">{current.description}</p>}

            {!current?.external && (
              <div className="mt-6 flex items-center gap-4">
                <span className="text-xs uppercase tracking-widest text-muted-foreground">Qty</span>
                <div className="flex items-center border border-line">
                  <button
                    onClick={() => setQty((q) => Math.max(1, q - 1))}
                    className="flex h-10 w-10 items-center justify-center hover:bg-muted"
                    aria-label="Decrease quantity"
                  >
                    −
                  </button>
                  <span className="w-10 text-center font-medium">{qty}</span>
                  <button
                    onClick={() => setQty((q) => Math.min(99, q + 1))}
                    className="flex h-10 w-10 items-center justify-center hover:bg-muted"
                    aria-label="Increase quantity"
                  >
                    +
                  </button>
                </div>
              </div>
            )}

            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              {current?.external ? (
                <a
                  href={current.externalUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex flex-1 items-center justify-center gap-2 bg-cyan px-8 py-4 text-xs font-bold uppercase tracking-widest text-ink transition-transform hover:scale-[1.01]"
                >
                  {current.cta}
                  <ExternalLink className="h-4 w-4" />
                </a>
              ) : (
                <>
                  <button
                    onClick={buyNow}
                    disabled={!current?.priceId}
                    className="inline-flex flex-1 items-center justify-center gap-2 bg-cyan px-8 py-4 text-xs font-bold uppercase tracking-widest text-ink transition-transform hover:scale-[1.01] disabled:opacity-50"
                  >
                    {current?.cta ?? "Get the Book"}
                  </button>
                  <button
                    onClick={addToCart}
                    disabled={!current?.priceId}
                    className="inline-flex items-center justify-center gap-2 border border-ink px-6 py-4 text-xs font-bold uppercase tracking-widest text-ink transition-colors hover:bg-ink hover:text-white disabled:opacity-50"
                  >
                    <ShoppingBag className="h-4 w-4" />
                    Add to Cart
                  </button>
                </>
              )}
            </div>

            {current?.external ? (
              <p className="mt-4 text-xs text-muted-foreground">
                Paperback orders are fulfilled separately through Lulu, the book's print-on-demand
                retailer.
              </p>
            ) : (
              <p className="mt-4 text-xs text-muted-foreground">
                Digital editions are delivered after a confirmed purchase. Secure checkout via
                Payments.
              </p>
            )}

            {/* Specs */}
            <div className="mt-10 grid grid-cols-2 gap-px overflow-hidden rounded-lg border border-line bg-line">
              {SPECS.map((s) => (
                <div key={s.label} className="bg-white p-4">
                  <p className="text-[10px] font-semibold uppercase tracking-widest text-cyan">
                    {s.label}
                  </p>
                  <p className="mt-1 font-display text-base font-bold">{s.value}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <InsideTheBook />
      <AuthorSpotlight />
      <FaqSection />
      <FinalCta />
    </div>
  );
}
