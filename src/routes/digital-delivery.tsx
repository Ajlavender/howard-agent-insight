import { createFileRoute } from "@tanstack/react-router";
import { LegalPage } from "../components/store/LegalPage";

export const Route = createFileRoute("/digital-delivery")({
  head: () => ({
    meta: [
      { title: "Digital Delivery — 7Steps Book Store" },
      {
        name: "description",
        content:
          "How digital editions of Top 5 Reasons Why Insurance Agents Fail are delivered after purchase.",
      },
      { property: "og:title", content: "Digital Delivery — 7Steps Book Store" },
      { property: "og:description", content: "How digital editions are delivered after purchase." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: () => (
    <LegalPage
      title="Digital Delivery"
      intro="Here's what to expect after you purchase a digital edition of the book."
      sections={[
        {
          h: "After Your Purchase",
          p: "Once your payment is confirmed, you'll receive the approved digital delivery instructions through the platform's checkout. Access is delivered for the format you selected.",
        },
        {
          h: "The Digital Bundle",
          p: "A bundle purchase includes both the e-book and audiobook editions. Each format is delivered according to its own delivery instructions.",
        },
        {
          h: "Device Compatibility",
          p: "Please verify device compatibility with the delivery instructions provided after purchase before assuming a specific playback or reading method.",
        },
        {
          h: "Need Help?",
          p: "If you don't receive your access instructions or have trouble with delivery, contact us through our Contact page with your order details.",
        },
      ]}
    />
  ),
});
