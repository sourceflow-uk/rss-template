import { Content } from "@/ui";
import { product_helper } from "@/helpers/product_helper";
import { getRoute } from "@/getters/getRoute";
import { generateDescription } from "@/faker/generateDescription";
import { createTitle } from "@/functions/createTitle";
import { simple_pages_helper } from "@/helpers/simple_pages_helper";

export default function ProductsPage({ content }) {
  return (
    <>
      <Content items={content} />
    </>
  );
}

export async function getStaticProps() {
  const title = "Why choose Blue Arrow?";
  const products = product_helper.fetch();
  const pages = simple_pages_helper.fetch({ parent: "9dc7694d-93b5-4ddd-a464-405f77d71cb1" });

  return {
    props: {
      meta: {
        title: createTitle(title, "Recruitment Solutions"),
      },
      content: [
        {
          component: "BreadcrumbNavigation",
          props: {
            items: [
              { label: "Recruitment Solutions", href: getRoute("recruitmentSolutions") },
              { label: title, href: getRoute("products") },
            ],
          },
        },
        {
          component: "Header",
          props: {
            className: "text-tertiary",
            title: {
              path: "page.why-choose-blue-arrow.component.Header.title",
              placeholder: title,
            },
            description: {
              path: "page.why-choose-blue-arrow.component.Header.description",
              placeholder: "",
            },
          },
        },
        {
          component: "GridButtonsGrid",
          props: {
            title: {
              path: "page.why-choose-blue-arrow.component.GridButtonsGrid.title",
              placeholder: "Blue Arrow offers a range of recruitment solutions:",
            },
            description: {
              path: "page.why-choose-blue-arrow.component.GridButtonsGrid.description",
              placeholder: "",
            },
            items: [
              ...products
                .filter((i) => i.icon_image)
                .map((i, k) => ({
                  title: i.title,
                  img: i.icon_image ?? null,
                  href: getRoute("productPage", { url_slug: i.url_slug }),
                })),
              ...pages.map((i, k) => ({
                title: i.title,
                img: i.icon_image ?? null,
                href: getRoute("productPage", { url_slug: i.url_slug }),
              })),
            ],
          },
        },
        ...products.map((i, k) => ({
          component: "NarrativePanel",
          props: {
            className: k % 2 === 0 ? "bg-white py-4 py-md-5" : "bg-light py-4 py-md-5",
            title: i.title,
            description: i.description,
            reverse: k % 2 === 0,
            video_embed_url: i.video_embed_url ?? null,
            cta: {
              label: "Discover more",
              href: getRoute("productPage", { url_slug: i.url_slug }),
              variant: "quaternary",
            },
          },
        })),
        {
          component: "Form",
          props: {
            className: "bg-light py-4 py-md-5",
            title: {
              path: `page.why-choose-blue-arrow.component.Form.title`,
              placeholder: "Request more information",
            },
            formId: "98b1af95-4745-46ac-b426-edad7bd527d2",
          },
        },
      ],
    },
  };
}
