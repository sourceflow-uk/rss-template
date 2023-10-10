import { Content } from "@/ui";
import { fakerEN_GB as faker } from "@faker-js/faker/locale/index";
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
import { generateHorizontalListing } from "@/faker/generateHorizontalListing";
import { generateMultiTileCard } from "@/faker/generateMultiTileCard";
import { generateOfficeLocationCard } from "@/faker/generateOfficeLocationCard";
import { generatePromoButton } from "@/faker/generatePromoButton";
import { generatePromotionalCarouselItem } from "@/faker/generatePromotionalCarouselItem";
import { generateCTA } from "@/faker/generateCTA";
import { generateRecruiter } from "@/faker/generateRecruiter";
import { generateRecruiterListingItem } from "@/faker/generateRecruiterListingItem";
import { generateTeamBio } from "@/faker/generateTeamBio";
import { generateEmployer } from "@/faker/generateEmployer";

export default function Page({ content }) {
  return (
    <>
      <Content items={content} demoMode={true} />
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
          component: "FeaturedEmployers",
          props: {
            description: generateDescription(),
            items: generateArrayOf(generateEmployer, { count: 10 }),
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
          component: "KeyTabListing",
          props: {
            items: generateArrayOf(generateKeyTabListing, { count: 4 }),
          },
        },
        {
          component: "LatestBlogs",
          props: {
            items: generateArrayOf(generateArticle, { count: 3 }),
          },
        },
        {
          component: "LatestJobs",
          props: {
            items: generateArrayOf(generateJob, { count: 12 }),
            visibleCount: 4,
          },
        },
        {
          component: "LogoCarousel",
          props: {
            items: generateArrayOf(generateLogoCard, { count: 10 }),
          },
        },
        {
          component: "MiniCarousel",
          props: {
            items: generateArrayOf(generateMiniCarouselCard, { count: 3 }),
          },
        },
        {
          component: "MultiTiles",
          props: {
            items: generateArrayOf(generateMultiTileCard, { count: 12 }),
          },
        },
        {
          component: "NarrativePanel",
          props: generateNarrativePanel(),
        },
        {
          component: "OfficeLocations",
          props: {
            items: generateArrayOf(generateOfficeLocationCard, { count: 4 }),
          },
        },
        {
          component: "PromoButtons",
          props: {
            items: generateArrayOf(generatePromoButton, { count: 3 }),
          },
        },
        {
          component: "PromoSection",
          props: {
            items: generateArrayOf(generatePromoItem, { count: 4 }),
          },
        },
        {
          component: "PromotionalCarousel",
          props: {
            items: generateArrayOf(generatePromotionalCarouselItem, { count: 3 }),
          },
        },
        {
          component: "PromotionalPanel",
          props: {
            items: generateArrayOf(
              () => ({
                title: generateTitle(),
                description: generateDescription(),
                cta: generateCTA(),
              }),
              { count: 2 }
            ),
          },
        },
        {
          component: "QuickJobSearch",
          props: {},
        },
        {
          component: "Recruiter",
          props: generateRecruiter(),
        },
        {
          component: "RecruiterListing",
          props: {
            items: generateArrayOf(generateRecruiterListingItem, { count: 3 }),
          },
        },
        {
          component: "RelatedJobs",
          props: {
            items: generateArrayOf(generateJob, { count: 4 }),
          },
        },
        {
          component: "RichText",
          props: {
            body: generateBody(),
          },
        },
        {
          component: "SectionHeading",
          props: {
            title: generateTitle(),
          },
        },
        {
          component: "SimilarJobs",
          props: {
            items: generateArrayOf(generateJob, { count: 4 }),
          },
        },
        { component: "SocialVideo", props: generateSocialVideo() },
        { component: "TeamBio", props: generateTeamBio() },
        {
          component: "TrendingJobs",
          props: {},
        },
      ],
    },
  };
}