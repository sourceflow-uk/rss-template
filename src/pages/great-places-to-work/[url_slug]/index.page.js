import { Content } from "@/ui";
import { getRoute } from "@/getters/getRoute";
import unslug from "unslug";
import { generateImage } from "@/faker/generateImage";
import { generateBody } from "@/faker/generateBody";
import { generateArrayOf } from "@/faker/generateArrayOf";
import { generateTitle } from "@/faker/generateTitle";
import { generateNarrativePanel } from "@/faker/generateNarrativePanel";
import { generateJob } from "@/faker/generateJob";
import { generatePromoItem } from "@/faker/generatePromoItem";

export default function EmployerPage({ content }) {
  return (
    <>
      <Content items={content} />
    </>
  );
}

export async function getStaticProps({ params: { url_slug } }) {
  return {
    props: {
      meta: {},
      content: [
        {
          component: "BreadcrumbNavigation",
          props: {
            items: [
              { label: "Find a Job", href: getRoute("jobs") },
              { label: "Great Places To Work", href: getRoute("employers") },
              { label: unslug(url_slug), href: getRoute("employer", { url_slug }) },
            ],
          },
        },
        {
          component: "Header",
          props: {
            title: {
              path: `page.${url_slug}.component.Header.title`,
              placeholder: `Working with ${unslug(url_slug)}`,
            },
            img: generateImage({ width: 1440, height: 365 }),
          },
        },
        {
          component: "RichText",
          props: {
            className: "bg-primary text-white py-5",
            body: generateBody(),
          },
        },
        {
          component: "Accordion",
          props: {
            className: "text-center py-5",
            title: {
              path: `page.${url_slug}.component.Accordion.title`,
              placeholder: `Roles with ${unslug(url_slug)}`,
            },
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
          component: "NarrativePanel",
          props: {
            className: "py-5 bg-light",
            ...generateNarrativePanel({ video: true, reverse: true }),
          },
        },
        {
          component: "LatestJobs",
          props: {
            title: {
              path: `page.${url_slug}.component.LatestJobs.title`,
              placeholder: `Latest ${unslug(url_slug)} Jobs`,
            },
            items: generateArrayOf(generateJob, { count: 12 }),
            visibleCount: 4,
          },
        },
        {
          component: "Divider",
        },
        {
          component: "PromoSection",
          props: {
            title: {
              path: `page.${url_slug}.component.PromoSection.title`,
              placeholder: `Also in this section`,
            },
            items: generateArrayOf(generatePromoItem, { count: 5 }),
          },
        },
      ],
    },
  };
}

export async function getStaticPaths() {
  return { paths: [], fallback: false };
}
