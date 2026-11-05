import { useEffect, useState, type ReactNode } from "react";
import { Link, useLocation } from "@tanstack/react-router";
import { Menu, ShoppingBag, X, Search, Globe, Check, ChevronDown } from "lucide-react";
import { CartProvider, useCart } from "../../lib/cart";
import { CartDrawer } from "./CartDrawer";

const NAV = [
  { label: "The Book", to: "/" },
  { label: "Inside the Book", to: "/products/top-5-reasons-why-insurance-agents-fail" },
  { label: "Meet Eric", to: "/about-eric" },
  { label: "Reviews", to: "/products/top-5-reasons-why-insurance-agents-fail" },
  { label: "FAQ", to: "/faq" },
  { label: "Contact", to: "/contact" },
];

export function AnnouncementBar() {
  return (
    <div className="bg-ink pt-safe text-white font-mono font-bold text-[11px] uppercase tracking-[0.2em] transition-all">
      <div className="mx-auto flex h-10 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <div className="hidden sm:block text-[10px] tracking-[0.25em] text-white/40">
          OFFICIAL STORE OF ERIC HOWARD
        </div>
        <div className="mx-auto sm:mx-0 flex items-center gap-2">
          <span className="text-white/90">TOP 5 REASONS WHY INSURANCE AGENTS FAIL</span>
          <span className="hidden md:inline text-cyan">• AVAILABLE NOW</span>
        </div>
        <div className="hidden md:flex items-center gap-3 text-[10px] text-white/40">
          <span className="flex items-center gap-1 font-semibold">
            <Globe className="h-3 w-3" /> USD ($)
          </span>
        </div>
      </div>
    </div>
  );
}

export function StoreHeader() {
  const { count, setOpen } = useCart();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    if (!mobileOpen) return;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-ink/95 text-white backdrop-blur-md border-b border-white/10 shadow-2xl shadow-black/40"
          : "bg-ink text-white border-b border-white/10"
      }`}
    >
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Left Branding */}
        <div className="flex items-center gap-6">
          <button
            onClick={() => setMobileOpen(true)}
            aria-label="Open menu"
            className="flex h-11 w-11 items-center justify-center rounded-full text-white transition-colors hover:bg-white/10 active:scale-95 lg:hidden"
          >
            <Menu className="h-5 w-5" />
          </button>

          <Link
            to="/"
            className="group flex items-center gap-2.5 font-display text-xl font-extrabold tracking-tighter"
          >
            <div className="flex h-9 w-9 items-center justify-center rounded-sm bg-cyan text-ink font-black text-lg transition-transform group-hover:scale-105">
              7
            </div>
            <div className="flex flex-col text-left">
              <span className="font-display text-base font-black tracking-widest text-white leading-none">
                7STEPS<span className="text-cyan">™</span>
              </span>
              <span className="text-[9px] uppercase tracking-[0.25em] text-white/50 leading-tight">
                Publishing
              </span>
            </div>
          </Link>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden items-center gap-9 lg:flex">
          {NAV.map((item) => {
            const isActive = location.pathname === item.to;
            return (
              <Link
                key={item.label}
                to={item.to}
                className={`relative text-xs font-bold uppercase tracking-[0.2em] transition-colors py-1 ${
                  isActive ? "text-cyan" : "text-white/80 hover:text-cyan"
                }`}
              >
                {item.label}
                {isActive && (
                  <span className="absolute inset-x-0 -bottom-1 h-0.5 bg-cyan rounded-full" />
                )}
              </Link>
            );
          })}
        </nav>

        {/* Right Actions */}
        <div className="flex items-center gap-3 sm:gap-4">
          <Link
            to="/products/top-5-reasons-why-insurance-agents-fail"
            className="hidden sm:inline-flex items-center gap-2 bg-cyan px-6 py-3 text-xs font-extrabold uppercase tracking-[0.2em] text-ink rounded-full transition-all hover:bg-white hover:text-ink hover:shadow-[0_0_20px_rgba(2,250,251,0.4)]"
          >
            Get The Book
          </Link>

          <button
            onClick={() => setOpen(true)}
            aria-label="Open shopping cart"
            className="group relative flex h-11 min-w-11 items-center gap-2 rounded-full border border-white/20 bg-white/5 px-3 text-white transition-all hover:border-cyan hover:bg-white/10 active:scale-95 sm:px-4"
          >
            <ShoppingBag className="h-4 w-4 text-cyan transition-transform group-hover:scale-110" />
            <span className="hidden text-xs font-bold uppercase tracking-widest sm:inline">
              Cart
            </span>
            <span className="flex h-5 min-w-5 items-center justify-center rounded-full bg-cyan px-1.5 text-[10px] font-black text-ink">
              {count}
            </span>
          </button>
        </div>
      </div>

      {/* Mobile Slideout Nav */}
      <div
        className={`fixed inset-0 z-50 lg:hidden ${
          mobileOpen ? "pointer-events-auto" : "pointer-events-none"
        }`}
      >
        <div
          className={`absolute inset-0 bg-black/75 backdrop-blur-sm transition-opacity duration-300 ${
            mobileOpen ? "opacity-100" : "opacity-0"
          }`}
          onClick={() => setMobileOpen(false)}
        />
        <div
          className={`absolute left-0 top-0 flex h-full w-[86vw] max-w-sm flex-col bg-ink p-5 pt-safe pb-safe text-white shadow-2xl border-r border-white/10 transition-transform duration-300 ease-out ${
            mobileOpen ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          <div className="flex items-center justify-between border-b border-white/10 pb-5">
            <div className="flex items-center gap-2">
              <span className="flex h-8 w-8 items-center justify-center rounded bg-cyan text-ink font-bold text-sm">
                7
              </span>
              <span className="font-display text-base font-bold tracking-wider">7STEPS™ STORE</span>
            </div>
            <button
              onClick={() => setMobileOpen(false)}
              aria-label="Close menu"
              className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full text-white/70 transition-colors hover:bg-white/10 hover:text-white active:scale-95"
            >
              <X className="h-5 w-5" />
            </button>
          </div>

          <div className="my-6 rounded-lg border border-white/10 bg-white/5 p-4">
            <p className="text-[11px] font-bold uppercase tracking-widest text-white">
              Top 5 Reasons Why Insurance Agents Fail
            </p>
            <p className="mt-1 text-xs text-white/50">Official Book by Eric Howard</p>
          </div>

          <nav className="flex flex-col divide-y divide-white/10">
            {NAV.map((item) => (
              <Link
                key={item.label}
                to={item.to}
                className="flex min-h-12 items-center justify-between py-4 text-sm font-bold uppercase tracking-[0.2em] text-white/90 transition-colors hover:text-cyan active:text-cyan"
              >
                {item.label}
                <span className="text-xs text-white/30">→</span>
              </Link>
            ))}
          </nav>

          <div className="mt-auto pt-6 border-t border-white/10">
            <Link
              to="/products/top-5-reasons-why-insurance-agents-fail"
              className="flex w-full items-center justify-center rounded-full bg-cyan py-4 text-xs font-black uppercase tracking-[0.2em] text-ink shadow-lg shadow-cyan/20"
            >
              Get The Book Now
            </Link>
            <p className="mt-4 text-center text-[10px] text-white/40 uppercase tracking-widest">
              Available in Paperback, E-Book & Audiobook
            </p>
          </div>
        </div>
      </div>
    </header>
  );
}

