import { Content } from "@/ui";
import { getRoute } from "@/getters/getRoute";
import { generateImage } from "@/faker/generateImage";
import { generateDescription } from "@/faker/generateDescription";
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
            items: [
              {
                label: title,
                href: getRoute("jobs"),
              },
            ],
          },
        },
        {
          component: "Header",
          props: {
            className: "text-white",
            title: {
              path: "page.jobs.component.Header.title",
              placeholder: title,
            },
            description: generateDescription({ min: 2, max: 2 }),
            img: generateImage({ width: 1440, height: 300 }),
          },
        },
        {
          component: "JobsFeed",
        },
      ],
    },
  };
}
