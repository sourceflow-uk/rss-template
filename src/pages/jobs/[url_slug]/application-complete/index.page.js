import { Content } from "@/ui";
import { getRoute } from "@/getters/getRoute";
import { jobs_helper } from "@/helpers/jobs_helper";
import { createTitle } from "@/functions/createTitle";

export default function ApplyThankYouPage({ content }) {
  return (
    <>
      <Content items={content} />
    </>
  );
}

export async function getStaticProps({ params: { url_slug } }) {
  const job = jobs_helper.find(url_slug);
  const sectorsIds = jobs_helper.getCategoryValueIds("3186657c-e89c-4a6f-9157-35eb7fe0b379", job);
  const similar = jobs_helper.fetch({
    limit: 4,
    exclude: [job.id],
    filter: (i) => sectorsIds.some((s) => JSON.stringify(i.categories).includes(s)),
  });

  return {
    props: {
      meta: {
        title: createTitle("Application Complete", job.title),
      },
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
            title: { path: "page.job.application-complete.component.Header.title", placeholder: "Thank you!" },
            description: {
              path: "page.job.application-complete.component.Header.description",
              placeholder: `We've received your application for ${job.title} and will be in touch soon!`,
            },
            back: {
              path: "page.job.application-complete.component.Header.back",
              placeholder: `Back to ${job.title}`,
              href: getRoute("job", { url_slug }),
            },
          },
        },
        {
          component: "LatestJobs",
          props: {
            title: {
              path: "page.job.application-complete.component.LatestJobs.title",
              placeholder: "Similar positions",
            },
            items: similar,
          },
        },
      ],
    },
  };
}

export async function getStaticPaths() {
  return { paths: jobs_helper.toPaths(), fallback: false };
}
