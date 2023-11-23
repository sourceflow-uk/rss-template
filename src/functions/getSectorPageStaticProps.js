import { getRoute } from "@/getters/getRoute";
import { sector_helper } from "@/helpers/sector_helper";
import { trimText } from "@/functions/trimText";
import { createTitle } from "@/functions/createTitle";
import { getNestedRoutes } from "@/functions/getNestedRoutes";

export const getSectorPageStaticProps = ({ sector_id, url_slugs, pages_helper }) => {
  const sector = sector_helper.find(sector_id, "id");
  const pages = getNestedRoutes({ url_slugs, routePrefix: `/${sector.url_slug}/` });
  const [_page] = [...pages].reverse();
  const page = pages_helper.find(_page.url_slug);
  const siblings = pages_helper.fetch({ exclude: [page.id] });

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
              ...pages,
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
            items: siblings.map((i) => ({
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
