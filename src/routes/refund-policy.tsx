import { createFileRoute } from "@tanstack/react-router";
import { LegalPage } from "../components/store/LegalPage";

export const Route = createFileRoute("/refund-policy")({
  head: () => ({
    meta: [
      { title: "Refund Policy — 7Steps Book Store" },
      {
        name: "description",
        content:
          "Refund policy for digital and paperback purchases of Top 5 Reasons Why Insurance Agents Fail by Eric Howard.",
      },
      { property: "og:title", content: "Refund Policy — 7Steps Book Store" },
      { property: "og:description", content: "Refund policy for digital and paperback purchases." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: () => (
    <LegalPage
      title="Refund Policy"
      intro="We want you to feel confident about your purchase. Here's how refunds work for each format."
      sections={[
        {
          h: "Digital Editions",
          p: "Digital purchases (e-book, audiobook, and the digital bundle) follow the digital delivery terms provided at checkout. If you experience an issue accessing your purchase, please contact us and we'll help resolve it.",
        },
        {
          h: "Paperback",
          p: "Paperback orders are placed and fulfilled through Lulu. Refunds and returns for the physical book follow Lulu's return policy and are handled directly with them.",
        },
        {
          h: "How to Reach Us",
          p: "For any refund or access question, contact us through our Contact page with your order details and we'll assist you.",
        },
      ]}
    />
  ),
});
