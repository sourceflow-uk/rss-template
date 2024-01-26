import { Content } from "@/ui";
import { getRoute } from "@/getters/getRoute";
import { simple_pages_helper } from "@/helpers/simple_pages_helper";
import { sector_helper } from "@/helpers/sector_helper";
import { createTitle } from "@/functions/createTitle";
import { getNestedRoutes } from "@/functions/getNestedRoutes";
import { employer_helper } from "@/helpers/employer_helper";
import { jobs_helper } from "@/helpers/jobs_helper";
import { getSectorStaticProps } from "@/functions/getSectorStaticProps";
import { getGlobal } from "@/getters/getGlobal";

export default function Page({ content }) {
  return (
    <>
      <Content items={content} />
    </>
  );
}

export async function getStaticProps({ params: { url_slugs } }) {
  const pages = getNestedRoutes({
    url_slugs,
    overwrites: { "recruitment-solutions": { href: "/recruitment-solutions/why-choose-blue-arrow/" } },
  });
  const [_page, prevPage] = [...pages].reverse();
  const page = simple_pages_helper.nestedFind(url_slugs);
  const sector = sector_helper.find(_page.url_slug);

  if (sector) {
    return getSectorStaticProps({
      sector_id: sector.id,
      pages: page ? simple_pages_helper.fetch({ parent: page.id }) : null,
    });
  }

  if (!page) {
    return { notFound: true };
  }

  const related_sector = page["related_sector"] ? sector_helper.find(page["related_sector"], "title") : null;
  const related_employer = page["related_employer"] ? employer_helper.find(page["related_employer"], "name") : null;
  const jobs =
    related_sector || related_employer
      ? jobs_helper.fetch({
          sector: related_sector ? related_sector.id : null,
          employer: related_employer ? related_employer.id : null,
          filter: (i) =>
            "related_jobs_keyword" in page && page["related_jobs_keyword"]
              ? i.title.toLowerCase().includes(page["related_jobs_keyword"].toLowerCase().trim())
              : true,
        })
      : null;

  return {
    notFound: !page,
    props: {
      meta: { title: createTitle(...pages.map((i) => i.label).reverse()) },
      content: [
        { component: "BreadcrumbNavigation", props: { items: pages } },
        {
          component: "Header",
          props: {
            className: page.header_classes
              ? page.header_classes
              : page.cover_image
                ? "bg-tertiary text-white"
                : "bg-light text-tertiary",
            title: page.title,
            description: page.description ?? null,
            img: page.cover_image ?? null,
            back: prevPage
              ? {
                  path: `page.${prevPage.url_slug}.component.Header.back`,
                  placeholder: `Back to ${prevPage.label}`,
                  href: prevPage.href,
                }
              : {
                  path: `page.home.component.Header.back`,
                  placeholder: `Back to Home`,
                  href: getRoute("home"),
                },
            containerClassName: "mw-xxl",
          },
        },
        page.video ? { component: "SocialVideo", props: { video_embed_url: page.video } } : null,
        {
          component: "RichText",
          id: "Intro",
          props: { className: "bg-primary text-white py-4 py-md-5", body: page.intro ?? null },
        },
        Array.isArray(page.grid_buttons) && {
          component: "GridButtonsGrid",
          props: {
            title: page.grid_buttons_title ?? null,
            description: page.grid_buttons_description ?? null,
            items: page.grid_buttons.map((i) => ({
              title: i.title ?? null,
              img: i.image ?? null,
              href: i.link ?? "#",
            })),
            md: 4,
          },
        },

        Array.isArray(page.collapsible_section_items) && {
          component: "CollapsibleSection",
          props: {
            title: page.collapsible_section_title ?? null,
            description: page.collapsible_section_description ?? null,
            items: page.collapsible_section_items.map((i) => ({
              title: i.title ?? null,
              body: i.body ?? null,
            })),
            md: 12,
          },
        },
        { component: "RichText", props: { body: page.body ?? null } },
        ...(Array.isArray(page.narrative_panels)
          ? page.narrative_panels.map((i, k) => ({
              component: "NarrativePanel",
              id: `NarrativePanel-${k}`,
              props: {
                className: `py-4 py-md-5 ${k % 2 === 0 ? "bg-white" : "bg-light"}`,
                title: i.title ?? null,
                description: i.description ?? null,
                img: i.image ?? null,
                video_embed_url: i.video_embed_url ?? null,
                cta: i["button_link"]
                  ? {
                      label: i["button_label"] ?? null,
                      href: i["button_link"] ?? null,
                      variant: k % 2 === 0 ? "quaternary" : "primary",
                    }
                  : null,
                reverse: k % 2 === 0,
              },
            }))
          : []),
        Array.isArray(page.promo_section) && {
          component: "PromoSection",
          props: {
            items: page.promo_section.map((i) => ({
              title: i.title ?? null,
              description: i.description ?? null,
              img: i.image ?? null,
              href: i.link ?? "#",
            })),
          },
        },
        ...(jobs && jobs.length > 0
          ? [{ component: "LatestJobs", props: { title: page.related_jobs_title ?? null, items: jobs } }]
          : []),
        ...(Array.isArray(page.form)
          ? page.form.map((i, k) => ({
              component: "Form",
              id: `Form-${k}`,
              props: {
                className: k % 2 === 0 ? "py-4 py-md-5 bg-light" : "py-4 py-md-5 bg-white",
                title: i.title ?? null,
                description: i.description ?? null,
                form_id: i.form_id ?? null,
                redirect_url: i.redirect_url ?? null,
              },
            }))
          : []),
      ],
    },
  };
}

export async function getStaticPaths() {
  const global = getGlobal();

  return {
    paths: [
      ...simple_pages_helper.toNestedPaths({
        exclude: global["_theme.simplePagesExcludeList"].split(",").map((i) => i.trim()),
      }),
      ...sector_helper.toNestedPaths({
        exclude: global["_theme.sectorPagesExcludeList"].split(",").map((i) => i.trim()),
      }),
    ],
    fallback: false,
  };
}
