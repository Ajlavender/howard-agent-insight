import { useEffect, useState } from "react";
import { useNavigate } from "@tanstack/react-router";
import { X, Minus, Plus, Trash2 } from "lucide-react";
import { useCart } from "../../lib/cart";

export function CartDrawer() {
  const { lines, open, setOpen, remove, setQty, subtotal, currency, count } = useCart();
  const navigate = useNavigate();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  useEffect(() => {
    if (!open) return;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const fmt = (n: number) =>
    new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: currency || "USD",
    }).format(n);

  const checkout = () => {
    setOpen(false);
    navigate({ to: "/checkout" });
  };

  return (
    <div
      className={`fixed inset-0 z-[60] ${open ? "pointer-events-auto" : "pointer-events-none"}`}
      aria-hidden={!open}
    >
      <div
        className={`absolute inset-0 bg-black/60 transition-opacity duration-300 ${
          open ? "opacity-100" : "opacity-0"
        }`}
        onClick={() => setOpen(false)}
      />
      <div
        className={`absolute right-0 top-0 flex h-full w-full max-w-md flex-col bg-white transition-transform duration-300 ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between border-b border-line px-6 py-5 pt-safe">
          <h2 className="font-display text-lg font-bold">
            Your Cart{" "}
            {mounted && count > 0 && <span className="text-muted-foreground">({count})</span>}
          </h2>
          <button
            onClick={() => setOpen(false)}
            aria-label="Close cart"
            className="flex h-11 w-11 items-center justify-center rounded-full text-muted-foreground transition-colors hover:bg-muted hover:text-foreground active:scale-95"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {mounted && lines.length === 0 ? (
          <div className="flex flex-1 flex-col items-center justify-center px-6 text-center">
            <p className="font-display text-xl font-semibold">Your cart is empty</p>
            <p className="mt-2 text-sm text-muted-foreground">
              Choose a format and add the book to your cart.
            </p>
            <button
              onClick={() => {
                setOpen(false);
                navigate({ to: "/products/top-5-reasons-why-insurance-agents-fail" });
              }}
              className="mt-6 bg-cyan px-6 py-3 text-xs font-bold uppercase tracking-widest text-ink"
            >
              Browse the Book
            </button>
          </div>
        ) : (
          <>
            <div className="flex-1 overflow-y-auto px-6 py-4">
              {lines.map((line) => (
                <div key={line.priceId} className="flex gap-4 border-b border-line py-4">
                  <div className="flex h-20 w-16 shrink-0 items-center justify-center bg-soft">
                    {line.image ? (
                      <img
                        src={line.image}
                        alt={line.name}
                        className="h-full w-full object-cover"
                      />
                    ) : (
                      <span className="font-display text-xs font-bold text-ink">{line.format}</span>
                    )}
                  </div>
                  <div className="flex flex-1 flex-col">
                    <p className="text-sm font-semibold leading-tight">{line.name}</p>
                    <p className="text-xs uppercase tracking-widest text-muted-foreground">
                      {line.format}
                    </p>
                    <div className="mt-auto flex items-center justify-between">
                      <div className="flex items-center border border-line">
                        <button
                          onClick={() => setQty(line.priceId, line.quantity - 1)}
                          aria-label="Decrease quantity"
                          className="flex h-8 w-8 items-center justify-center hover:bg-muted"
                        >
                          <Minus className="h-3 w-3" />
                        </button>
                        <span className="w-8 text-center text-sm font-medium">{line.quantity}</span>
                        <button
                          onClick={() => setQty(line.priceId, line.quantity + 1)}
                          aria-label="Increase quantity"
                          className="flex h-8 w-8 items-center justify-center hover:bg-muted"
                        >
                          <Plus className="h-3 w-3" />
                        </button>
                      </div>
                      <div className="flex items-center gap-3">
                        <span className="text-sm font-semibold">
                          {fmt(line.price * line.quantity)}
                        </span>
                        <button
                          onClick={() => remove(line.priceId)}
                          aria-label="Remove item"
                          className="text-muted-foreground hover:text-destructive"
                        >
                          <Trash2 className="h-4 w-4" />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="border-t border-line px-6 py-5 pb-safe">
              <div className="flex items-center justify-between">
                <span className="text-sm uppercase tracking-widest text-muted-foreground">
                  Subtotal
                </span>
                <span className="font-display text-xl font-bold">{fmt(subtotal)}</span>
              </div>
              <p className="mt-2 text-xs text-muted-foreground">
                Taxes and any discounts are calculated at checkout.
              </p>
              <button
                onClick={checkout}
                className="mt-4 w-full bg-ink py-4 text-xs font-bold uppercase tracking-widest text-white transition-colors hover:bg-cyan hover:text-ink"
              >
                Secure Checkout
              </button>
              <button
                onClick={() => setOpen(false)}
                className="mt-2 w-full py-3 text-xs font-medium uppercase tracking-widest text-muted-foreground hover:text-foreground"
              >
                Continue Shopping
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
