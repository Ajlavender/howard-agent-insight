import { createFileRoute } from "@tanstack/react-router";
import { ProductPage } from "../components/store/ProductPage";

export const Route = createFileRoute("/products/top-5-reasons-why-insurance-agents-fail")({
  head: () => ({
    meta: [
      { title: "Top 5 Reasons Why Insurance Agents Fail — Eric Howard Book" },
      {
        name: "description",
        content:
          "Buy Top 5 Reasons Why Insurance Agents Fail by Eric Howard. Available in a digital e-book + audiobook bundle, e-book, audiobook, and paperback. Choose your format.",
      },
      { property: "og:title", content: "Top 5 Reasons Why Insurance Agents Fail — Eric Howard Book" },
      {
        property: "og:description",
        content:
          "Buy Top 5 Reasons Why Insurance Agents Fail by Eric Howard. Available in digital e-book, audiobook, bundle, and paperback.",
      },
      { property: "og:type", content: "product" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: ProductPage,
});
