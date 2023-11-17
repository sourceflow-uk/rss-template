import { Content } from "@/ui";
import { getRoute } from "@/getters/getRoute";
import { case_study_helper } from "@/helpers/case_study_helper";
import * as additionalComponents from "./__components";
import { createTitle } from "@/functions/createTitle";

export default function CaseStudyPage({ content }) {
  return (
    <>
      <Content items={content} additionalComponents={additionalComponents} />
    </>
  );
}

export async function getStaticProps({ params: { url_slug } }) {
  const casestudy = case_study_helper.find(url_slug);

  return {
    props: {
      meta: {
        title: createTitle(casestudy.title, "Case Studies", "Recruitment Solutions"),
      },
      content: [
        {
          component: "BreadcrumbNavigation",
          props: {
            items: [
              { label: "Recruitment Solutions", href: "#" },
              { label: "Case Studies", href: getRoute("caseStudies") },
              { label: casestudy.title, href: getRoute("caseStudy", { url_slug }) },
            ],
          },
        },
        {
          component: "Header",
          props: {
            className: "text-tertiary",
            title: {
              path: `page.caseStudy.${url_slug}.component.Header.title`,
              placeholder: casestudy.title,
            },
            img: casestudy.cover_image ?? null,
            back: {
              path: "page.caseStudy.component.Header.back",
              placeholder: `Back to Case Studies`,
              href: getRoute("caseStudies"),
            },
          },
        },
        { component: "CaseStudyContent", props: { ...casestudy } },
        {
          component: "CaseStudies",
          props: {
            title: {
              path: `page.caseStudy.${url_slug}.component.CaseStudies.title`,
              placeholder: "Other Case Studies you might like",
            },
            items: case_study_helper.fetch({ limit: 3, exclude: [casestudy.id] }),
          },
        },
      ],
    },
  };
}

export async function getStaticPaths() {
  return {
    paths: case_study_helper.toPaths(),
    fallback: false,
  };
}
