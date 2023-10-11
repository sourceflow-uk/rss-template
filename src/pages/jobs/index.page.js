import { Content } from "@/ui";
import { getRoute } from "@/getters/getRoute";
import { generateImage } from "@/faker/generateImage";
import { generateDescription } from "@/faker/generateDescription";

export default function JobsPage({ content }) {
  return (
    <>
      <Content items={content} />
    </>
  );
}

export async function getStaticProps({}) {
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
            ],
          },
        },
        {
          component: "Header",
          props: {
            title: "Find a Job",
            description: generateDescription({ min: 2, max: 2 }),
            img: generateImage({ width: 1440, height: 300 }),
          },
        },
      ],
    },
  };
}
