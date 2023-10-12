import { Content } from "@/ui";
import { generateArrayOf } from "@/faker/generateArrayOf";
import { generateArticle } from "@/faker/generateArticle";
import { generateJob } from "@/faker/generateJob";
import { generateMiniCarouselCard } from "@/faker/generateMiniCarouselCard";
import { generatePromoItem } from "@/faker/generatePromoItem";
import { generateLogoCard } from "@/faker/generateLogoCard";

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
          component: "LogoCarousel",
          props: {
            title: { path: "page.home.component.LogoCarousel.title", placeholder: "Featured Employers" },
            items: generateArrayOf(generateLogoCard, { count: 8 }),
            visibleCount: 4,
          },
        },
        {
          component: "PromoSection",
          props: {
            title: { path: "page.home.component.PromoSection.title", placeholder: "Careers Advice" },
            items: generateArrayOf(generatePromoItem, { count: 4 }),
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
