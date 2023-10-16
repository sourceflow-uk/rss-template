import { Content } from "@/ui";
import { getRoute } from "@/getters/getRoute";
import { employerHelper } from "@/helpers/employerHelper";
import { getAsset } from "@/getters/getAsset";

export default function EmployersPage({ content }) {
  return (
    <>
      <Content items={content} />
    </>
  );
}

export async function getStaticProps() {
  const employers = employerHelper.fetch();

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
              description: i.description,
              img: i.card_image ?? i.cover_image ?? getAsset("_theme.employer.card.img.fallback") ?? null,
              href: getRoute("employer", { url_slug: i.url_slug }),
            })),
          },
        },
      ],
    },
  };
}
