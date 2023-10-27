import { Content } from "@/ui";
import { getRoute } from "@/getters/getRoute";
import unslug from "unslug";
import { simple_pages_helper } from "@/helpers/simple_pages_helper";
import { sector_helper } from "@/helpers/sector_helper";
import { mini_carousel_helper } from "@/helpers/mini_carousel_helper";
import { createTitle } from "@/functions/createTitle";

export default function Page({ content }) {
  return (
    <>
      <Content items={content} />
    </>
  );
}

export async function getStaticProps({ params: { url_slugs } }) {
  const pages = url_slugs.map((url_slug, k) => ({
    url_slug,
    label: unslug(url_slug),
    href: getRoute("dynamic", { url_slugs: url_slugs.slice(0, k + 1) }),
  }));
  const [page, prevPage] = [...pages].reverse();

  let isSector = false;
  let item = simple_pages_helper.find(page.url_slug);
  if (!item) {
    item = sector_helper.find(page.url_slug);
    isSector = true;
  }

  return {
    notFound: !item,
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
            className: "text-tertiary",
            title: item.title,
            description: item.description ?? null,
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
        ...(isSector
          ? [
              {
                component: "JobsFeed",
                props: {
                  sector: item.id,
                  changeURLOnFilterChange: false,
                },
              },
              {
                component: "MiniCarousel",
                props: {
                  items: mini_carousel_helper.fetch({
                    filter: (i) => i.tags.toLowerCase().includes(item.url_slug.toLowerCase()) || i.tags.includes("*"),
                  }),
                },
              },
              // NOTE:
              //
              // If sector pages are added for a section create a new sector page and add sector id to the excluded list below.
              //
              // See /drivingjobs folder for example sector page
            ]
          : [{ component: "RichText", props: { body: item.body } }]),
      ],
    },
  };
}

export async function getStaticPaths() {
  return {
    paths: [
      ...simple_pages_helper.toNestedPaths(),
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
