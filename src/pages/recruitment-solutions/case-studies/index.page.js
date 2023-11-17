import { Content } from "@/ui";
import { getRoute } from "@/getters/getRoute";
import * as additionalComponents from "./__components";
import { createTitle } from "@/functions/createTitle";

export default function CaseStudiesPage({ content }) {
  return (
    <>
      <Content items={content} additionalComponents={additionalComponents} />
    </>
  );
}

export async function getStaticProps() {
  const title = "Case Studies";

  return {
    props: {
      meta: {
        title: createTitle(title, "Recruitment Solutions"),
      },
      content: [
        {
          component: "BreadcrumbNavigation",
          props: {
            items: [
              { label: "Recruitment Solutions", href: "#" },
              { label: title, href: getRoute("caseStudies") },
            ],
          },
        },
        {
          component: "Header",
          props: {
            className: "text-white",
            title: {
              path: "page.caseStudies.component.Header.title",
              placeholder: title,
            },
            img: {
              path: "page.caseStudies.component.Header.img",
            },
          },
        },
        { component: "CaseStudyFeed" },
      ],
    },
  };
}
