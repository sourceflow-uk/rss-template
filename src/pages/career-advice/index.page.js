import { Content } from "@/ui";
import { getRoute } from "@/getters/getRoute";
import { generateDescription } from "@/faker/generateDescription";
import { generateArrayOf } from "@/faker/generateArrayOf";
import { generateNarrativePanel } from "@/faker/generateNarrativePanel";
import { generateArticle } from "@/faker/generateArticle";
import { career_advice_helper } from "@/helpers/career_advice_helper";
import { getAsset } from "@/getters/getAsset";
import { trimText } from "@/functions/trimText";

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
            description: {
              path: "page.CareerAdvice.component.Header.description",
              placeholder:
                "Whether you're looking for your first job or looking to take that next step in your career, we have a range of useful tools that can help.",
            },
          },
        },
        {
          component: "PromoSection",
          props: {
            items: [
              ...career_advice_helper.fetch({ limit: 4, featured: true }).map((i) => ({
                title: i.title,
                description: trimText(i.content),
                img: i.card_image ?? null,
                href: getRoute("careerAdviceArticle", { url_slug: i.url_slug }),
              })),
              {
                title: {
                  path: "page.careerAdvice.component.PromoSection.blog.title",
                  placeholder: "Our Blogs",
                },
                img: getAsset("_theme.blog.promoItem.img"),
                description: {
                  path: "page.careerAdvice.component.PromoSection.blog.description",
                  placeholder:
                    "No matter what stage you are at in your career you'll no doubt find our blogs helpful and entertaining. Click here to find out more.",
                },
                href: getRoute("blog"),
              },
              {
                title: {
                  path: "page.careerAdvice.component.PromoSection.branches.title",
                  placeholder: "Your local Blue Arrow branch",
                },
                img: getAsset("_theme.branches.promoItem.img"),
                description: {
                  path: "page.careerAdvice.component.PromoSection.branches.description",
                  placeholder: "Find and contact your local branch for opportunities.",
                },
                href: getRoute("branches"),
              },
            ],
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
          },
        },
      ],
    },
  };
}
