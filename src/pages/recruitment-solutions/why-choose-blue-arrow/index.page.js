import { Content } from "@/ui";
import { getRoute } from "@/getters/getRoute";
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
            items: pages
              .filter((i) => !!i.icon_image)
              .map((i) => ({
                title: i.title,
                img: i.icon_image ?? null,
                href: getRoute("productPage", { url_slug: i.url_slug }),
              })),
          },
        },
        ...pages
          .filter((i) =>
            [
              "fac7e1fb-f81c-4289-b861-4d5f19d2ebe0",
              "6dfaa9f0-3836-4349-8966-dd3aa726a46c",
              "d20e9d98-07a5-4b09-aabe-c030ce7b7e91",
              "17b927dc-594d-4c2c-acaa-9dbf9cda621d",
            ].includes(i.id),
          )
          .map((i, k) => ({
            component: "NarrativePanel",
            props: {
              className: k % 2 === 0 ? "bg-light py-4 py-md-5" : "bg-white py-4 py-md-5",
              title: i.title,
              description: i.description ?? null,
              reverse: k % 2 === 0,
              video_embed_url: i.video ?? null,
              cta: {
                label: "Discover more",
                href: getRoute("productPage", { url_slug: i.url_slug }),
                variant: k % 2 === 0 ? "quaternary" : "primary",
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
