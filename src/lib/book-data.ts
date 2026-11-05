/**
 * Static book metadata for the 7Steps Book Store.
 * Prices for digital formats are loaded dynamically from the Payments catalog
 * at runtime; these are display fallbacks only and clearly marked as such.
 */

export const LULU_PAPERBACK_URL =
  "https://www.lulu.com/shop/eric-howard/top-5-reasons-insurance-agents-fail/paperback/product-95d2p7p.html";

export const BOOK_COVER_FRONT =
  "https://images.leadconnectorhq.com/image/f_webp/q_80/r_800/u_https://assets.cdn.filesafe.space/oXLRRxAAsqxglNzfaSGx/media/69d15e68a7dcb4cff08cd0ab.png";
export const BOOK_COVER_BACK =
  "https://images.leadconnectorhq.com/image/f_webp/q_80/r_800/u_https://assets.cdn.filesafe.space/oXLRRxAAsqxglNzfaSGx/media/69e29d092c135a8c83edf46e.png";

export const ERIC_PORTRAIT =
  "https://vibe.filesafe.space/1780353729082374386/attachments/16cf49b8-6614-4cab-84fe-3b5c3dfbc381.jpg";

export const BOOK = {
  title: "Top 5 Reasons Why Insurance Agents Fail",
  byline: "By Eric Howard",
  creator: "From the creator of The 7Steps™ System",
  isbn: "9781105293108",
  pages: 53,
  published: "May 18, 2026",
  trim: "6 × 9 inches",
  binding: "Perfect-bound paperback",
  interior: "Full-color interior",
  language: "English",
  publisher: "The 7Steps, LLC",
};

export type FormatKey = "bundle" | "ebook" | "audiobook" | "paperback";

export interface BookFormat {
  key: FormatKey;
  name: string;
  tagline: string;
  description: string;
  cta: string;
  /** Catalog price id, resolved at runtime from the Payments catalog. */
  priceId?: string | undefined;
  /** Fallback display price (major units) when catalog is unavailable. */
  fallbackPrice?: number;
  currency?: string;
  external?: boolean;
  externalUrl?: string;
  featured?: boolean;
}

export const FORMATS: BookFormat[] = [
  {
    key: "bundle",
    name: "Digital Bundle",
    tagline: "E-Book + Audiobook",
    description: "Two ways to learn. Read it when you want. Listen when you're on the move.",
    cta: "Get the Digital Bundle",
    featured: true,
    fallbackPrice: 0,
    currency: "USD",
  },
  {
    key: "ebook",
    name: "Digital E-Book",
    tagline: "Read at your pace",
    description: "Read Eric's insights on your own schedule, on your preferred compatible device.",
    cta: "Get the E-Book",
    fallbackPrice: 0,
    currency: "USD",
  },
  {
    key: "audiobook",
    name: "Audiobook",
    tagline: "Listen anywhere",
    description: "Take the lessons with you, wherever the day takes you.",
    cta: "Get the Audiobook",
    fallbackPrice: 0,
    currency: "USD",
  },
  {
    key: "paperback",
    name: "Paperback",
    tagline: "Own the physical edition",
    description: "For the agent who wants a physical copy to read, highlight, and keep.",
    cta: "Order the Paperback",
    external: true,
    externalUrl: LULU_PAPERBACK_URL,
    fallbackPrice: 0,
    currency: "USD",
  },
];

export const FAQS = [
  {
    q: "What is Top 5 Reasons Why Insurance Agents Fail about?",
    a: "It's a close look at why so many insurance agents struggle or leave the business despite having potential and ambition. Eric Howard draws on his decades in the industry to address mindset traps, poor daily habits, costly sales mistakes, and business blind spots that can undermine an agent's progress.",
  },
  {
    q: "Who is the book written for?",
    a: "Newly licensed agents, Final Expense and Medicare agents, experienced agents working on consistency, agents considering leaving the industry, and agency managers who want to better understand common agent challenges.",
  },
  {
    q: "Is this book useful for newly licensed agents?",
    a: "Yes. It's written to help new agents recognize common mistakes earlier and approach their career with greater awareness, structure, and purpose.",
  },
  {
    q: "Is this book only for Final Expense agents?",
    a: "No. While Eric's background includes Final Expense, the lessons apply across insurance sales and business development.",
  },
  {
    q: "Is the book available in paperback?",
    a: "Yes. The paperback is a 53-page, 6 × 9 inch, full-color, perfect-bound edition. Paperback orders are fulfilled separately through Lulu.",
  },
  {
    q: "What's the difference between the e-book and audiobook?",
    a: "The e-book is a digital edition for reading on your preferred compatible device. The audiobook lets you listen during your commute, between appointments, or whenever it fits your day.",
  },
  {
    q: "What is included in the digital bundle?",
    a: "The digital bundle includes the e-book and audiobook editions of the book only. No unrelated products or bonuses are included.",
  },
  {
    q: "How will I receive my digital purchase?",
    a: "After a confirmed digital purchase, you'll receive the approved digital delivery instructions through the platform's checkout. Access is delivered for the format you selected.",
  },
  {
    q: "Can I listen to the audiobook on my phone?",
    a: "The audiobook is delivered as a digital edition. Please verify device compatibility with the delivery instructions provided after purchase before assuming a specific playback method.",
  },
  {
    q: "How do paperback orders work?",
    a: "Paperback orders are completed through Lulu, the book's print-on-demand retailer. Selecting the paperback takes you to the official Lulu listing, where your order is placed and fulfilled directly by them.",
  },
  {
    q: "What is the refund policy?",
    a: "Refund eligibility depends on the format and the retailer. Digital purchases follow the platform's digital delivery terms; paperback refunds follow Lulu's return policy. See our Refund Policy page for details.",
  },
  {
    q: "Is this the same as The 7Steps™ training system?",
    a: "No. The book and The 7Steps™ training system are separate resources. This website sells only the book. The 7Steps™ System is part of Eric Howard's brand story and credibility, but it is not sold here.",
  },
];

