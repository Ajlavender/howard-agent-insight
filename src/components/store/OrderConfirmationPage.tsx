import { useEffect, useState } from "react";
import { Link } from "@tanstack/react-router";
import { Check, BookOpen, Headphones, Download, ArrowRight } from "lucide-react";
import { readCheckoutOrder, type CheckoutOrder } from "@/integrations/payments";

export function OrderConfirmationPage() {
  const [order, setOrder] = useState<CheckoutOrder | null>(null);
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    setHydrated(true);
    setOrder(readCheckoutOrder());
  }, []);

  const fmt = (n: number, c?: string) =>
    new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: c || "USD",
    }).format(n);

  return (
    <div className="pt-16">
      <section className="relative overflow-hidden bg-ink py-20 text-white sm:py-28">
        <div className="pointer-events-none absolute -right-40 top-0 h-96 w-96 rounded-full bg-cyan/15 blur-[120px]" />
        <div className="relative mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full border-2 border-cyan">
            <Check className="h-8 w-8 text-cyan" />
          </div>
          <p className="mt-6 text-xs font-semibold uppercase tracking-[0.3em] text-cyan">
            Order Confirmed
          </p>
          <h1 className="mt-4 font-display text-4xl font-bold tracking-tight sm:text-5xl">
            Thank you for your order.
          </h1>
          <p className="mt-4 text-base leading-relaxed text-white/70">
            Your purchase of <em>Top 5 Reasons Why Insurance Agents Fail</em> by Eric Howard has
            been received. A confirmation has been sent to your email with your access details.
          </p>
        </div>
      </section>

      <section className="bg-soft py-16 sm:py-24">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          {hydrated && order ? (
            <div className="overflow-hidden rounded-lg border border-line bg-white">
              <div className="border-b border-line bg-white px-6 py-5 sm:px-8">
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <span className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                    Order Number
                  </span>
                  <span className="font-display text-lg font-bold">{order.orderId}</span>
                </div>
              </div>

              <div className="px-6 py-6 sm:px-8">
                <h2 className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                  Items
                </h2>
                <ul className="mt-4 divide-y divide-line">
                  {order.lines.map((line, i) => (
                    <li key={i} className="flex items-start justify-between gap-4 py-4">
                      <div className="flex items-start gap-3">
                        <span className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-soft text-cyan">
                          <BookOpen className="h-4 w-4" />
                        </span>
                        <div>
                          <p className="text-sm font-semibold leading-tight">{line.name}</p>
                          <p className="mt-1 text-xs text-muted-foreground">Qty {line.quantity}</p>
                        </div>
                      </div>
                      <span className="text-sm font-semibold">
                        {fmt(line.unitAmount * line.quantity, order.currency)}
                      </span>
                    </li>
                  ))}
                </ul>

                <div className="mt-6 flex items-center justify-between border-t border-line pt-5">
                  <span className="text-sm font-semibold uppercase tracking-widest text-muted-foreground">
                    Total
                  </span>
                  <span className="font-display text-2xl font-bold">
                    {fmt(order.totals.totalDueToday, order.currency)}
                  </span>
                </div>
              </div>
            </div>
          ) : hydrated ? (
            <div className="rounded-lg border border-line bg-white p-10 text-center">
              <h2 className="font-display text-2xl font-bold">Thanks for your order</h2>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                We've received your purchase. A confirmation with your access details has been sent
                to your email. If you don't see it shortly, reach out to us through the contact page.
              </p>
            </div>
          ) : (
            <div className="rounded-lg border border-line bg-white p-10 text-center">
              <p className="text-sm text-muted-foreground">Loading your order…</p>
            </div>
          )}

          {/* Digital delivery note */}
          <div className="mt-8 grid gap-4 sm:grid-cols-3">
            <div className="rounded-lg border border-line bg-white p-6">
              <Download className="h-6 w-6 text-cyan" />
              <h3 className="mt-3 font-display text-sm font-bold uppercase tracking-tight">
                E-Book Access
              </h3>
              <p className="mt-2 text-xs leading-relaxed text-muted-foreground">
                Your download link and access instructions are included in your confirmation email.
              </p>
            </div>
            <div className="rounded-lg border border-line bg-white p-6">
              <Headphones className="h-6 w-6 text-cyan" />
              <h3 className="mt-3 font-display text-sm font-bold uppercase tracking-tight">
                Audiobook Access
              </h3>
              <p className="mt-2 text-xs leading-relaxed text-muted-foreground">
                Listen on your phone or compatible device using the link provided in your email.
              </p>
            </div>
            <div className="rounded-lg border border-line bg-white p-6">
              <BookOpen className="h-6 w-6 text-cyan" />
              <h3 className="mt-3 font-display text-sm font-bold uppercase tracking-tight">
                Need Help?
              </h3>
              <p className="mt-2 text-xs leading-relaxed text-muted-foreground">
                Questions about your order? Visit our contact page and we'll be glad to help.
              </p>
            </div>
          </div>

          <div className="mt-10 flex flex-col items-center gap-4 text-center">
            <Link
              to="/products/top-5-reasons-why-insurance-agents-fail"
              className="inline-flex items-center gap-2 bg-cyan px-8 py-4 text-xs font-bold uppercase tracking-widest text-ink transition-transform hover:scale-[1.02]"
            >
              Back to the Book <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              to="/digital-delivery"
              className="text-xs font-medium uppercase tracking-widest text-muted-foreground hover:text-cyan"
            >
              Read our digital delivery guide
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
