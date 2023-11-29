import { Content } from "@/ui";
import { getRoute } from "@/getters/getRoute";
import { createTitle } from "@/functions/createTitle";

export default function ApplyThankYouPage({ content }) {
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
        title: createTitle("Application Complete"),
      },
      content: [
        { component: "BreadcrumbNavigation" },
        {
          component: "Header",
          props: {
            className: "text-tertiary",
            title: { path: "page.job.application-complete.component.Header.title", placeholder: "Thank you!" },
            description: {
              path: "page.job.application-complete.component.Header.description",
              placeholder: `We've received your application and will be in touch soon!`,
            },
            back: {
              path: "page.job.application-complete.component.Header.back",
              placeholder: `Back to Home`,
              href: getRoute("home"),
            },
          },
        },
      ],
    },
  };
}
