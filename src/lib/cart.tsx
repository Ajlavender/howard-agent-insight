import {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";

export interface CartLine {
  priceId: string;
  formatKey: string;
  name: string;
  format: string;
  price: number;
  currency: string;
  quantity: number;
  image?: string;
}

interface CartState {
  lines: CartLine[];
  add: (line: CartLine) => void;
  remove: (priceId: string) => void;
  setQty: (priceId: string, qty: number) => void;
  clear: () => void;
  count: number;
  subtotal: number;
  currency: string;
  open: boolean;
  setOpen: (v: boolean) => void;
}

const CartContext = createContext<CartState | null>(null);

const STORAGE_KEY = "7steps.cart.v1";

export function CartProvider({ children }: { children: ReactNode }) {
  const [lines, setLines] = useState<CartLine[]>([]);
  const [open, setOpen] = useState(false);
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    setHydrated(true);
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (raw) setLines(JSON.parse(raw) as CartLine[]);
    } catch {
      /* ignore */
    }
  }, []);

  useEffect(() => {
    if (!hydrated) return;
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(lines));
    } catch {
      /* ignore */
    }
  }, [lines, hydrated]);

  const value = useMemo<CartState>(() => {
    const count = lines.reduce((n, l) => n + l.quantity, 0);
    const subtotal = lines.reduce((n, l) => n + l.price * l.quantity, 0);
    const currency = lines[0]?.currency ?? "USD";
    return {
      lines,
      open,
      setOpen,
      count,
      subtotal,
      currency,
      add: (line) =>
        setLines((prev) => {
          const existing = prev.find((l) => l.priceId === line.priceId);
          if (existing) {
            return prev.map((l) =>
              l.priceId === line.priceId
                ? { ...l, quantity: Math.min(99, l.quantity + line.quantity) }
                : l,
            );
          }
          return [...prev, line];
        }),
      remove: (priceId) =>
        setLines((prev) => prev.filter((l) => l.priceId !== priceId)),
      setQty: (priceId, qty) =>
        setLines((prev) =>
          prev
            .map((l) =>
              l.priceId === priceId
                ? { ...l, quantity: Math.max(0, Math.min(99, qty)) }
                : l,
            )
            .filter((l) => l.quantity > 0),
        ),
      clear: () => setLines([]),
    };
  }, [lines, open]);

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCart() {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error("useCart must be used within CartProvider");
  return ctx;
}
