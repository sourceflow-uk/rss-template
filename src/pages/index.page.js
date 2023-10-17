import { Content } from "@/ui";
import { generateArrayOf } from "@/faker/generateArrayOf";
import { generateArticle } from "@/faker/generateArticle";
import { generateJob } from "@/faker/generateJob";
import { generateMiniCarouselCard } from "@/faker/generateMiniCarouselCard";
import { career_advice_helper } from "@/helpers/career_advice_helper";
import { getRoute } from "@/getters/getRoute";
import { getAsset } from "@/getters/getAsset";
import { trimText } from "@/functions/trimText";

export default function Page({ content }) {
  return (
    <>
      <Content items={content} />
    </>
  );
}

export async function getStaticProps({}) {
  return {
    props: {
      meta: {},
      content: [
        { component: "QuickJobSearch", props: {} },
        {
          component: "FeaturedEmployersCarousel",
          props: {
            title: { path: "page.home.component.FeaturedEmployersCarousel.title", placeholder: "Featured Employers" },
            visibleCount: 4,
          },
        },
        {
          component: "PromoSection",
          props: {
            title: { path: "page.home.component.PromoSection.title", placeholder: "Careers Advice" },
            items: career_advice_helper
              .fetch({ limit: 4, featured: true })
              .map(({ title, content, card_image, url_slug }) => ({
                title,
                img: card_image ?? null,
                description: trimText(content),
                href: getRoute("careerAdviceArticle", { url_slug }),
              })),
          },
        },
        { component: "Divider" },
        {
          component: "MiniCarousel",
          props: {
            title: { path: "page.home.component.MiniCarousel.title", placeholder: "" },
            items: generateArrayOf(generateMiniCarouselCard, { count: 3 }),
          },
        },
        { component: "Divider" },
        {
          component: "LatestJobs",
          props: {
            title: { path: "page.home.component.LatestJobs.title", placeholder: "Latest Jobs" },
            items: generateArrayOf(generateJob, { count: 12 }),
            visibleCount: 4,
          },
        },
        { component: "Divider" },
        {
          component: "LatestBlogs",
          props: {
            title: { path: "page.home.component.LatestBlogs.title", placeholder: "Latest Blogs" },
            items: generateArrayOf(generateArticle, { count: 3 }),
          },
        },
      ],
    },
  };
}
