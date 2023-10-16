import { Content } from "@/ui";
import { getRoute } from "@/getters/getRoute";
import { casestudyHelper } from "@/helpers/casestudyHelper";
import * as additionalComponents from "./__components";

export default function CaseStudyPage({ content }) {
  return (
    <>
      <Content items={content} additionalComponents={additionalComponents} />
    </>
  );
}

export async function getStaticProps({ params: { url_slug } }) {
  const casestudy = casestudyHelper.find(url_slug);

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
              { label: casestudy.title, href: getRoute("caseStudy", { url_slug }) },
            ],
          },
        },
        {
          component: "Header",
          props: {
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
      ],
    },
  };
}

export async function getStaticPaths() {
  return {
    paths: casestudyHelper.toPaths(),
    fallback: false,
  };
}
