import { Content } from "@/ui";
import { generateArticle } from "@/faker/generateArticle";
import { generateArrayOf } from "@/faker/generateArrayOf";
import { getRoute } from "@/getters/getRoute";
import { generateJob } from "@/faker/generateJob";
import unslug from "unslug";

export default function JobPage({ content }) {
  return (
    <>
      <Content items={content} />
    </>
  );
}

export async function getStaticProps({ params: { url_slug } }) {
  const job = generateJob();

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
      ],
    },
  };
}

export async function getStaticPaths() {
  return { paths: [], fallback: false };
}