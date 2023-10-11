import { Content } from "@/ui";
import { getArticles } from "@/getters/getArticles";
import { getRoute } from "@/getters/getRoute";

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
      meta: {},
      content: [
        {
          component: "BreadcrumbNavigation",
          props: {
            items: [
              {
                label: "Blogs",
                href: getRoute("blogs"),
              },
            ],
          },
        },
        {
          component: "Header",
          props: {
            title: "Blue Arrow Blog",
            description:
              "Lorem ipsum dolor sit amet consectetur. Ut id ultrices netus est massa. Arcu libero ut fringilla enim aliquam feugiat lectus. Massa.",
          },
        },
        {
          component: "BlogFeed",
          props: {
            items: getArticles(),
          },
        },
      ],
    },
  };
}
