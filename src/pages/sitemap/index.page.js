import { Content } from "@/ui";
import * as additionalComponents from "./__components";
import { createTitle } from "@/functions/createTitle";
import { getRoute } from "@/getters/getRoute";

export default function SitemapPage({ content }) {
  return (
    <>
      <Content items={content} additionalComponents={additionalComponents} />
    </>
  );
}

export async function getStaticProps() {
  return {
    props: {
      meta: { title: createTitle("Sitemap") },
      content: [
        {
          component: "BreadcrumbNavigation",
          props: {
            items: [{ label: "Sitemap", href: getRoute("/sitemap") }],
          },
        },
        {
          component: "Header",
          props: {
            className: "text-tertiary",
            title: { path: "page.sitemap.component.Header.title", placeholder: "Sitemap" },
            description: { path: "page.sitemap.component.Header.description" },
          },
        },
        { component: "SitemapContent" },
      ],
    },
  };
}
