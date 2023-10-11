import { Content } from "@/ui";
import { getRoute } from "@/getters/getRoute";

export default function Page({ content }) {
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
                label: "Contact us",
                href: getRoute("contact"),
              },
            ],
          },
        },
        {
          component: "Header",
          props: {
            title: `Get in touch`,
          },
        },
      ],
    },
  };
}
