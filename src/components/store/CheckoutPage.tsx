import { useEffect, useState } from "react";
import { Link, useNavigate } from "@tanstack/react-router";
import { PaymentCheckoutBlock, isCheckoutReturn } from "@/integrations/payments";
import { readCheckoutSelection } from "@/lib/catalog";

export function CheckoutPage() {
  const [ready, setReady] = useState(false);
  const [empty, setEmpty] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    // On a payment return, mount immediately regardless of selection.
    if (isCheckoutReturn()) {
      setReady(true);
      return;
    }
    const items = readCheckoutSelection();
    if (items.length === 0) {
      setEmpty(true);
    }
    setReady(true);
  }, []);

  return (
    <div className="pt-16">
      <section className="bg-ink py-16 text-white sm:py-20">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-cyan">Checkout</p>
          <h1 className="mt-3 font-display text-3xl font-bold tracking-tight sm:text-4xl">
            Complete Your Purchase
          </h1>
          <p className="mt-3 text-sm text-white/70">
            Secure checkout for Top 5 Reasons Why Insurance Agents Fail by Eric Howard.
          </p>
        </div>
      </section>

      <section className="bg-soft py-12 sm:py-16">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          {ready && empty ? (
            <div className="rounded-lg border border-line bg-white p-12 text-center">
              <h2 className="font-display text-2xl font-bold">Your cart is empty</h2>
              <p className="mt-2 text-sm text-muted-foreground">
                Choose a format and add the book to your cart to begin checkout.
              </p>
              <button
                onClick={() => navigate({ to: "/products/top-5-reasons-why-insurance-agents-fail" })}
                className="mt-6 bg-cyan px-8 py-3.5 text-xs font-bold uppercase tracking-widest text-ink"
              >
                Browse the Book
              </button>
            </div>
          ) : ready ? (
            <div className="rounded-lg border border-line bg-white p-4 sm:p-8">
              <PaymentCheckoutBlock />
            </div>
          ) : (
            <div className="rounded-lg border border-line bg-white p-12 text-center">
              <p className="text-sm text-muted-foreground">Loading checkout…</p>
            </div>
          )}

          <div className="mt-6 text-center">
            <Link
              to="/products/top-5-reasons-why-insurance-agents-fail"
              className="text-xs font-medium uppercase tracking-widest text-muted-foreground hover:text-cyan"
            >
              ← Back to the book
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
