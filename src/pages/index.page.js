import { Content } from "@/ui";
import { career_advice_helper } from "@/helpers/career_advice_helper";
import { getRoute } from "@/getters/getRoute";
import { trimText } from "@/functions/trimText";
import { createTitle } from "@/functions/createTitle";
import { mini_carousel_helper } from "@/helpers/mini_carousel_helper";
import { jobs_helper } from "@/helpers/jobs_helper";

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
      meta: { title: createTitle("Home") },
      content: [
        {
          component: "Hero",
          props: {
            img1: { path: "page.home.component.Hero.img.1", src: "/assets/home/hero/1.jpg" },
            img2: { path: "page.home.component.Hero.img.2", src: "/assets/home/hero/2.jpg" },
            title: { path: "page.home.component.Hero.title", placeholder: "Flexible Work" },
            subtitle: { path: "page.home.component.Hero.subtitle", placeholder: "That’s All About <i>You</i>" },
          },
        },
        { component: "QuickJobSearch", props: {} },
        {
          component: "FeaturedEmployersCarousel",
          props: {
            title: { path: "page.home.component.FeaturedEmployersCarousel.title", placeholder: "Featured Employers" },
            visibleCount: 4,
          },
        },
        { component: "Divider" },
        {
          component: "PromoSection",
          props: {
            title: { path: "page.home.component.PromoSection.title", placeholder: "Careers Advice" },
            md: 3,
            items: career_advice_helper
              .fetch({ limit: 4, featured: true })
              .map(({ title, content, card_image, url_slug }) => ({
                title,
                img: card_image ?? null,
                description: trimText(content),
                href: getRoute("careerAdviceArticle", { url_slugs: [url_slug] }),
              })),
          },
        },
        { component: "Divider" },
        {
          component: "MiniCarousel",
          props: {
            title: { path: "page.home.component.MiniCarousel.title", placeholder: "" },
            items: mini_carousel_helper.fetch({
              filter: (i) => i.tags.toLowerCase().includes("home") || i.tags.includes("*"),
            }),
          },
        },
        { component: "Divider" },
        {
          component: "LatestJobs",
          props: {
            title: { path: "page.home.component.LatestJobs.title", placeholder: "Latest Jobs" },
            visibleCount: 4,
            items: jobs_helper.fetch(),
            filters: true,
          },
        },
        { component: "Divider" },
        {
          component: "LatestBlogs",
          props: { title: { path: "page.home.component.LatestBlogs.title", placeholder: "Latest Blogs" } },
        },
        { component: "Divider" },
      ],
    },
  };
}
