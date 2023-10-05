import { Content } from "@/ui/Content";
import { generateSocialVideo } from "@/faker/generateSocialVideo";
import { generateArrayOf } from "@/faker/generateArrayOf";
import { generateBlockQuoteCard } from "@/faker/generateBlockQuoteCard";
import { generateMiniCarouselCard } from "@/faker/generateMiniCarouselCard";
import { generateJob } from "@/faker/generateJob";
import { generateArticle } from "@/faker/generateArticle";
import { generateKeyTabListing } from "@/faker/generateKeyTabListing";
import { generatePromoItem } from "@/faker/generatePromoItem";
import { generateLogoCard } from "@/faker/generateLogoCard";
import { generateHeroButton } from "@/faker/generateHeroButton";
import { generateTitle } from "@/faker/generateTitle";
import { generateBody } from "@/faker/generateBody";
import { generateNarrativePanel } from "@/faker/generateNarrativePanel";

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
        {
          component: "NarrativePanel",
          props: generateNarrativePanel(),
        },
        {
          component: "NarrativePanel",
          props: generateNarrativePanel({ reverse: true, video: true }),
        },
        {
          component: "RichText",
          props: {
            body: generateBody(),
          },
        },
        {
          component: "HeroButtonsGrid",
          props: {
            title: generateTitle(),
            items: generateArrayOf(generateHeroButton, { count: 8 }),
          },
        },
        {
          component: "LogoCarousel",
          props: {
            items: generateArrayOf(generateLogoCard, { count: 10 }),
          },
        },
        {
          component: "PromoSection",
          props: {
            items: generateArrayOf(generatePromoItem, { count: 4 }),
          },
        },
        {
          component: "KeyTabListing",
          props: {
            items: generateArrayOf(generateKeyTabListing, { count: 4 }),
          },
        },
        {
          component: "LatestBlogs",
          props: {
            items: generateArrayOf(generateArticle, { count: 3 }),
            button: {
              label: "View more blogs",
              href: "#",
            },
          },
        },
        {
          component: "LatestJobs",
          props: {
            items: generateArrayOf(generateJob, { count: 12 }),
            visibleCount: 4,
            button: {
              label: "View more jobs",
              href: "/jobs",
            },
          },
        },
        {
          component: "MiniCarousel",
          props: {
            items: generateArrayOf(generateMiniCarouselCard, { count: 3 }),
          },
        },
        {
          component: "BlockQuote",
          props: {
            title: "What people say",
            items: generateArrayOf(generateBlockQuoteCard, { count: 9 }),
            carousel: true,
            visibleCount: 3,
          },
        },
        { component: "SocialVideo", props: generateSocialVideo() },
      ],
    },
  };
}
