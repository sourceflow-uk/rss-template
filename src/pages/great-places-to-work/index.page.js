import { Content } from "@/ui";
import { getRoute } from "@/getters/getRoute";
import { employer_helper } from "@/helpers/employer_helper";
import { getAsset } from "@/getters/getAsset";
import { trimText } from "@/functions/trimText";
import { createTitle } from "@/functions/createTitle";

export default function EmployersPage({ content }) {
  return (
    <>
      <Content items={content} />
    </>
  );
}

export async function getStaticProps() {
  const employers = employer_helper.fetch();
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
            img: getAsset("page.employers.component.Header.img") ?? null,
            contain: true,
          },
        },
        {
          component: "PromoSection",
          props: {
            items: employers.map((i) => ({
              title: i.name,
              description: trimText(i.description),
              img: i.card_image ?? i.cover_image ?? null,
              href: getRoute("employer", { employer: i.url_slug }),
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
