import { Content } from "@/ui";
import { getRoute } from "@/getters/getRoute";
import { mini_carousel_helper } from "@/helpers/mini_carousel_helper";
import { sector_helper } from "@/helpers/sector_helper";
import { driving_jobs_pages_helper } from "@/helpers/driving_jobs_pages_helper";
import { trimText } from "@/functions/trimText";
import { getAsset } from "@/getters/getAsset";

export default function DrivingJobsPage({ content }) {
  return (
    <>
      <Content items={content} />
    </>
  );
}

export async function getStaticProps() {
  const sector = sector_helper.find("741e7908-0c11-4a62-91c1-dd23b02c8cd7", "id");
  const pages = driving_jobs_pages_helper.fetch();

  return {
    props: {
      meta: {},
      content: [
        {
          component: "BreadcrumbNavigation",
          props: {
            items: [
              {
                label: sector.title,
                href: getRoute("sector", { url_slug: sector.url_slug }),
              },
            ],
          },
        },
        {
          component: "Header",
          props: {
            className: "text-tertiary",
            title: {
              path: `page.${sector.url_slug}.component.Header.title`,
              placeholder: sector.title,
            },
            description: {
              path: `page.${sector.url_slug}.component.Header.description`,
              placeholder: "",
            },
            back: {
              path: `page.home.component.Header.back`,
              placeholder: `Back to Home`,
              href: getRoute("home"),
            },
          },
        },
        {
          component: "JobsFeed",
          props: {
            sector: sector.id,
            changeURLOnFilterChange: false,
          },
        },
        {
          component: "MiniCarousel",
          props: {
            items: mini_carousel_helper.fetch({
              filter: (i) =>
                i.tags.toLowerCase().includes(sector.url_slug.toLowerCase()) ||
                i.tags.toLowerCase().includes(sector.title.toLowerCase()) ||
                i.tags.includes("*"),
            }),
          },
        },
        {
          component: "PromoSection",
          props: {
            title: {
              path: `page.${sector.url_slug}.component.PromoSection.title`,
              placeholder: "Also in this section",
            },
            items: pages.map((i) => ({
              title: i.name,
              description: trimText(i.body),
              img: i.cover_image ?? getAsset("_theme.card.img.fallback") ?? null,
              href: getRoute("sectorPage", { sector: sector.url_slug, page: i.url_slug }),
            })),
            md: 3,
          },
        },
      ],
    },
  };
}
