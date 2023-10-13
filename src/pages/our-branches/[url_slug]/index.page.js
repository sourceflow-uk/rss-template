import { Content } from "@/ui";
import { generateArrayOf } from "@/faker/generateArrayOf";
import { generateJob } from "@/faker/generateJob";
import { getRoute } from "@/getters/getRoute";
import { branchHelper } from "@/helpers/branchHelper";
import * as additionalComponents from "./__components";

export default function BranchPage({ content }) {
  return (
    <>
      <Content items={content} additionalComponents={additionalComponents} />
    </>
  );
}

export async function getStaticProps({ params: { url_slug } }) {
  const branch = branchHelper.find(url_slug);

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
              { label: branch.name, href: getRoute("branch", { url_slug }) },
            ],
          },
        },
        {
          component: "Header",
          props: {
            title: {
              path: `page.branch.${url_slug}.component.Header.title`,
              placeholder: `${branch.name} Branch`,
            },
            back: {
              path: "page.branch.component.Header.back",
              placeholder: `Back to branches`,
              href: getRoute("branches"),
            },
          },
        },
        { component: "BranchPageContent", props: { content: branch.content, address: branch.address } },
        {
          component: "Divider",
        },
        {
          component: "LatestJobs",
          props: {
            title: `Latest Jobs in ${branch.name}`,
            items: generateArrayOf(generateJob, { count: 8 }),
            visibleCount: 4,
          },
        },
      ],
    },
  };
}

export async function getStaticPaths() {
  return {
    paths: branchHelper.toPaths(),
    fallback: false,
  };
}
