import { Content } from "@/ui";
import { career_advice_helper } from "@/helpers/career_advice_helper";
import { getRoute } from "@/getters/getRoute";
import * as additionalComponents from "./__components";
import { createTitle } from "@/functions/createTitle";
import { getNestedRoutes } from "@/functions/getNestedRoutes";
import { sector_helper } from "@/helpers/sector_helper";
import { employer_helper } from "@/helpers/employer_helper";
import { jobs_helper } from "@/helpers/jobs_helper";

export default function CareerAdviceSubPage({ content }) {
  return (
    <>
      <Content items={content} additionalComponents={additionalComponents} />
    </>
  );
}

export async function getStaticProps({ params: { url_slugs } }) {
  const pages = getNestedRoutes({ url_slugs, routePrefix: `/career-advice/` });
  const [_page, _prevPage] = [...pages].reverse();
  const page = career_advice_helper.find(_page.url_slug);
  const parent = career_advice_helper.find(page.parent.id, "id") ?? null;
  const children = career_advice_helper.fetch({ filter: (i) => i.parent.id === page.id });
  const siblings = career_advice_helper.fetch({ exclude: [page.id], filter: (i) => i.parent.id === page.parent.id });

  const sector = page["related_sector"] ? sector_helper.find(page["related_sector"], "title") : null;
  const employer = page["related_employer"] ? employer_helper.find(page["related_employer"], "name") : null;
  const jobs =
    sector || employer
      ? jobs_helper.fetch({
          sector: sector ? sector.id : null,
          employer: employer ? employer.id : null,
          filter: (i) =>
            "related_jobs_keyword" in page && page["related_jobs_keyword"]
              ? i.title.toLowerCase().includes(page["related_jobs_keyword"].toLowerCase().trim())
              : true,
        })
      : null;

  return {
    props: {
      meta: { title: createTitle(page.title, "Career Advice") },
      content: [
        {
          component: "BreadcrumbNavigation",
          props: {
            items: [
              { label: "Jobs", href: getRoute("jobs") },
              { label: "Career Advice", href: getRoute("careerAdvice") },
              ...pages,
            ],
          },
        },
        {
          component: "Header",
          props: {
            className: page.cover_image ? "text-white" : "text-tertiary",
            title: page.title,
            img: page.cover_image ?? null,
          },
        },
        {
          component: "CareerAdviceArticleContent",
          props: {
            id: page.id,
            title: page.title,
            body: page.content,
            embed_media: page.embed_media ?? null,
            url_slug: page.url_slug,
            url_slugs,
            children,
            siblings,
            parent,
          },
        },
        ...(jobs && jobs.length > 0
          ? [{ component: "LatestJobs", props: { title: page.related_jobs_title ?? null, items: jobs } }]
          : []),
      ],
    },
  };
}

export async function getStaticPaths() {
  return {
    paths: career_advice_helper.toNestedPaths(),
    fallback: false,
  };
}
