import { Content } from "@/ui";
import { getRoute } from "@/getters/getRoute";
import { generateDescription } from "@/faker/generateDescription";
import { generateArrayOf } from "@/faker/generateArrayOf";
import { generatePromoItem } from "@/faker/generatePromoItem";
import { generateNarrativePanel } from "@/faker/generateNarrativePanel";
import { generateArticle } from "@/faker/generateArticle";

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
            items: generateArrayOf(generatePromoItem, { count: 6 }),
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
