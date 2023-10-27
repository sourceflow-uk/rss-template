import { getRoute } from "@/getters/getRoute";
import { sector_helper } from "@/helpers/sector_helper";
import { trimText } from "@/functions/trimText";
import { createTitle } from "@/functions/createTitle";

export const getSectorPageStaticProps = ({ sector_id, url_slug, pages_helper }) => {
  const sector = sector_helper.find(sector_id, "id");
  const page = pages_helper.find(url_slug);
  const pages = pages_helper.fetch({ exclude: [page.id] });

  return {
    props: {
      meta: {
        title: createTitle(page.name, `${sector.title} Jobs`),
      },
      content: [
        {
          component: "BreadcrumbNavigation",
          props: {
            items: [
              {
                label: sector.title,
                href: getRoute("sector", { url_slug: sector.url_slug }),
              },
              {
                label: page.name,
                href: getRoute("sectorPage", { sector: sector.url_slug, page: page.url_slug }),
              },
            ],
          },
        },
        {
          component: "Header",
          props: {
            className: page.cover_image ? "text-white" : "text-tertiary",
            title: page.name,
            img: page.cover_image ?? null,
          },
        },
        {
          component: "RichText",
          props: {
            body: page.body,
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
              img: i.cover_image ?? null,
              href: getRoute("sectorPage", { sector: sector.url_slug, page: i.url_slug }),
            })),
            md: 3,
          },
        },
      ],
    },
  };
};