export function StoreChrome({ children }: { children: ReactNode }) {
  return (
    <CartProvider>
      <div className="flex min-h-screen flex-col bg-background font-body text-foreground antialiased selection:bg-cyan selection:text-ink">
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
    <footer className="bg-ink text-white border-t border-white/10">
      <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-12">
          {/* Brand Info */}
          <div className="lg:col-span-5 space-y-6">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded bg-cyan text-ink font-black text-xl">
                7
              </div>
              <span className="font-display text-2xl font-black tracking-tight text-white">
                7STEPS<span className="text-cyan">™</span>
              </span>
            </div>
            <p className="text-sm leading-relaxed text-white/70 max-w-md">
              Official storefront for <strong>Top 5 Reasons Why Insurance Agents Fail</strong> by
              Eric Howard. Empowering insurance professionals with practical clarity, business
              discipline, and real-world perspective.
            </p>
            <div className="flex items-center gap-3 text-xs text-white/50">
              <span className="inline-block h-2 w-2 rounded-full bg-cyan animate-pulse" />
              <span>Official Publisher Store • 7Steps LLC</span>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="lg:col-span-7 grid grid-cols-2 sm:grid-cols-3 gap-8">
            <div>
              <h4 className="text-xs font-extrabold uppercase tracking-[0.25em] text-cyan">
                The Book
              </h4>
              <ul className="mt-4 space-y-3 text-xs font-medium text-white/70">
                <li>
                  <Link to="/" className="hover:text-cyan transition-colors">
                    Official Homepage
                  </Link>
                </li>
                <li>
                  <Link
                    to="/products/top-5-reasons-why-insurance-agents-fail"
                    className="hover:text-cyan transition-colors"
                  >
                    Product Detail Page
                  </Link>
                </li>
                <li>
                  <Link to="/about-eric" className="hover:text-cyan transition-colors">
                    Meet Eric Howard
                  </Link>
                </li>
                <li>
                  <Link to="/faq" className="hover:text-cyan transition-colors">
                    Frequently Asked Questions
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-xs font-extrabold uppercase tracking-[0.25em] text-cyan">
                Customer Care
              </h4>
              <ul className="mt-4 space-y-3 text-xs font-medium text-white/70">
                <li>
                  <Link to="/contact" className="hover:text-cyan transition-colors">
                    Contact Support
                  </Link>
                </li>
                <li>
                  <Link to="/digital-delivery" className="hover:text-cyan transition-colors">
                    Digital Delivery Info
                  </Link>
                </li>
                <li>
                  <Link to="/refund-policy" className="hover:text-cyan transition-colors">
                    Refund & Return Policy
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-xs font-extrabold uppercase tracking-[0.25em] text-cyan">
                Legal & Terms
              </h4>
              <ul className="mt-4 space-y-3 text-xs font-medium text-white/70">
                <li>
                  <Link to="/privacy-policy" className="hover:text-cyan transition-colors">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link to="/terms-and-conditions" className="hover:text-cyan transition-colors">
                    Terms & Conditions
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Payment Badges & Copyright */}
        <div className="mt-16 pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-6 text-xs text-white/40">
          <p>© 2026 The 7Steps, LLC. All Rights Reserved. Designed for Eric Howard.</p>

          <div className="flex flex-wrap items-center gap-2">
            <span className="rounded border border-white/10 bg-white/5 px-2.5 py-1 text-[10px] font-bold text-white/60">
              VISA
            </span>
            <span className="rounded border border-white/10 bg-white/5 px-2.5 py-1 text-[10px] font-bold text-white/60">
              MASTERCARD
            </span>
            <span className="rounded border border-white/10 bg-white/5 px-2.5 py-1 text-[10px] font-bold text-white/60">
              AMEX
            </span>
            <span className="rounded border border-white/10 bg-white/5 px-2.5 py-1 text-[10px] font-bold text-white/60">
              APPLE PAY
            </span>
            <span className="rounded border border-white/10 bg-white/5 px-2.5 py-1 text-[10px] font-bold text-white/60">
              GOOGLE PAY
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
