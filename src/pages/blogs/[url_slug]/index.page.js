import { Content } from "@/ui";
import { generateArticle } from "@/faker/generateArticle";
import { generateArrayOf } from "@/faker/generateArrayOf";
import { getRoute } from "@/getters/getRoute";

export default function Page({ content }) {
  return (
    <>
      <Content items={content} />
    </>
  );
}

export async function getStaticProps({ params: { url_slug } }) {
  const article = generateArticle();
  const related = generateArrayOf(generateArticle, { count: 4 });

  return {
    props: {
      meta: {},
      content: [
        {
          component: "BreadcrumbNavigation",
          props: {
            items: [
              { label: "Blogs", href: getRoute("blogs") },
              { label: article.title, href: getRoute("blogPost", url_slug) },
            ],
          },
        },
        { component: "Article", props: { ...article, related } },
      ],
    },
  };
}

export async function getStaticPaths() {
  return { paths: [], fallback: false };
}
