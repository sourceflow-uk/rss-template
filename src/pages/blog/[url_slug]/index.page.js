import { Content } from "@/ui";
import { getRoute } from "@/getters/getRoute";
import * as additionalComponents from "./__components";
import { blog_helper } from "@/helpers/blog_helper";
import { createTitle } from "@/functions/createTitle";

export default function BlogPostPage({ content }) {
  return (
    <>
      <Content items={content} additionalComponents={additionalComponents} />
    </>
  );
}

export async function getStaticProps({ params: { url_slug } }) {
  const blogPost = blog_helper.find(url_slug);
  const related = blog_helper.fetch({ limit: 3 }); // TODO amend to fetch actual related blogPosts

  return {
    props: {
      meta: {
        title: createTitle(blogPost.title, "Blog"),
      },
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
    paths: blog_helper.toPaths(),
    fallback: false,
  };
}
