import { createFileRoute } from "@tanstack/react-router";
import { LegalPage } from "../components/store/LegalPage";

export const Route = createFileRoute("/terms-and-conditions")({
  head: () => ({
    meta: [
      { title: "Terms & Conditions — 7Steps Book Store" },
      {
        name: "description",
        content:
          "Terms and Conditions for using the 7Steps Book Store and purchasing Top 5 Reasons Why Insurance Agents Fail.",
      },
      { property: "og:title", content: "Terms & Conditions — 7Steps Book Store" },
      { property: "og:description", content: "Terms and Conditions for the 7Steps Book Store." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: () => (
    <LegalPage
      title="Terms & Conditions"
      intro="By using the 7Steps Book Store and purchasing Top 5 Reasons Why Insurance Agents Fail, you agree to these terms."
      sections={[
        {
          h: "Your Purchase",
          p: "Digital editions are delivered as described at checkout. Paperback orders are placed and fulfilled through Lulu, the book's print-on-demand retailer, and are subject to Lulu's terms. This website sells only the book and its formats — no training programs, courses, or coaching.",
        },
        {
          h: "Digital Access",
          p: "Digital editions are for your personal use. Please follow the delivery instructions provided after purchase and verify device compatibility before assuming a specific playback or reading method.",
        },
        {
          h: "No Earnings Guarantee",
          p: "The book shares perspective and lessons from Eric Howard's experience. It does not guarantee income, sales, or any specific business result.",
        },
        {
          h: "Changes",
          p: "We may update these terms from time to time. Continued use of the store after changes means you accept the updated terms.",
        },
      ]}
    />
  ),
});
