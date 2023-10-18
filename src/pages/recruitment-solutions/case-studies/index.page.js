import { Content } from "@/ui";
import { getRoute } from "@/getters/getRoute";
import * as additionalComponents from "./__components";
import { getAsset } from "@/getters/getAsset";

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
            className: "text-white",
            title: {
              path: "page.caseStudies.component.Header.title",
              placeholder: "Case Studies",
            },
            img: getAsset("page.caseStudies.component.Header.img"),
          },
        },
        { component: "CaseStudyFeed" },
      ],
    },
  };
}
