import { Content } from "@/ui";
import { employer_page_helper } from "@/helpers/employer_page_helper";
import unslug from "unslug";
import { getRoute } from "@/getters/getRoute";
import { createTitle } from "@/functions/createTitle";
import { generateTitle } from "@/faker/generateTitle";
import { generateDescription } from "@/faker/generateDescription";
import { trimText } from "@/functions/trimText";
import * as additionalComponents from "./__components";
import { jobs_helper } from "@/helpers/jobs_helper";
import { employer_helper } from "@/helpers/employer_helper";
import { getNestedRoutes } from "@/functions/getNestedRoutes";

export default function EmployerPage({ content }) {
  return (
    <>
      <Content items={content} additionalComponents={additionalComponents} />
    </>
  );
}

export async function getStaticProps({ params: { url_slugs } }) {
  const pages = getNestedRoutes({ url_slugs, routePrefix: `/featured-employers/` });
  const [rootPage] = pages;
  const [currentPage, prevPage] = [...pages].reverse();
  const page = employer_page_helper.find(currentPage.url_slug);
  const root = employer_page_helper.find(rootPage.url_slug);
  const [employerName] = root.employer ?? [null];
  const employer = employerName ? employer_helper.find(employerName, "name") : null;
  const parent = employer_page_helper.find(page.parent.id, "id");
  const children = employer_page_helper.fetch({ filter: (i) => i.parent.id === page.id });
  const siblings = employer_page_helper.fetch({ exclude: [page.id], filter: (i) => i.parent.id === page.parent.id });

  return {
    props: {
      meta: {
        title: createTitle(page.title),
      },
      content: [
        {
          component: "BreadcrumbNavigation",
          props: {
            items: [
              { label: "Find a Job", href: getRoute("jobs") },
              { label: "Great Places To Work", href: getRoute("employers") },
              ...pages,
            ],
          },
        },
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
          },
        },
        ...(page.parent.id === null
          ? [
              {
                component: "RichText",
                props: {
                  className: "bg-primary text-white py-5",
                  body: page.body ?? null,
                },
              },
            ]
          : [
              {
                component: "EmployerPageArticleContent",
                props: {
                  body: page.body ?? null,
                  title: page.title ?? null,
                  url_slug: page.url_slug ?? null,
                  url_slugs,
                  children,
                  siblings,
                  parent,
                },
              },
            ]),
        Array.isArray(page.collapsible_section_items) && {
          component: "CollapsibleSection",
          id: "CollapsibleSection",
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
        ...(Array.isArray(page.narrative_panels)
          ? page.narrative_panels.map((i, k) => ({
              component: "NarrativePanel",
              id: `NarrativePanel-${k}`,
              props: {
                className: `py-4 py-md-5 ${k % 2 === 0 ? "bg-light" : "bg-white"}`,
                title: i.title ?? null,
                description: i.description ?? null,
                img: i.image ?? null,
                video_embed_url: i.video_embed_url ?? null,
                cta: {
                  label: i.button_label ?? "Read more",
                  href: i.button_link ?? "#",
                  variant: k % 2 === 0 ? "quaternary" : "primary",
                },
                reverse: k % 2 === 0,
              },
            }))
          : []),
        ...(page.parent.id === null
          ? [
              typeof employer !== "undefined" && {
                component: "LatestJobs",
                props: {
                  title: {
                    path: `page.${url_slugs.join(".")}.component.LatestJobs.title`,
                    placeholder: `Latest ${employer.name} Jobs`,
                  },
                  items: jobs_helper.fetch({ filter: (i) => JSON.stringify(i).includes(employer.id) }),
                  visibleCount: 4,
                },
              },
              ...(children.length > 0
                ? [
                    {
                      component: "Divider",
                    },
                    {
                      component: "PromoSection",
                      props: {
                        title: {
                          path: `page.${url_slugs.join(".")}.component.PromoSection.title`,
                          placeholder: `In this section`,
                        },
                        items: children.map((i) => ({
                          title: i.title ?? null,
                          img: i.card_image ?? null,
                          description: trimText(i.body),
                          href: getRoute("employerPage", { url_slugs: [...url_slugs, i.url_slug] }),
                        })),
                      },
                    },
                  ]
                : []),
            ]
          : !children
          ? [
              ...(siblings.length > 0
                ? [
                    {
                      component: "Divider",
                    },
                    {
                      component: "PromoSection",
                      props: {
                        title: {
                          path: `page.${url_slugs.join(".")}.component.PromoSection.title`,
                          placeholder: `Also in this section`,
                        },
                        items: siblings.map((i) => ({
                          title: i.title ?? null,
                          img: i.card_image ?? null,
                          description: trimText(i.body),
                          href: getRoute("employerPage", {
                            url_slugs: [...url_slugs.filter((i) => i !== page.url_slug), i.url_slug],
                          }),
                        })),
                      },
                    },
                  ]
                : []),
            ]
          : []),
      ],
    },
  };
}

export async function getStaticPaths() {
  return {
    paths: employer_page_helper.toNestedPaths(),
    fallback: false,
  };
}
