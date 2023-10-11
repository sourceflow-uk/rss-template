import { Content } from "@/ui";
import { getRoute } from "@/getters/getRoute";
import * as additionalComponents from "./__components";

export default function ContactPage({ content }) {
  return (
    <>
      <Content items={content} additionalComponents={additionalComponents} />
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
        {
          component: "ContactPageContent",
          props: {},
        },
      ],
    },
  };
}
