import { Content } from "@/ui";
import { generateArticle } from "@/faker/generateArticle";
import { generateArrayOf } from "@/faker/generateArrayOf";
import { getRoute } from "@/getters/getRoute";
import * as additionalComponents from "./__components";

export default function BlogPostPage({ content }) {
  return (
    <>
      <Content items={content} additionalComponents={additionalComponents} />
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
              { label: "Blog", href: getRoute("blog") },
              { label: article.title, href: getRoute("blogPost", { url_slug }) },
            ],
          },
        },
        { component: "BlogArticleContent", props: { ...article, related } },
      ],
    },
  };
}

export async function getStaticPaths() {
  return { paths: [], fallback: false };
}
