import { getRoute } from "@/getters/getRoute";
import { mini_carousel_helper } from "@/helpers/mini_carousel_helper";
import { trimText } from "@/functions/trimText";
import { sector_helper } from "@/helpers/sector_helper";
import { createTitle } from "@/functions/createTitle";

export const getSectorStaticProps = ({ sector_id, pages_helper = null } = {}) => {
  const sector = sector_helper.find(sector_id, "id");

  let content = [
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
          placeholder:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        },
        img: {
          path: `page.${sector.url_slug}.component.Header.img`,
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
      id: "Jobs",
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
  ];

  if (pages_helper) {
    const pages = pages_helper.fetch();

    content = [
      ...content,
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
    ];
  }

  return {
    props: {
      meta: {
        title: createTitle(`${sector.title} Jobs`),
      },
      content,
    },
  };
};
