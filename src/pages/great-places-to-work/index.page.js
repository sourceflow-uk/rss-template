import { Content } from "@/ui";
import { getRoute } from "@/getters/getRoute";
import { trimText } from "@/functions/trimText";
import { createTitle } from "@/functions/createTitle";
import { employer_page_helper } from "@/helpers/employer_page_helper";

export default function EmployersPage({ content }) {
  return (
    <>
      <Content items={content} />
    </>
  );
}

export async function getStaticProps() {
  const employers = employer_page_helper.fetch({ filter: (i) => i.parent.id === null });
  const title = "Great Places To Work";

  return {
    props: {
      meta: {
        title: createTitle(title),
      },
      content: [
        {
          component: "BreadcrumbNavigation",
          props: {
            items: [
              {
                label: "Jobs",
                href: getRoute("jobs"),
              },
              {
                label: title,
                href: getRoute("employers"),
              },
            ],
          },
        },
        {
          component: "Header",
          props: {
            className: "text-white bg-primary",
            title: {
              path: "page.employers.component.Header.title",
              placeholder: title,
            },
            description: {
              path: "page.employers.component.Header.description",
              placeholder:
                "We understand the importance in finding a great company to work at to support you and your career. Below is a small selection of fabulous companies who have lots of vacancies for talented staff.",
            },
            img: {
              path: "page.employers.component.Header.img",
            },
          },
        },
        {
          component: "PromoSection",
          props: {
            items: employers.map((i) => ({
              title: i.title,
              description: `${i.description}`,
              img: i.card_image ?? null,
              href: getRoute("employerPage", { url_slugs: [i.url_slug] }),
              featured: i.featured,
              cta: {
                label: "See available jobs",
                href: getRoute("employerPage", { url_slugs: [i.url_slug] }),
              },
            })),
          },
        },
        { component: "Divider" },
        {
          component: "FeaturedEmployersCarousel",
          props: {
            className: "text-center py-5",
            title: {
              path: "page.employers.component.FeaturedEmployersCarousel.title",
              placeholder: "Top-rated places to work by Blue Arrow candidates",
            },
            visibleCount: 4,
            button: null,
          },
        },
      ],
    },
  };
}
