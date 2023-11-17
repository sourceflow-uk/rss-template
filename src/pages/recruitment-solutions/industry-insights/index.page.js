import { Content } from "@/ui";
import { getRoute } from "@/getters/getRoute";
import { createTitle } from "@/functions/createTitle";
import * as additionalComponents from "./__components";
import { simple_pages_helper } from "@/helpers/simple_pages_helper";

export default function BlogsPage({ content }) {
  return (
    <>
      <Content items={content} additionalComponents={additionalComponents} />
    </>
  );
}

export async function getStaticProps() {
  return {
    props: {
      meta: {
        title: createTitle("Blog"),
      },
      content: [
        {
          component: "BreadcrumbNavigation",
          props: {
            items: [
              { label: "Recruitment Solutions", href: "#" },
              { label: "Industry Insights", href: getRoute("industryInsights") },
            ],
          },
        },
        {
          component: "Header",
          props: {
            className: "text-tertiary",
            title: {
              path: "page.recruitment-solutions.industry-insights.component.Header.title",
              placeholder: "Industry Insights",
            },
            description: {
              path: "page.recruitment-solutions.industry-insights.component.Header.description",
              placeholder: "",
            },
          },
        },
        {
          component: "IndustryInsightsFeed",
          props: {
            items: simple_pages_helper.fetch({ parent: "3ac0b752-94d4-49ee-b17a-c45aac2c5eda" }).map((i) => ({
              title: i.title,
              image: i.card_image ?? null,
              url_slug: i.url_slug,
            })),
          },
        },
      ],
    },
  };
}
