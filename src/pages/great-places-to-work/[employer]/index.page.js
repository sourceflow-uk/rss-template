import { Content } from "@/ui";
import { getRoute } from "@/getters/getRoute";
import { generateBody } from "@/faker/generateBody";
import { generateArrayOf } from "@/faker/generateArrayOf";
import { generateTitle } from "@/faker/generateTitle";
import { generateJob } from "@/faker/generateJob";
import { generatePromoItem } from "@/faker/generatePromoItem";
import { employer_helper } from "@/helpers/employer_helper";
import { employer_page_helper } from "@/helpers/employer_page_helper";
import { getAsset } from "@/getters/getAsset";
import { trimText } from "@/functions/trimText";

export default function EmployerPage({ content }) {
  return (
    <>
      <Content items={content} />
    </>
  );
}

export async function getStaticProps({ params }) {
  const employer = employer_helper.find(params.employer);

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
              { label: employer.name, href: getRoute("employer", { url_slug: employer.url_slug }) },
            ],
          },
        },
        {
          component: "Header",
          props: {
            className: employer.cover_image ? "text-white" : "text-tertiary",
            title: {
              path: `page.${employer.url_slug}.component.Header.title`,
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
              path: `page.${employer.url_slug}.component.Accordion.title`,
              placeholder: `Roles with ${employer.name}`,
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
              path: `page.${employer.url_slug}.component.NarrativePanel.title`,
              placeholder: "Why is Royal Mail a great place to work?",
            },
            description: {
              path: `page.${employer.url_slug}.component.NarrativePanel.description`,
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
              path: `page.${employer.url_slug}.component.LatestJobs.title`,
              placeholder: `Latest ${employer.name} Jobs`,
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
              path: `page.${employer.url_slug}.component.PromoSection.title`,
              placeholder: `Also in this section`,
            },
            items: employer_page_helper.fetch().map((i) => ({
              title: i.title,
              img: i.cover_image ?? getAsset("_theme.card.img.fallback") ?? null,
              description: trimText(i.body),
              href: getRoute("employerPage", { employer: employer.url_slug, page: i.url_slug }),
            })),
          },
        },
      ],
    },
  };
}

export async function getStaticPaths() {
  return {
    paths: employer_helper.toPaths((i) => ({ params: { employer: i.url_slug } })),
    fallback: false,
  };
}
