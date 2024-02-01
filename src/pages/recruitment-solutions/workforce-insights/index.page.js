import { Content } from "@/ui";
import { simple_pages_helper } from "@/helpers/simple_pages_helper";
import { createTitle } from "@/functions/createTitle";
import { getNestedRoutes } from "@/functions/getNestedRoutes";
import { getRoute } from "@/getters/getRoute";
import * as additionalComponents from "./__components";

export default function Page({ content }) {
  return (
    <>
      <Content items={content} additionalComponents={additionalComponents} />
    </>
  );
}

export async function getStaticProps() {
  const page = simple_pages_helper.find("a85b6e85-79ae-47ec-83d9-18c671de7769", "id");
  const pages = getNestedRoutes({ url_slugs: ["recruitment-solutions", "workforce-insights"] });
  const [_page, prevPage] = [...pages].reverse();

  let items = simple_pages_helper
    .fetch({ parent: page.id })
    .map((i) => ({ ...i, children: simple_pages_helper.fetch({ limit: 8, parent: i.id }) }))
    .filter((i) => i.children.length > 0);

  // Forcibly add covid block
  items = [
    ...items,
    {
      title: "Impact of COVID",
      url_slug: null,
      children: [
        simple_pages_helper.find("aaed21cf-ab12-41fa-ba66-a8d6599fe515", "id"),
        simple_pages_helper.find("c6ae670a-0397-4553-8fa9-ee05983f41d0", "id"),
      ],
    },
  ];

  return {
    props: {
      meta: { title: createTitle(...pages.map((i) => i.label).reverse()) },
      content: [
        { component: "BreadcrumbNavigation", props: { items: pages } },
        {
          component: "Header",
          props: {
            className: page.header_classes
              ? page.header_classes
              : page.cover_image
                ? "bg-tertiary text-white"
                : "bg-light text-tertiary",
            title: page.title,
            description: page.description ?? null,
            img: page.cover_image ?? null,
            back: prevPage
              ? {
                  path: `page.${prevPage.url_slug}.component.Header.back`,
                  placeholder: `Back to ${prevPage.label}`,
                  href: prevPage.href,
                }
              : {
                  path: `page.home.component.Header.back`,
                  placeholder: `Back to Home`,
                  href: getRoute("home"),
                },
            containerClassName: "mw-xxl",
          },
        },
        Array.isArray(page.grid_buttons) && {
          component: "GridButtonsGrid",
          props: {
            title: page.grid_buttons_title ?? null,
            description: page.grid_buttons_description ?? null,
            items: page.grid_buttons.map((i) => ({
              title: i.title ?? null,
              img: i.image ?? null,
              href: i.link ?? "#",
            })),
            md: 4,
          },
        },
        { component: "WorkforceInsightsContent", props: { items } },
        ...(Array.isArray(page.form)
          ? page.form.map((i, k) => ({
              component: "Form",
              id: `Form-${k}`,
              props: {
                className: k % 2 === 0 ? "py-4 py-md-5 bg-light" : "py-4 py-md-5 bg-white",
                title: i.title ?? null,
                description: i.description ?? null,
                form_id: i.form_id ?? null,
                redirect_url: i.redirect_url ?? null,
              },
            }))
          : []),
      ],
    },
  };
}
