import { Content } from "@/ui";
import { getRoute } from "@/getters/getRoute";
import { generateDescription } from "@/faker/generateDescription";
import { generateArrayOf } from "@/faker/generateArrayOf";
import { generatePromoItem } from "@/faker/generatePromoItem";
import { generateNarrativePanel } from "@/faker/generateNarrativePanel";
import { generateArticle } from "@/faker/generateArticle";
import { career_advice_helper } from "@/helpers/career_advice_helper";

export default function CareersAdvicePage({ content }) {
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
                label: "Jobs",
                href: getRoute("jobs"),
              },
              {
                label: "Career Advice",
                href: getRoute("careerAdvice"),
              },
            ],
          },
        },
        {
          component: "Header",
          props: {
            title: {
              path: `page.CareerAdvice.component.Header.title`,
              placeholder: "Career Advice",
            },
            description: generateDescription(),
          },
        },
        {
          component: "PromoSection",
          props: {
            items: career_advice_helper.fetch().map((i) => ({
              title: i.title,
              img: i.card_image ?? null,
              href: getRoute("careerAdviceArticle", { url_slug: i.url_slug }),
            })),
          },
        },
        {
          component: "NarrativePanel",
          props: {
            className: "py-5 bg-primary text-white",
            ...generateNarrativePanel({ reverse: true }),
          },
        },
        {
          component: "LatestBlogs",
          props: {
            title: { path: "page.careerAdvice.component.LatestBlogs.title", placeholder: "Latest Blogs" },
            items: generateArrayOf(generateArticle, { count: 3 }),
          },
        },
      ],
    },
  };
}
