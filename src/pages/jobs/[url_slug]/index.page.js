import Head from "next/head";
import { Content, GoogleJobsSchema } from "@/ui";
import { getRoute } from "@/getters/getRoute";
import { getGlobal } from "@/getters/getGlobal";
import { jobs_helper } from "@/helpers/jobs_helper";
import * as additionalComponents from "./__components";

export default function JobPage({ job, content }) {
  const global = getGlobal();
  const job_types = jobs_helper.getCategoryValues("275d8990-bd9e-4f79-a0e2-d81bb734c855", job);
  const [employment_type] = job_types.map(
    (i) =>
      ({
        "03ae7fb9-715c-44bd-9c2e-ed484c5a1828": "FULL_TIME", // Permanent
        "de22c745-1acc-4ebb-b979-eff86a3bd7a3": "FULL_TIME",
        "d9105bf6-e762-4748-80aa-072e00e6c8a9": "PART_TIME",
        "a6fe610b-bf48-46a1-aaef-43ad2c88a925": "CONTRACTOR",
        "7d5b3acb-dd46-4d1b-9fd7-d29446eba46a": "TEMPORARY",
      })[i.id],
  );

  return (
    <>
      <Head>
        <meta property="og:title" content={job.title} />
        <meta property="og:url" content={`/jobs/${job.url_slug}`} />
        <meta name="twitter:title" content={job.title} />
        <meta
          name="image"
          property="og:image"
          content={job.image ?? "https://cdn.sourceflow.co.uk/__gallery/a6fcd63a-95c0-4823-827f-5641d57dc087"}
        />
        <meta
          name="twitter:image"
          content={job.image ?? "https://cdn.sourceflow.co.uk/__gallery/a6fcd63a-95c0-4823-827f-5641d57dc087"}
        />
      </Head>
      <GoogleJobsSchema
        job={job}
        employment_type={employment_type}
        site_name={global["_theme.company.name"]}
        site_domain_link={global["_theme.company.domain"]}
        site_google_logo_link={global["_theme.company.logo"]}
      />
      <Content items={content} additionalComponents={additionalComponents} />
    </>
  );
}

export async function getStaticProps({ params: { url_slug } }) {
  const job = jobs_helper.find(url_slug);
  const sectorsIds = jobs_helper.getCategoryValueIds("3186657c-e89c-4a6f-9157-35eb7fe0b379", job);
  const related = jobs_helper.fetch({
    limit: 10,
    exclude: [job.id],
    filter: (i) => sectorsIds.some((s) => JSON.stringify(i.categories).includes(s)),
  });
  const similar = jobs_helper.fetch({
    limit: 4,
    exclude: [job.id],
    filter: (i) => sectorsIds.some((s) => JSON.stringify(i.categories).includes(s)),
  });

  return {
    props: {
      meta: {},
      job,
      content: [
        {
          component: "BreadcrumbNavigation",
          props: {
            items: [
              { label: "Find a Job", href: getRoute("jobs") },
              { label: job.title, href: getRoute("job", { url_slug }) },
            ],
          },
        },
        {
          component: "Header",
          props: {
            className: "text-tertiary",
            title: job.title,
            back: {
              path: "page.job.component.Header.back",
              placeholder: "Back to job search",
              href: getRoute("jobs"),
            },
          },
        },
        {
          component: "SimilarJobs",
          props: {
            items: similar.map((i) => ({
              ...i,
              href: getRoute("job", { url_slug: i.url_slug }),
            })),
          },
        },
        {
          component: "JobPageContent",
          props: {
            ...job,
            related: related.map((i) => ({
              ...i,
              href: getRoute("job", { url_slug: i.url_slug }),
            })),
          },
        },
      ],
    },
  };
}

export async function getStaticPaths() {
  return { paths: jobs_helper.toPaths(), fallback: false };
}
