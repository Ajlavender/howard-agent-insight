import { createFileRoute } from "@tanstack/react-router";
import { AboutEricPage } from "../components/store/AboutEricPage";

export const Route = createFileRoute("/about-eric")({
  head: () => ({
    meta: [
      { title: "Meet Eric Howard — Author of Top 5 Reasons Why Insurance Agents Fail" },
      {
        name: "description",
        content:
          "Eric Howard has spent more than 30 years in the insurance industry. Learn about the experience behind The 7Steps™ System and why he wrote Top 5 Reasons Why Insurance Agents Fail.",
      },
      {
        property: "og:title",
        content: "Meet Eric Howard — Author of Top 5 Reasons Why Insurance Agents Fail",
      },
      {
        property: "og:description",
        content:
          "Eric Howard has spent more than 30 years in the insurance industry. Learn about the experience behind The 7Steps™ System.",
      },
      { property: "og:type", content: "profile" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: AboutEricPage,
});
