import { Content } from "@/ui";
import { getRoute } from "@/getters/getRoute";
import { casestudyHelper } from "@/helpers/casestudyHelper";

export default function CaseStudyPage({ content }) {
  return (
    <>
      <Content items={content} />
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
            back: {
              path: "page.caseStudy.component.Header.back",
              placeholder: `Back to Case Studies`,
              href: getRoute("caseStudies"),
            },
          },
        },
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
