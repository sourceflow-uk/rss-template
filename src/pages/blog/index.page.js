import { Content } from "@/ui";
import { getRoute } from "@/getters/getRoute";
import { createTitle } from "@/functions/createTitle";
import { blog_helper } from "@/helpers/blog_helper";

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
        title: createTitle("Blog"),
      },
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
          component: "ArticleFeed",
          props: {
            items: blog_helper.fetch(),
            showSearchField: true,
            showCategoryFilter: true,
            showTagFilter: true,
          },
        },
      ],
    },
  };
}
