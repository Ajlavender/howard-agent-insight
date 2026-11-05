import { createFileRoute } from "@tanstack/react-router";
import { OrderConfirmationPage } from "../components/store/OrderConfirmationPage";

export const Route = createFileRoute("/order-confirmation")({
  head: () => ({
    meta: [
      { title: "Order Confirmation — Top 5 Reasons Why Insurance Agents Fail" },
      {
        name: "description",
        content:
          "Thank you for your purchase of Top 5 Reasons Why Insurance Agents Fail by Eric Howard.",
      },
      {
        property: "og:title",
        content: "Order Confirmation — Top 5 Reasons Why Insurance Agents Fail",
      },
      { property: "og:description", content: "Thank you for your purchase." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: OrderConfirmationPage,
});
