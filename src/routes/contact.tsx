import { createFileRoute } from "@tanstack/react-router";
import { ContactPage } from "../components/store/ContactPage";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — 7Steps Book Store | Eric Howard" },
      {
        name: "description",
        content:
          "Contact The 7Steps Book Store for questions about Top 5 Reasons Why Insurance Agents Fail, digital delivery, and paperback ordering.",
      },
      { property: "og:title", content: "Contact — 7Steps Book Store" },
      {
        property: "og:description",
        content: "Contact The 7Steps Book Store for book and order questions.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: ContactPage,
});