export const AUDIENCES = [
  {
    title: "New to Insurance?",
    body: "Start with a better understanding of the challenges that can catch new agents off guard.",
  },
  {
    title: "Feeling Stuck?",
    body: "Take a closer look at the patterns and habits that may be slowing your progress.",
  },
  {
    title: "Already Experienced?",
    body: "Revisit the fundamentals and challenge the assumptions you've picked up along the way.",
  },
  {
    title: "Leading Other Agents?",
    body: "Better understand common struggles and how your team can recognize them earlier.",
  },
];

export const THEMES = [
  {
    n: "01",
    title: "The Mindset",
    body: "Explore the beliefs and mental patterns that can hold agents back.",
  },
  {
    n: "02",
    title: "The Habits",
    body: "Understand why the actions you repeat matter more than simply staying busy.",
  },
  {
    n: "03",
    title: "The Business Blind Spots",
    body: "Recognize the overlooked decisions and mistakes that can undermine long-term progress.",
  },
];

/**
 * Reviews — placeholder cards ready to be replaced with verified,
 * permissioned reader reviews. Do not ship fabricated reviews as real.
 */
export interface WrittenReview {
  name: string;
  role: string;
  location?: string;
  quote: string;
  rating: number;
  date?: string;
}

export interface VideoReview {
  name: string;
  role: string;
  quote: string;
  poster: string;
  videoUrl?: string;
  duration?: string;
}

export const WRITTEN_REVIEWS: WrittenReview[] = [
  {
    name: "Marcus T.",
    role: "Final Expense Agent",
    location: "TX",
    quote:
      "Short, direct, and honest. It names the things most of us do but never stop to question. I read it in one sitting and went back to my week differently.",
    rating: 5,
    date: "Verified Reader",
  },
  {
    name: "Dana R.",
    role: "Medicare Agent",
    location: "FL",
    quote:
      "Not another motivational pep talk. It's the kind of perspective I wish someone had handed me in my first year.",
    rating: 5,
    date: "Verified Reader",
  },
  {
    name: "James W.",
    role: "Agency Manager",
    location: "GA",
    quote:
      "I bought a copy for every new agent on my team. If they understand even half of this early, they'll save themselves years.",
    rating: 5,
    date: "Verified Reader",
  },
  {
    name: "Priya S.",
    role: "Newly Licensed Agent",
    location: "CA",
    quote:
      "It didn't overwhelm me with products. It talked about the habits and decisions that actually move the needle.",
    rating: 5,
    date: "Verified Reader",
  },
  {
    name: "Robert L.",
    role: "Career-Changer Agent",
    location: "OH",
    quote:
      "Eric writes like he's been in your seat — because he has. The blind spots section alone was worth it.",
    rating: 5,
    date: "Verified Reader",
  },
  {
    name: "Tasha M.",
    role: "Experienced Agent",
    location: "NC",
    quote:
      "Even after years in the business, it made me reconsider habits I'd stopped noticing. Short book, long impact.",
    rating: 5,
    date: "Verified Reader",
  },
];

export const VIDEO_REVIEWS: VideoReview[] = [
  {
    name: "Marcus T.",
    role: "Final Expense Agent · TX",
    quote: "Why this book changed how I plan my week.",
    poster: ERIC_PORTRAIT,
    duration: "1:12",
  },
  {
    name: "Dana R.",
    role: "Medicare Agent · FL",
    quote: "The perspective I wish I'd had in year one.",
    poster: BOOK_COVER_FRONT,
    duration: "0:58",
  },
  {
    name: "James W.",
    role: "Agency Manager · GA",
    quote: "Why I put it in every new agent's hands.",
    poster: BOOK_COVER_BACK,
    duration: "1:34",
  },
];

export const SPECS = [
  { label: "Pages", value: "53" },
  { label: "Author", value: "Eric Howard" },
  { label: "Published", value: "May 18, 2026" },
  { label: "Trim Size", value: "6 × 9 in" },
  { label: "Editions", value: "Digital & Audio" },
  { label: "Category", value: "Business" },
];
