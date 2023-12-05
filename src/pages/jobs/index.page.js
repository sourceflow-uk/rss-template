import { Content } from "@/ui";
import { getRoute } from "@/getters/getRoute";
import { createTitle } from "@/functions/createTitle";

export default function JobsPage({ content }) {
  return (
    <>
      <Content items={content} />
    </>
  );
}

export async function getStaticProps({}) {
  const title = "Find a Job";

  return {
    props: {
      meta: {
        title: createTitle(title),
      },
      content: [
        {
          component: "BreadcrumbNavigation",
          props: {
            items: [{ label: title, href: getRoute("jobs") }],
          },
        },
        {
          component: "Header",
          props: {
            className: "text-tertiary",
            title: { path: "page.jobs.component.Header.title", placeholder: title },
            description: { path: "page.jobs.component.Header.description", placeholder: "" },
            img: { path: "page.jobs.component.Header.img" },
          },
        },
        { component: "JobsFeed", id: "Jobs" },
      ],
    },
  };
}
