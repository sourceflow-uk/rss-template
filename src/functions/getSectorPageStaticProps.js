import { getRoute } from "@/getters/getRoute";
import { sector_helper } from "@/helpers/sector_helper";
import { trimText } from "@/functions/trimText";
import { createTitle } from "@/functions/createTitle";
import { getNestedRoutes } from "@/functions/getNestedRoutes";
import { jobs_helper } from "@/helpers/jobs_helper";

export const getSectorPageStaticProps = ({ sector_id, url_slugs, pages_helper }) => {
  const sector = sector_helper.find(sector_id, "id");
  const pages = getNestedRoutes({ url_slugs, routePrefix: `/${sector.url_slug}/` });
  const [_page] = [...pages].reverse();
  const page = pages_helper.find(_page.url_slug);
  const siblings = pages_helper.fetch({ exclude: [page.id], parent: page.parent.id });

  return {
    props: {
      meta: { title: createTitle(page.name, `${sector.title} Jobs`) },
      content: [
        {
          component: "BreadcrumbNavigation",
          props: {
            items: [{ label: sector.title, href: getRoute("sector", { url_slug: sector.url_slug }) }, ...pages],
          },
        },
        {
          component: "Header",
          props: {
            className: page.cover_image ? "text-white" : "text-tertiary",
            title: page.name,
            img: page.cover_image ?? null,
            containerClassName: "mw-lg",
          },
        },
        {
          component: "RichText",
          props: {
            body: page.body,
            sidebar: siblings.sort((a, b) => {
              if(a.name > b.name) return 1;
              if(a.name < b.name) return -1;
              return 0;
            }).map((i) => ({
              label: i.name,
              href: getRoute("sectorPage", { sector: sector.url_slug, page: i.url_slug }),
            })),
          }
        },
        { component: "Divider" },
        {
          component: "LatestJobs",
          props: {
            title: {
              path: `page.${url_slugs.join(".")}.component.LatestJobs.title`,
              placeholder: `Latest ${sector.title} Jobs`,
            },
            items: jobs_helper.fetch({ sector: sector.id }),
            visibleCount: 4,
          },
        },
        // { component: "Divider" },
        // {
        //   component: "PromoSection",
        //   props: {
        //     title: {
        //       path: `page.${sector.url_slug}.component.PromoSection.title`,
        //       placeholder: "Also in this section",
        //     },
        //     items: siblings.map((i) => ({
        //       title: i.name,
        //       description: trimText(i.body),
        //       img: i.cover_image ?? null,
        //       href: getRoute("sectorPage", { sector: sector.url_slug, page: i.url_slug }),
        //     })),
        //     md: 3,
        //   },
        // },
      ],
    },
  };
};
