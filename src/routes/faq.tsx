import { createFileRoute } from "@tanstack/react-router";
import { FaqPage } from "../components/store/FaqPage";

export const Route = createFileRoute("/faq")({
  head: () => ({
    meta: [
      { title: "FAQ — Top 5 Reasons Why Insurance Agents Fail | Eric Howard" },
      {
        name: "description",
        content:
          "Answers about Eric Howard's book Top 5 Reasons Why Insurance Agents Fail — formats, digital delivery, paperback ordering, refunds, and how it differs from The 7Steps™ System.",
      },
      { property: "og:title", content: "FAQ — Top 5 Reasons Why Insurance Agents Fail" },
      {
        property: "og:description",
        content:
          "Answers about formats, digital delivery, paperback ordering, refunds, and how the book differs from The 7Steps™ System.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: FaqPage,
});
