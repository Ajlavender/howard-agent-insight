import { useEffect, useState, type ReactNode } from "react";
import { Link, useLocation } from "@tanstack/react-router";
import { Menu, ShoppingBag, X } from "lucide-react";
import { CartProvider, useCart } from "../../lib/cart";
import { CartDrawer } from "./CartDrawer";

const NAV = [
  { label: "The Book", to: "/" },
  { label: "Inside the Book", to: "/products/top-5-reasons-why-insurance-agents-fail" },
  { label: "Meet Eric", to: "/about-eric" },
  { label: "Reviews", to: "/products/top-5-reasons-why-insurance-agents-fail" },
  { label: "FAQ", to: "/faq" },
];

export function StoreHeader() {
  const { count, setOpen } = useCart();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [location.pathname]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-ink/95 text-white backdrop-blur-md shadow-lg shadow-black/20"
          : "bg-transparent text-white"
      }`}
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link
          to="/"
          className="flex items-center gap-2 font-display text-lg font-bold tracking-tight"
        >
          <span className="text-cyan">7</span>
          <span className="hidden sm:inline">STEPS™</span>
        </Link>

        <nav className="hidden items-center gap-8 lg:flex">
          {NAV.map((item) => (
            <Link
              key={item.label}
              to={item.to}
              className="text-xs font-medium uppercase tracking-widest text-white/80 transition-colors hover:text-cyan"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2 sm:gap-4">
          <button
            onClick={() => setOpen(true)}
            aria-label="Open cart"
            className="relative flex h-10 w-10 items-center justify-center rounded-full text-white transition-colors hover:bg-white/10"
          >
            <ShoppingBag className="h-5 w-5" />
            {count > 0 && (
              <span className="absolute -right-0.5 -top-0.5 flex h-5 min-w-5 items-center justify-center rounded-full bg-cyan px-1 text-[10px] font-bold text-ink">
                {count}
              </span>
            )}
          </button>
          <Link
            to="/products/top-5-reasons-why-insurance-agents-fail"
            className="hidden bg-cyan px-5 py-2.5 text-xs font-bold uppercase tracking-widest text-ink transition-transform hover:scale-[1.03] sm:inline-block"
          >
            Get the Book
          </Link>
          <button
            onClick={() => setMobileOpen(true)}
            aria-label="Open menu"
            className="flex h-10 w-10 items-center justify-center rounded-full text-white transition-colors hover:bg-white/10 lg:hidden"
          >
            <Menu className="h-5 w-5" />
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`fixed inset-0 z-50 lg:hidden ${
          mobileOpen ? "pointer-events-auto" : "pointer-events-none"
        }`}
      >
        <div
          className={`absolute inset-0 bg-black/60 transition-opacity duration-300 ${
            mobileOpen ? "opacity-100" : "opacity-0"
          }`}
          onClick={() => setMobileOpen(false)}
        />
        <div
          className={`absolute right-0 top-0 flex h-full w-80 max-w-[85%] flex-col bg-ink p-6 text-white transition-transform duration-300 ${
            mobileOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="flex items-center justify-between">
            <span className="font-display text-lg font-bold">
              <span className="text-cyan">7</span>STEPS™
            </span>
            <button
              onClick={() => setMobileOpen(false)}
              aria-label="Close menu"
              className="flex h-10 w-10 items-center justify-center rounded-full hover:bg-white/10"
            >
              <X className="h-5 w-5" />
            </button>
          </div>
          <nav className="mt-10 flex flex-col gap-1">
            {NAV.map((item) => (
              <Link
                key={item.label}
                to={item.to}
                className="border-b border-white/10 py-4 text-sm font-medium uppercase tracking-widest text-white/80 transition-colors hover:text-cyan"
              >
                {item.label}
              </Link>
            ))}
          </nav>
          <Link
            to="/products/top-5-reasons-why-insurance-agents-fail"
            className="mt-auto bg-cyan px-5 py-3.5 text-center text-xs font-bold uppercase tracking-widest text-ink"
          >
            Get the Book
          </Link>
        </div>
      </div>
    </header>
  );
}

export function AnnouncementBar() {
  return (
    <div className="bg-cyan text-ink">
      <div className="mx-auto flex h-9 max-w-7xl items-center justify-center px-4 text-center text-[11px] font-bold uppercase tracking-widest sm:text-xs">
        Top 5 Reasons Why Insurance Agents Fail — Available Now
      </div>
    </div>
  );
}

export function StoreChrome({ children }: { children: ReactNode }) {
  return (
    <CartProvider>
      <div className="flex min-h-screen flex-col bg-background">
        <AnnouncementBar />
        <StoreHeader />
        <main className="flex-1">{children}</main>
        <StoreFooter />
        <CartDrawer />
      </div>
    </CartProvider>
  );
}

function StoreFooter() {
  return (
    <footer className="bg-ink text-white">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-12 md:grid-cols-4">
          <div className="md:col-span-1">
            <div className="font-display text-2xl font-bold">
              <span className="text-cyan">7</span>STEPS™
            </div>
            <p className="mt-4 text-sm leading-relaxed text-white/60">
              Top 5 Reasons Why Insurance Agents Fail
              <br />
              By Eric Howard
            </p>
            <p className="mt-4 text-xs text-white/40">The 7Steps, LLC</p>
          </div>

          <div>
            <h4 className="text-xs font-bold uppercase tracking-widest text-cyan">Navigate</h4>
            <ul className="mt-4 space-y-3 text-sm text-white/70">
              <li>
                <Link to="/" className="hover:text-cyan">
                  The Book
                </Link>
              </li>
              <li>
                <Link
                  to="/products/top-5-reasons-why-insurance-agents-fail"
                  className="hover:text-cyan"
                >
                  Inside the Book
                </Link>
              </li>
              <li>
                <Link to="/about-eric" className="hover:text-cyan">
                  Meet Eric Howard
                </Link>
              </li>
              <li>
                <Link to="/faq" className="hover:text-cyan">
                  FAQs
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-bold uppercase tracking-widest text-cyan">Support</h4>
            <ul className="mt-4 space-y-3 text-sm text-white/70">
              <li>
                <Link to="/contact" className="hover:text-cyan">
                  Contact
                </Link>
              </li>
              <li>
                <Link to="/digital-delivery" className="hover:text-cyan">
                  Digital Delivery
                </Link>
              </li>
              <li>
                <Link to="/refund-policy" className="hover:text-cyan">
                  Refund Policy
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-bold uppercase tracking-widest text-cyan">Legal</h4>
            <ul className="mt-4 space-y-3 text-sm text-white/70">
              <li>
                <Link to="/privacy-policy" className="hover:text-cyan">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/terms-and-conditions" className="hover:text-cyan">
                  Terms & Conditions
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-16 flex flex-col items-start justify-between gap-4 border-t border-white/10 pt-8 text-xs text-white/40 sm:flex-row sm:items-center">
          <p>© 2026 The 7Steps, LLC. All Rights Reserved.</p>
          <p>Designed & Powered by Lavender Marketing & Co.</p>
        </div>
      </div>
    </footer>
  );
}
