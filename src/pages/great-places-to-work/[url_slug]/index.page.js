import { Content } from "@/ui";
import { getRoute } from "@/getters/getRoute";
import unslug from "unslug";
import { generateBody } from "@/faker/generateBody";
import { generateArrayOf } from "@/faker/generateArrayOf";
import { generateTitle } from "@/faker/generateTitle";
import { generateNarrativePanel } from "@/faker/generateNarrativePanel";
import { generateJob } from "@/faker/generateJob";
import { generatePromoItem } from "@/faker/generatePromoItem";
import { employer_helper } from "@/helpers/employer_helper";
import { generateImage } from "@/faker/generateImage";
import { generateDescription } from "@/faker/generateDescription";
import { generateCTA } from "@/faker/generateCTA";

export default function EmployerPage({ content }) {
  return (
    <>
      <Content items={content} />
    </>
  );
}

export async function getStaticProps({ params: { url_slug } }) {
  const employer = employer_helper.find(url_slug);

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
              { label: employer.name, href: getRoute("employer", { url_slug }) },
            ],
          },
        },
        {
          component: "Header",
          props: {
            className: employer.cover_image ? "text-white" : "text-tertiary",
            title: {
              path: `page.${url_slug}.component.Header.title`,
              placeholder: `Working with ${employer.name}`,
            },
            img: employer.cover_image ?? null,
          },
        },
        {
          component: "RichText",
          props: {
            className: "bg-primary text-white py-5",
            body: employer.content,
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
              { count: 4 },
            ),
          },
        },
        {
          component: "NarrativePanel",
          props: {
            className: "py-5 bg-light",
            title: {
              path: `page.${url_slug}.component.NarrativePanel.title`,
              placeholder: "Why is Royal Mail a great place to work?",
            },
            description: {
              path: `page.${url_slug}.component.NarrativePanel.description`,
              placeholder:
                "Lorem ipsum dolor sit amet consectetur. In magna risus condimentum tellus est. Pulvinar laoreet dui felis venenatis nam sed a erat. ",
            },
            video_embed_url: employer.video_embed_url ?? null,
            reverse: true,
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
  return { paths: employer_helper.toPaths(), fallback: false };
}
