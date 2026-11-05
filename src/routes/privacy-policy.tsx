import { createFileRoute } from "@tanstack/react-router";
import { LegalPage } from "../components/store/LegalPage";

export const Route = createFileRoute("/privacy-policy")({
  head: () => ({
    meta: [
      { title: "Privacy Policy — 7Steps Book Store" },
      {
        name: "description",
        content: "Privacy Policy for the 7Steps Book Store, operated by The 7Steps, LLC.",
      },
      { property: "og:title", content: "Privacy Policy — 7Steps Book Store" },
      { property: "og:description", content: "Privacy Policy for the 7Steps Book Store." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: () => (
    <LegalPage
      title="Privacy Policy"
      intro="Your privacy matters to The 7Steps, LLC. This policy explains what information we collect and how we use it."
      sections={[
        {
          h: "Information We Collect",
          p: "When you purchase a book or sign up for updates, we collect the contact and order information you provide, such as your name, email, and payment details. Payment is processed securely through our payment provider; we do not store full card numbers.",
        },
        {
          h: "How We Use Information",
          p: "We use your information to process orders, deliver digital purchases, provide customer support, and send updates you've requested. We do not sell your personal information.",
        },
        {
          h: "Third-Party Services",
          p: "Digital purchases are processed through our payment and fulfillment providers, and paperback orders are fulfilled through Lulu. Each provider handles your data according to its own privacy policy.",
        },
        {
          h: "Contact",
          p: "Questions about your privacy? Reach out through our Contact page and we'll be glad to help.",
        },
      ]}
    />
  ),
});
