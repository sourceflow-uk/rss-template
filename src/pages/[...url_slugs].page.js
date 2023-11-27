import { Content } from "@/ui";
import { getRoute } from "@/getters/getRoute";
import { simple_pages_helper } from "@/helpers/simple_pages_helper";
import { sector_helper } from "@/helpers/sector_helper";
import { mini_carousel_helper } from "@/helpers/mini_carousel_helper";
import { createTitle } from "@/functions/createTitle";
import { getNestedRoutes } from "@/functions/getNestedRoutes";
import { employer_helper } from "@/helpers/employer_helper";
import { jobs_helper } from "@/helpers/jobs_helper";
import { getSectorStaticProps } from "@/functions/getSectorStaticProps";
import { driving_jobs_pages_helper } from "@/helpers/driving_jobs_pages_helper";

export default function Page({ content }) {
  return (
    <>
      <Content items={content} />
    </>
  );
}

export async function getStaticProps({ params: { url_slugs } }) {
  const pages = getNestedRoutes({ url_slugs, overwrites: { "recruitment-solutions": { href: "#" } } });
  const [_page, prevPage] = [...pages].reverse();
  const page = simple_pages_helper.find(_page.url_slug);

  if (!page) {
    const sector = sector_helper.find(_page.url_slug);
    if (!sector) {
      return { notFound: true };
    }

    return getSectorStaticProps({
      sector_id: sector.id,
    });
  }

  const sector = page["related_sector"] ? sector_helper.find(page["related_sector"], "title") : null;
  const employer = page["related_employer"] ? employer_helper.find(page["related_employer"], "name") : null;
  const jobs =
    sector || employer
      ? jobs_helper.fetch({
          sector: sector ? sector.id : null,
          employer: employer ? employer.id : null,
        })
      : null;

  return {
    notFound: !page,
    props: {
      meta: {
        title: createTitle(...pages.map((i) => i.label).reverse()),
      },
      content: [
        {
          component: "BreadcrumbNavigation",
          props: {
            items: pages,
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
        page.video
          ? {
              component: "SocialVideo",
              props: { video_embed_url: page.video },
            }
          : null,
        {
          component: "RichText",
          id: "Intro",
          props: {
            className: "bg-primary text-white py-4 py-md-5",
            body: page.intro ?? null,
          },
        },
        Array.isArray(page.grid_buttons) && {
          component: "GridButtonsGrid",
          id: "GridButtonsGrid",
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
        { component: "RichText", props: { body: page.body ?? null } },
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
          id: "PromoSection",
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
          ? [
              {
                component: "LatestJobs",
                props: {
                  title: page.related_jobs_title ?? null,
                  items: jobs,
                },
              },
            ]
          : []),
        ...(Array.isArray(page.form)
          ? page.form.map((i, k) => ({
              component: "Form",
              id: `Form-${k}`,
              props: {
                className: k % 2 === 0 ? "py-4 py-md-5 bg-light" : "py-4 py-md-5 bg-white",
                title: i.title ?? null,
                description: i.description ?? null,
                formId: i.form_id ?? null,
              },
            }))
          : []),
      ],
    },
  };
}

export async function getStaticPaths() {
  return {
    paths: [
      ...simple_pages_helper.toNestedPaths({
        exclude: [
          "9dc7694d-93b5-4ddd-a464-405f77d71cb1",
          "5baeed81-34de-4673-b0f3-2405a5682c22", // contact-us
          "5867167d-704a-4155-8b6d-7df842ef40f1", //
          "6cbbc5e3-5dcd-44a4-ba81-136d3f90ae0d", // featured-employers
          "3ac0b752-94d4-49ee-b17a-c45aac2c5eda", // industry-insights
          "ccf8d981-4a1d-46f9-8c3a-0e4c0807e9f6", // whitepapers
        ],
      }),
      ...sector_helper.toNestedPaths({
        exclude: [
          "42ee49b6-cfc2-4b42-a5b5-cf9a17009a6f",
          "741e7908-0c11-4a62-91c1-dd23b02c8cd7",
          "d5e71b93-2910-4cbf-84d4-a140d12a6d64",
        ],
      }),
    ],
    fallback: false,
  };
}
