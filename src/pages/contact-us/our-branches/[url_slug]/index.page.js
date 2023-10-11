import { Content } from "@/ui";
import unslug from "unslug";
import { generateArrayOf } from "@/faker/generateArrayOf";
import { generateJob } from "@/faker/generateJob";
import { getRoute } from "@/getters/getRoute";

export default function BranchPage({ content }) {
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
              { label: "Contact us", href: getRoute("contact") },
              { label: "Our Branches", href: getRoute("branches") },
              { label: unslug(url_slug), href: getRoute("branch", { url_slug }) },
            ],
          },
        },
        {
          component: "Header",
          props: {
            title: `${unslug(url_slug)} Branch`,
            back: {
              label: `Back to branches`,
              href: getRoute("branches"),
            },
          },
        },
        {
          component: "LatestJobs",
          props: {
            title: `Latest Jobs in ${unslug(url_slug)}`,
            items: generateArrayOf(generateJob, { count: 8 }),
            visibleCount: 4,
          },
        },
      ],
    },
  };
}

export async function getStaticPaths() {
  return { paths: [], fallback: false };
}