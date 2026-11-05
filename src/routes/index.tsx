import { createFileRoute } from "@tanstack/react-router";
import { HomeHero } from "../components/store/sections/HomeHero";
import { PurchaseSection } from "../components/store/sections/PurchaseSection";
import { MarqueeStrip } from "../components/store/sections/MarqueeStrip";
import { ProblemSection } from "../components/store/sections/ProblemSection";
import { InsideTheBook } from "../components/store/sections/InsideTheBook";
import { BookDetail } from "../components/store/sections/BookDetail";
import { AuthorSpotlight } from "../components/store/sections/AuthorSpotlight";
import { AudienceCards } from "../components/store/sections/AudienceCards";
import { FormatComparison } from "../components/store/sections/FormatComparison";
import { FaqSection } from "../components/store/sections/FaqSection";
import { FinalCta } from "../components/store/sections/FinalCta";
import { EmailSignup } from "../components/store/sections/EmailSignup";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Top 5 Reasons Why Insurance Agents Fail | Eric Howard" },
      {
        name: "description",
        content:
          "Discover Eric Howard's book, Top 5 Reasons Why Insurance Agents Fail. Learn about the habits, mindset traps, and mistakes that can hold insurance agents back. Available in paperback, e-book, and audiobook.",
      },
      { property: "og:title", content: "Top 5 Reasons Why Insurance Agents Fail | Eric Howard" },
      {
        property: "og:description",
        content:
          "Discover Eric Howard's book, Top 5 Reasons Why Insurance Agents Fail. Learn about the habits, mindset traps, and mistakes that can hold insurance agents back. Available in paperback, e-book, and audiobook.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <>
      <HomeHero />
      <PurchaseSection />
      <MarqueeStrip />
      <ProblemSection />
      <InsideTheBook />
      <BookDetail />
      <AuthorSpotlight />
      <AudienceCards />
      <FormatComparison />
      <FaqSection />
      <FinalCta />
      <EmailSignup />
    </>
  );
}
