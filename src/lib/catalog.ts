import { listCatalogProducts, type CatalogProduct, type CatalogPrice } from "@/integrations/payments";
import { FORMATS, type BookFormat, type FormatKey } from "./book-data";

export interface ResolvedFormat extends BookFormat {
  price: number;
  currency: string;
  priceId?: string | undefined;
  soldOut?: boolean | undefined;
  available: boolean;
}

/**
 * Load the book product from the Payments catalog and map its prices to the
 * four display formats. Returns formats with fallback (unverified) pricing
 * when the catalog is unavailable, clearly flagged.
 */
export async function resolveFormats(): Promise<{
  formats: ResolvedFormat[];
  product: CatalogProduct | null;
}> {
  let product: CatalogProduct | null = null;
  try {
    const page = await listCatalogProducts({ search: "Top 5 Reasons", limit: 24, offset: 0 });
    product = page.products.find((p) =>
      /top 5 reasons/i.test(p.name) || /insurance agents fail/i.test(p.name),
    ) ?? page.products[0] ?? null;
  } catch {
    product = null;
  }

  const prices = product?.prices ?? [];

  const matchPrice = (keys: string[]): CatalogPrice | undefined => {
    for (const key of keys) {
      const p = prices.find((pr) => {
        const name = (pr.name ?? "").toLowerCase();
        return name.includes(key);
      });
      if (p) return p;
    }
    return undefined;
  };

  const formats: ResolvedFormat[] = FORMATS.map((f) => {
    if (f.external) {
      return {
        ...f,
        price: 0,
        currency: "USD",
        available: true,
      };
    }
    let price: CatalogPrice | undefined;
    if (f.key === "bundle") price = matchPrice(["bundle"]);
    else if (f.key === "ebook") price = matchPrice(["ebook", "e-book", "digital"]);
    else if (f.key === "audiobook") price = matchPrice(["audio", "audiobook"]);

    if (price) {
      return {
        ...f,
        price: price.amount,
        currency: price.currency ?? "USD",
        priceId: price.id,
        soldOut: price.sold_out,
        available: !price.sold_out,
      };
    }
    return {
      ...f,
      price: f.fallbackPrice ?? 0,
      currency: f.currency ?? "USD",
      available: false,
    };
  });

  return { formats, product };
}

export function formatPrice(amount: number, currency: string): string {
  try {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: currency || "USD",
    }).format(amount);
  } catch {
    return `$${amount.toFixed(2)}`;
  }
}

export const CHECKOUT_SELECTION_KEY = "vibe.checkout.selection.v1";

export function writeCheckoutSelection(items: Array<{ priceId: string; quantity: number }>) {
  try {
    localStorage.setItem(
      CHECKOUT_SELECTION_KEY,
      JSON.stringify({ items }),
    );
  } catch {
    /* ignore */
  }
}

export function readCheckoutSelection(): Array<{ priceId: string; quantity: number }> {
  try {
    const raw = localStorage.getItem(CHECKOUT_SELECTION_KEY);
    if (!raw) return [];
    const parsed = JSON.parse(raw) as { items?: Array<{ priceId: string; quantity: number }> };
    return parsed.items ?? [];
  } catch {
    return [];
  }
}
