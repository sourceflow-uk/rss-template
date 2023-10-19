import { Content } from "@/ui";
import { getRoute } from "@/getters/getRoute";
import { employer_page_helper } from "@/helpers/employer_page_helper";
import { employer_helper } from "@/helpers/employer_helper";
import * as additionalComponents from "./__components";

export default function EmployerSubPage({ content }) {
  return (
    <>
      <Content items={content} additionalComponents={additionalComponents} />
    </>
  );
}

export async function getStaticProps({ params }) {
  const page = employer_page_helper.find(params.page);
  const employer = employer_helper.find(params.employer);

  return {
    props: {
      meta: {},
      content: [
        {
          component: "BreadcrumbNavigation",
          props: {
            items: [
              { label: "Find a Job", href: getRoute("jobs") },
              { label: "Great Places To Work", href: getRoute("employers") },
              { label: employer.name, href: getRoute("employer", { employer: employer.url_slug }) },
              {
                label: page.title,
                href: getRoute("employerPage", { employer: employer.url_slug, page: page.url_slug }),
              },
            ],
          },
        },
        {
          component: "Header",
          props: {
            className: "text-tertiary",
            title: page.title,
          },
        },
        {
          component: "EmployerPageArticleContent",
          props: {
            ...page,
            employer,
          },
        },
      ],
    },
  };
}

export async function getStaticPaths() {
  const paths = employer_page_helper.fetch().map((p) => ({
    params: {
      employer: employer_helper.find(p.employer, "name", true).url_slug,
      page: p.url_slug,
    },
  }));

  return {
    paths,
    fallback: false,
  };
}
