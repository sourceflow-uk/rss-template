import { Content } from "@/ui";
import { getRoute } from "@/getters/getRoute";

export default function EmployersPage({ content }) {
  return (
    <>
      <Content items={content} />
    </>
  );
}

export async function getStaticProps() {
  return {
    props: {
      meta: {},
      content: [
        {
          component: "BreadcrumbNavigation",
          props: {
            items: [
              {
                label: "Jobs",
                href: getRoute("jobs"),
              },
              {
                label: "Great Places To Work",
                href: getRoute("employers"),
              },
            ],
          },
        },
      ],
    },
  };
}
