import { Content } from "@/ui";
import { career_advice_helper } from "@/helpers/career_advice_helper";
import { getRoute } from "@/getters/getRoute";
import * as additionalComponents from "./__components";
import { createTitle } from "@/functions/createTitle";

export default function CareerAdviceSubPage({ content }) {
  return (
    <>
      <Content items={content} additionalComponents={additionalComponents} />
    </>
  );
}

export async function getStaticProps({ params: { url_slug } }) {
  const page = career_advice_helper.find(url_slug);

  return {
    props: {
      meta: {
        title: createTitle(page.title, "Career Advice"),
      },
      content: [
        {
          component: "BreadcrumbNavigation",
          props: {
            items: [
              {
                label: "Jobs",
                href: getRoute("jobs"),
              },
              {
                label: "Career Advice",
                href: getRoute("careerAdvice"),
              },
              { label: page.title, href: getRoute("careerAdviceArticle", { url_slug }) },
            ],
          },
        },
        {
          component: "Header",
          props: {
            className: page.cover_image ? "text-white" : "text-tertiary",
            title: page.title,
            img: page.cover_image ?? null,
          },
        },
        {
          component: "CareerAdviceArticleContent",
          props: {
            id: page.id,
            body: page.content,
            embed_media: page.embed_media ?? null,
          },
        },
      ],
    },
  };
}

export async function getStaticPaths() {
  return {
    paths: career_advice_helper.toPaths(),
    fallback: false,
  };
}
