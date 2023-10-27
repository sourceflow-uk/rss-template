import { Content } from "@/ui";
import { createTitle } from "@/functions/createTitle";
import { getRoute } from "@/getters/getRoute";

export default function DateAccessRequestPage({ content }) {
  return (
    <>
      <Content items={content} />
    </>
  );
}

export async function getStaticProps() {
  return {
    props: {
      meta: {
        title: createTitle("Data Access Request"),
      },
      content: [
        {
          component: "BreadcrumbNavigation",
          props: {
            items: [
              {
                label: "Data Access Request",
                href: getRoute("/data-access-request"),
              },
            ],
          },
        },
        {
          component: "Header",
          props: {
            className: "text-tertiary",
            title: {
              path: "page.data-access-request.component.Header.title",
              placeholder: "Data Access Request",
            },
            description: {
              path: "page.data-access-request.component.Header.description",
              placeholder:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
            },
          },
        },
        {
          component: "Form",
          props: {
            formId: "7789ee90-960b-421f-b084-fefda252f9de",
          },
        },
      ],
    },
  };
}
