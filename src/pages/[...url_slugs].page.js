import { Content } from "@/ui";
import { getRoute } from "@/getters/getRoute";
import unslug from "unslug";
import { simple_pages_helper } from "@/helpers/simple_pages_helper";
import { sector_helper } from "@/helpers/sector_helper";
import { generateMiniCarouselCard } from "@/faker/generateMiniCarouselCard";
import { generateArrayOf } from "@/faker/generateArrayOf";
import { generatePromoItem } from "@/faker/generatePromoItem";
import { mini_carousel_helper } from "@/helpers/mini_carousel_helper";

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
      meta: {},
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
              {
                component: "PromoSection",
                props: {
                  title: {
                    path: `page.${item.url_slug}.component.PromoSection.title`,
                    placeholder: "Also in this section",
                  },
                  items: generateArrayOf(generatePromoItem, { count: 8 }),
                  md: 3,
                },
              },
            ]
          : [{ component: "RichText", props: { body: item.body } }]),
      ],
    },
  };
}

export async function getStaticPaths() {
  return {
    paths: [...simple_pages_helper.toNestedPaths(), ...sector_helper.toNestedPaths()],
    fallback: false,
  };
}
