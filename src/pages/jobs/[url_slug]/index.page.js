import { Content } from "@/ui";
import { getRoute } from "@/getters/getRoute";
import { generateJob } from "@/faker/generateJob";
import { generateArrayOf } from "@/faker/generateArrayOf";
import * as additionalComponents from "./__components";
import unslug from "unslug";

export default function JobPage({ content }) {
  return (
    <>
      <Content items={content} additionalComponents={additionalComponents} />
    </>
  );
}

export async function getStaticProps({ params: { url_slug } }) {
  const job = generateJob();
  const related = generateArrayOf(generateJob, { count: 5 });

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
                label: unslug(url_slug),
                href: getRoute("job", { url_slug }),
              },
            ],
          },
        },
        {
          component: "Header",
          props: {
            title: unslug(url_slug),
            back: {
              label: `Back to job search`,
              href: getRoute("jobs"),
            },
          },
        },
        { component: "SimilarJobs", props: { items: generateArrayOf(generateJob, { count: 4 }) } },
        { component: "JobPageContent", props: { ...job, related } },
      ],
    },
  };
}

export async function getStaticPaths() {
  return { paths: [], fallback: false };
}
