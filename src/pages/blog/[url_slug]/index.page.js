import { Content } from "@/ui";
import { getRoute } from "@/getters/getRoute";
import * as additionalComponents from "./__components";
import { blogHelper } from "@/helpers/blogHelper";

export default function BlogPostPage({ content }) {
  return (
    <>
      <Content items={content} additionalComponents={additionalComponents} />
    </>
  );
}

export async function getStaticProps({ params: { url_slug } }) {
  const blogPost = blogHelper.find(url_slug);
  const related = blogHelper.fetch({ limit: 3 }); // TODO amend to fetch actual related blogPosts

  return {
    props: {
      meta: {},
      content: [
        {
          component: "BreadcrumbNavigation",
          props: {
            items: [
              { label: "Blog", href: getRoute("blog") },
              { label: blogPost.title, href: getRoute("blogPost", { url_slug }) },
            ],
          },
        },
        { component: "BlogArticleContent", props: { ...blogPost, related } },
      ],
    },
  };
}

export async function getStaticPaths() {
  return {
    paths: blogHelper.toPaths(),
    fallback: false,
  };
}
