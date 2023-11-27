import { Content } from "@/ui";
import { getRoute } from "@/getters/getRoute";
import { createTitle } from "@/functions/createTitle";

export default function SubmissionCompletePage({ content }) {
  return (
    <>
      <Content items={content} />
    </>
  );
}

export async function getStaticProps() {
  return {
    props: {
      meta: { title: createTitle("Submission Complete") },
      content: [
        {
          component: "BreadcrumbNavigation",
          props: {
            items: [{ label: "Submission Complete", href: getRoute("/submission-complete") }],
          },
        },
        {
          component: "Header",
          props: {
            className: "text-tertiary",
            title: { path: "page.job.submission-complete.component.Header.title", placeholder: "Thank you!" },
            description: {
              path: "page.job.submission-complete.component.Header.description",
              placeholder: `We've received your submission and will be in touch soon!`,
            },
            back: {
              path: "page.job.submission-complete.component.Header.back",
              placeholder: `Back to Home`,
              href: getRoute("home"),
            },
          },
        },
      ],
    },
  };
}
