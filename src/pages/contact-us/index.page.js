import { Content } from "@/ui";
import { getRoute } from "@/getters/getRoute";
import * as additionalComponents from "./__components";
import { createTitle } from "@/functions/createTitle";

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
      meta: { title: createTitle("Contact us") },
      content: [
        {
          component: "BreadcrumbNavigation",
          props: {
            items: [{ label: "Contact us", href: getRoute("contact") }],
          },
        },
        {
          component: "Header",
          props: {
            className: "text-tertiary",
            title: { path: "page.contact.component.Header.title", placeholder: "Get in touch" },
            description: { path: "page.contact.component.Header.description" },
          },
        },
        { component: "ContactPageContent" },
        { component: "ContactPageForm" },
      ],
    },
  };
}
