import { Content } from "@/ui";
import { getRoute } from "@/getters/getRoute";
import * as additionalComponents from "./__components";

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
      meta: {},
      content: [
        {
          component: "BreadcrumbNavigation",
          props: {
            items: [
              {
                label: "Blog",
                href: getRoute("blog"),
              },
            ],
          },
        },
        {
          component: "Header",
          props: {
            className: "text-tertiary",
            title: {
              path: "page.blogs.component.Header.title",
              placeholder: "Blue Arrow Blog",
            },
            description: {
              path: "page.blogs.component.Header.description",
              placeholder:
                "Lorem ipsum dolor sit amet consectetur. Ut id ultrices netus est massa. Arcu libero ut fringilla enim aliquam feugiat lectus. Massa.",
            },
          },
        },
        {
          component: "BlogFeed",
        },
      ],
    },
  };
}
