import { Content } from "@/ui";
import { product_helper } from "@/helpers/product_helper";
import { getRoute } from "@/getters/getRoute";
import { generateDescription } from "@/faker/generateDescription";

export default function ProductsPage({ content }) {
  return (
    <>
      <Content items={content} />
    </>
  );
}

export async function getStaticProps() {
  const products = product_helper.fetch();

  return {
    props: {
      meta: {},
      content: [
        {
          component: "BreadcrumbNavigation",
          props: {
            items: [
              { label: "Recruitment Solutions", href: getRoute("recruitmentSolutions") },
              { label: "Why choose Blue Arrow?", href: getRoute("products") },
            ],
          },
        },
        {
          component: "Header",
          props: {
            className: "text-tertiary",
            title: {
              path: "page.why-choose-blue-arrow.component.Header.title",
              placeholder: "Why choose Blue Arrow?",
            },
            description: {
              path: "page.why-choose-blue-arrow.component.Header.description",
              placeholder: generateDescription(),
            },
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
