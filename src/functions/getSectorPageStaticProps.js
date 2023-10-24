import { getRoute } from "@/getters/getRoute";
import { sector_helper } from "@/helpers/sector_helper";

export const getSectorPageStaticProps = (sector_id, page) => {
  const sector = sector_helper.find(sector_id, "id");

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
            className: "text-tertiary",
            title: page.name,
          },
        },
        {
          component: "RichText",
          props: {
            body: page.body,
          },
        },
      ],
    },
  };
};
