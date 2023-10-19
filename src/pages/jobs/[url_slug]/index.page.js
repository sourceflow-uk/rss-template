import { Content } from "@/ui";
import { getRoute } from "@/getters/getRoute";
import { jobs_helper } from "@/helpers/jobs_helper";
import * as additionalComponents from "./__components";

export default function JobPage({ content }) {
  return (
    <>
      <Content items={content} additionalComponents={additionalComponents} />
    </>
  );
}

export async function getStaticProps({ params: { url_slug } }) {
  const job = jobs_helper.find(url_slug);
  const related = jobs_helper.fetch({ exclude: [job.id] }); // TODO filter by sector
  const similar = jobs_helper.fetch({ exclude: [job.id] }); // TODO filter by similar pay

  return {
    props: {
      meta: {},
      content: [
        {
          component: "BreadcrumbNavigation",
          props: {
            items: [
              {
                label: "Find a Job",
                href: getRoute("jobs"),
              },
              {
                label: job.title,
                href: getRoute("job", { url_slug }),
              },
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
        { component: "SimilarJobs", props: { items: similar } },
        { component: "JobPageContent", props: { ...job, related } },
      ],
    },
  };
}

export async function getStaticPaths() {
  return { paths: [], fallback: false };
}
