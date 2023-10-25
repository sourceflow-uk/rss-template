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
            className: "text-tertiary",
            title: {
              path: "page.contact.component.Header.title",
              placeholder: "Get in touch",
            },
            description: {
              path: "page.contact.component.Header.description",
              placeholder:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
            },
          },
        },
        { component: "ContactPageContent" },
        {
          component: "ContactPageForm",
          props: {
            className: "bg-light py-4 py-md-5",
            title: {
              path: "page.contact.component.ContactPageForm.title",
              placeholder: "Send us a message",
            },
          },
        },
      ],
    },
  };
}
