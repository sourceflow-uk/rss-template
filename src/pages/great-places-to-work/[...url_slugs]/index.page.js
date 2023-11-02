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
import { generateBody } from "@/faker/generateBody";
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
            className: "text-tertiary",
            title: page.title,
            description: page.description ?? null,
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
        ...("narrative_panel_count" in page && page.narrative_panel_count > 0
          ? [
              ...new Array(page.narrative_panel_count).fill(null).map((i, k) => ({
                component: "NarrativePanel",
                props: {
                  className: `${k % 2 === 0 ? "bg-white" : "bg-light"} py-4 py-md-5`,
                  title: {
                    path: `page.${url_slugs.join(".")}.component.NarrativePanel.${k + 1}.title`,
                    placeholder: generateTitle(),
                  },
                  description: {
                    path: `page.${url_slugs.join(".")}.component.NarrativePanel.${k + 1}.description`,
                    placeholder: generateDescription(),
                  },
                  img: {
                    path: `page.${url_slugs.join(".")}.component.NarrativePanel.${k + 1}.img`,
                  },
                  reverse: k % 2 === 0,
                },
              })),
            ]
          : []),
        "accordion_item_count" in page &&
          page.accordion_item_count > 0 && {
            component: "Accordion",
            props: {
              className: "text-center py-5",
              title: {
                path: `page.${url_slugs.join(".")}.component.Accordion.title`,
                placeholder: generateTitle(),
              },
              items: new Array(page.accordion_item_count).fill(null).map((i, k) => ({
                title: {
                  path: `page.${url_slugs.join(".")}.component.Accordion.item.${k + 1}.title`,
                  placeholder: generateTitle(),
                },
                body: {
                  path: `page.${url_slugs.join(".")}.component.Accordion.item.${k + 1}.body`,
                  placeholder: generateBody(),
                },
              })),
            },
          },
        "video_embed_url" in page &&
          page.video_embed_url && {
            component: "NarrativePanel",
            props: {
              className: "py-4 py-md-5 bg-light",
              title: {
                path: `page.${url_slugs.join(".")}.component.NarrativePanel.title`,
                placeholder: generateTitle(),
              },
              description: {
                path: `page.${url_slugs.join(".")}.component.NarrativePanel.description`,
                placeholder: generateDescription(),
              },
              video_embed_url: page.video_embed_url,
              reverse: true,
            },
          },
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
