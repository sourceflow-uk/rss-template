import { Content } from "@/ui";
import { getRoute } from "@/getters/getRoute";
import { employer_helper } from "@/helpers/employer_helper";
import { getAsset } from "@/getters/getAsset";
import { trimText } from "@/functions/trimText";

export default function EmployersPage({ content }) {
  return (
    <>
      <Content items={content} />
    </>
  );
}

export async function getStaticProps() {
  const employers = employer_helper.fetch();

  return {
    props: {
      meta: {},
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
                label: "Great Places To Work",
                href: getRoute("employers"),
              },
            ],
          },
        },
        {
          component: "PromoSection",
          props: {
            items: employers.map((i) => ({
              title: i.name,
              description: trimText(i.description),
              img: i.card_image ?? i.cover_image ?? getAsset("_theme.card.img.fallback") ?? null,
              href: getRoute("employer", { url_slug: i.url_slug }),
            })),
          },
        },
      ],
    },
  };
}
