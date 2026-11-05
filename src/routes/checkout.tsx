import { createFileRoute } from "@tanstack/react-router";
import { CheckoutPage } from "../components/store/CheckoutPage";

export const Route = createFileRoute("/checkout")({
  head: () => ({
    meta: [
      { title: "Checkout — Top 5 Reasons Why Insurance Agents Fail" },
      {
        name: "description",
        content:
          "Secure checkout for Top 5 Reasons Why Insurance Agents Fail by Eric Howard. Choose your digital format and complete your purchase.",
      },
      { property: "og:title", content: "Checkout — Top 5 Reasons Why Insurance Agents Fail" },
      { property: "og:description", content: "Secure checkout for Eric Howard's book." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: CheckoutPage,
});
