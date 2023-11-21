import { Content } from "@/ui";
import { career_advice_helper } from "@/helpers/career_advice_helper";
import { getRoute } from "@/getters/getRoute";
import * as additionalComponents from "./__components";
import { createTitle } from "@/functions/createTitle";
import unslug from "unslug";

export default function CareerAdviceSubPage({ content }) {
  return (
    <>
      <Content items={content} additionalComponents={additionalComponents} />
    </>
  );
}

export async function getStaticProps({ params: { url_slugs } }) {
  const pages = url_slugs.map((url_slug, k) => ({
    url_slug,
    label: unslug(url_slug),
    href: getRoute("careerAdvice", { url_slugs: url_slugs.slice(0, k + 1) }),
  }));
  const [_page, _prevPage] = [...pages].reverse();
  const page = career_advice_helper.find(_page.url_slug);
  const parent = career_advice_helper.find(page.parent.id, "id") ?? null;
  const children = career_advice_helper.fetch({ filter: (i) => i.parent.id === page.id });
  const siblings = career_advice_helper.fetch({ exclude: [page.id], filter: (i) => i.parent.id === page.parent.id });

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
              ...pages,
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
            title: page.title,
            body: page.content,
            embed_media: page.embed_media ?? null,
            url_slug: page.url_slug,
            url_slugs,
            children,
            siblings,
            parent,
          },
        },
      ],
    },
  };
}

export async function getStaticPaths() {
  return {
    paths: career_advice_helper.toNestedPaths(),
    fallback: false,
  };
}
