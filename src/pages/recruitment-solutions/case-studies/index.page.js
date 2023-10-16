import { Content } from "@/ui";
import { getRoute } from "@/getters/getRoute";
import * as additionalComponents from "./__components";

export default function CaseStudiesPage({ content }) {
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
              { label: "Recruitment Solutions", href: getRoute("recruitmentSolutions") },
              { label: "Case Studies", href: getRoute("caseStudies") },
            ],
          },
        },
        {
          component: "Header",
          props: {
            title: {
              path: "page.caseStudies.component.Header.title",
              placeholder: "Case Studies",
            },
          },
        },
        { component: "CaseStudyFeed" },
      ],
    },
  };
}
