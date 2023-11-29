import { Content } from "@/ui";
import { getRoute } from "@/getters/getRoute";
import { createTitle } from "@/functions/createTitle";
import { case_study_helper } from "@/helpers/case_study_helper";

export default function CaseStudiesPage({ content }) {
  return (
    <>
      <Content items={content} />
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
            title: { path: "page.caseStudies.component.Header.title", placeholder: title },
            img: { path: "page.caseStudies.component.Header.img" },
          },
        },
        {
          component: "ArticleFeed",
          props: {
            items: case_study_helper.fetch(),
            showSearchField: false,
            showCategoryFilter: true,
            showTagFilter: false,
            articleType: "caseStudy",
          },
        },
      ],
    },
  };
}
