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
import { generateDescription } from "@/faker/generateDescription";
import { generateCaseStudy } from "@/faker/generateCaseStudy";
import { generateFeaturedTabListItem } from "@/faker/generateFeaturedTabListItem";
import { generateHeader } from "@/faker/generateHeader";
import { generateHeroCarouselItem } from "@/faker/generateHeroCarouselItem";
import { fakerEN_GB as faker } from "@faker-js/faker/locale/index";
import { generateHorizontalListing } from "@/faker/generateHorizontalListing";

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
          component: "Accordion",
          props: {
            items: generateArrayOf(
              () => ({
                title: generateTitle(),
                body: generateBody(),
                active: false,
              }),
              { count: 4 }
            ),
          },
        },
        {
          component: "Article",
          props: {
            ...generateArticle(),
            related: generateArrayOf(generateArticle, { count: 3 }),
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
        {
          component: "BrandPositioning",
          props: {
            title: generateTitle(),
            description: generateDescription(),
          },
        },
        {
          component: "CaseStudies",
          props: {
            items: generateArrayOf(generateCaseStudy, { count: 6 }),
          },
        },
        {
          component: "CollapsibleContent",
          props: {
            title: generateTitle(),
            body: generateBody(),
          },
        },
        {
          component: "CollapsibleSection",
          props: {
            title: generateTitle(),
            description: generateDescription(),
            items: generateArrayOf(
              () => ({
                title: generateTitle(),
                body: generateBody(),
              }),
              { count: 3 }
            ),
          },
        },
        {
          component: "FeatureTabsList",
          props: {
            items: generateArrayOf(generateFeaturedTabListItem, { count: 5 }),
          },
        },
        {
          component: "Header",
          props: generateHeader({ description: true, cta: true }),
        },
        {
          component: "HeroButtonsGrid",
          props: {
            title: generateTitle(),
            items: generateArrayOf(generateHeroButton, { count: 8 }),
          },
        },
        {
          component: "HeroCarousel",
          props: {
            items: generateArrayOf(generateHeroCarouselItem, { count: 6 }, { description: true }),
          },
        },
        {
          component: "HorizontalListings",
          props: {
            title: faker.lorem.words(2),
            items: generateArrayOf(generateHorizontalListing, { count: 3 }),
          },
        },
        {
          component: "NarrativePanel",
          props: generateNarrativePanel(),
        },
        {
          component: "RichText",
          props: {
            body: generateBody(),
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
        { component: "SocialVideo", props: generateSocialVideo() },
      ],
    },
  };
}
