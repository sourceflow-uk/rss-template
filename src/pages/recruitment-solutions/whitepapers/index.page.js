import { Content } from "@/ui";
import { getRoute } from "@/getters/getRoute";
import { createTitle } from "@/functions/createTitle";
import { simple_pages_helper } from "@/helpers/simple_pages_helper";

export default function BlogsPage({ content }) {
  return (
    <>
      <Content items={content} />
    </>
  );
}

export async function getStaticProps() {
  return {
    props: {
      meta: {
        title: createTitle("Whitepapers"),
      },
      content: [
        {
          component: "BreadcrumbNavigation",
          props: {
            items: [
              { label: "Recruitment Solutions", href: "#" },
              { label: "Whitepapers", href: getRoute("whitepapers") },
            ],
          },
        },
        {
          component: "Header",
          props: {
            className: "text-tertiary",
            title: {
              path: "page.recruitment-solutions.whitepapers.component.Header.title",
              placeholder: "Whitepapers",
            },
            description: {
              path: "page.recruitment-solutions.whitepapers.component.Header.description",
              placeholder: "",
            },
          },
        },
        {
          component: "ArticleFeed",
          props: {
            items: simple_pages_helper.fetch({ parent: "ccf8d981-4a1d-46f9-8c3a-0e4c0807e9f6" }).map((i) => ({
              title: i.title,
              image: i.card_image ?? null,
              url_slug: i.url_slug,
            })),
            showSearchField: false,
            showCategoryFilter: false,
            showTagFilter: false,
          },
        },
      ],
    },
  };
}
