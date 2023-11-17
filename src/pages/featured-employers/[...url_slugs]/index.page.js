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

export default function EmployerPage({ content }) {
  return (
    <>
      <Content items={content} additionalComponents={additionalComponents} />
    </>
  );
}

export async function getStaticProps({ params: { url_slugs } }) {
  const pages = url_slugs.map((url_slug, k) => ({
    url_slug,
    label: unslug(url_slug),
    href: getRoute("employerPage", { url_slugs: url_slugs.slice(0, k + 1) }),
  }));
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
            className: page.cover_image ? "text-white bg-tertiary" : "text-tertiary bg-light",
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
                  body: page.body,
                },
              },
            ]
          : [
              {
                component: "EmployerPageArticleContent",
                props: {
                  body: page.body,
                  title: page.title,
                  url_slug: page.url_slug,
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
              title: i["Title"] ?? null,
              body: i["Body"] ?? null,
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
                title: i["Title"],
                description: i["Description"],
                img: i["Image"] ?? null,
                video_embed_url: i["Video Embed Url"] ?? null,
                cta: {
                  label: i["Button Label"] ?? "Read more",
                  href: i["Button Link"] ?? "#",
                  variant: k % 2 === 0 ? "quaternary" : "primary",
                },
                reverse: k % 2 === 0,
              },
            }))
          : []),
        ...(page.parent.id === null
          ? [
              employer && {
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
                          title: i.title,
                          img: i.card_image ?? null,
                          description: trimText(i.body),
                          href: getRoute("employerPage", { url_slugs: [...url_slugs, i.url_slug] }),
                        })),
                      },
                    },
                  ]
                : []),
            ]
          : [
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
                          title: i.title,
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
            ]),
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
