import { useEffect, useState } from "react";
import { useNavigate } from "@tanstack/react-router";
import { Check, ExternalLink, ShoppingBag, Star } from "lucide-react";
import {
  resolveFormats,
  formatPrice,
  writeCheckoutSelection,
  type ResolvedFormat,
} from "@/lib/catalog";
import { BOOK, type FormatKey } from "@/lib/book-data";
import { useCart } from "@/lib/cart";
import { BookCoverMock } from "./HomeHero";

export function PurchaseSection() {
  const [formats, setFormats] = useState<ResolvedFormat[]>([]);
  const [selected, setSelected] = useState<FormatKey>("bundle");
  const [qty, setQty] = useState(1);
  const { add, setOpen } = useCart();
  const navigate = useNavigate();

  useEffect(() => {
    resolveFormats().then(({ formats }) => setFormats(formats));
  }, []);

  const current = formats.find((f) => f.key === selected) ?? formats[0];

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
    <section id="purchase" className="bg-soft py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-muted-foreground">
            One Book
          </p>
          <h2 className="mt-4 font-display text-4xl font-bold tracking-tight sm:text-5xl">
            A different perspective.
          </h2>
          <p className="mt-4 text-base text-muted-foreground">
            Read it, listen to it, or keep a copy on your desk. Choose the format that works for
            you.
          </p>
        </div>

        <div className="mt-16 grid gap-12 lg:grid-cols-2">
          {/* Gallery */}
          <div className="flex flex-col items-center justify-center">
            <div className="relative aspect-[3/4] w-full max-w-sm">
              <BookCoverMock />
            </div>
            <div className="mt-6 flex gap-3">
              {["Cover", "Back", "Interior"].map((t, i) => (
                <div
                  key={t}
                  className={`flex h-20 w-16 items-center justify-center rounded border text-xs font-medium ${
                    i === 0
                      ? "border-cyan bg-ink text-white"
                      : "border-line bg-white text-muted-foreground"
                  }`}
                >
                  {t}
                </div>
              ))}
            </div>
          </div>

          {/* Purchase panel */}
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-cyan">
              {BOOK.creator}
            </p>
            <h3 className="mt-3 font-display text-3xl font-bold leading-tight tracking-tight">
              {BOOK.title}
            </h3>
            <p className="mt-2 text-sm font-medium text-muted-foreground">{BOOK.byline}</p>

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
              between staying stuck and building a better foundation.
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

            {/* Description */}
            {current && <p className="mt-4 text-sm text-muted-foreground">{current.description}</p>}

            {/* Quantity + actions */}
            {!current?.external && (
              <div className="mt-6 flex items-center gap-4">
                <div className="flex items-center border border-line">
                  <button
                    onClick={() => setQty((q) => Math.max(1, q - 1))}
                    className="flex h-11 w-11 items-center justify-center hover:bg-muted"
                    aria-label="Decrease quantity"
                  >
                    −
                  </button>
                  <span className="w-12 text-center font-medium">{qty}</span>
                  <button
                    onClick={() => setQty((q) => Math.min(99, q + 1))}
                    className="flex h-11 w-11 items-center justify-center hover:bg-muted"
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
          </div>
        </div>
      </div>
    </section>
  );
}
