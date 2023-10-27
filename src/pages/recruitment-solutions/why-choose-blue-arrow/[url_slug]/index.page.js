import { Content } from "@/ui";
import { product_helper } from "@/helpers/product_helper";
import { generateTitle } from "@/faker/generateTitle";
import { generateDescription } from "@/faker/generateDescription";
import { generateBody } from "@/faker/generateBody";
import { getRoute } from "@/getters/getRoute";
import { createTitle } from "@/functions/createTitle";

export default function ServicePage({ content }) {
  return (
    <>
      <Content items={content} />
    </>
  );
}

export async function getStaticProps({ params: { url_slug } }) {
  const product = product_helper.find(url_slug);

  return {
    props: {
      meta: {
        title: createTitle(product.title, "Why choose Blue Arrow?", "Recruitment Solutions"),
      },
      content: [
        {
          component: "BreadcrumbNavigation",
          props: {
            items: [
              { label: "Recruitment Solutions", href: getRoute("recruitmentSolutions") },
              { label: "Why choose Blue Arrow?", href: getRoute("products") },
              { label: product.title, href: getRoute("productPage", { url_slug }) },
            ],
          },
        },
        {
          component: "Header",
          props: {
            className: "text-tertiary bg-light",
            title: {
              path: `page.${url_slug}.component.Header.title`,
              placeholder: product.title,
            },
            img: product.cover_image ?? null,
          },
        },
        {
          component: "SocialVideo",
          props: {
            className: "bg-white py-5",
            video_embed_url: product.video_embed_url,
          },
        },
        ...new Array(product.narrative_panel_count).fill(null).map((i, k) => ({
          component: "NarrativePanel",
          props: {
            className: `${k % 2 === 0 ? "bg-light" : "bg-primary text-white"} py-4 py-md-5`,
            title: {
              path: `page.${url_slug}.component.NarrativePanel.${k + 1}.title`,
              placeholder: generateTitle(),
            },
            description: {
              path: `page.${url_slug}.component.NarrativePanel.${k + 1}.description`,
              placeholder: generateDescription(),
            },
            img: {
              path: `page.${url_slug}.component.NarrativePanel.${k + 1}.img`,
            },
            reverse: k % 2 === 0,
          },
        })),
        {
          component: "FeatureTabsList",
          props: {
            className: "text-center py-4 py-md-5",
            title: {
              path: `page.${url_slug}.component.FeatureTabsList.title`,
              placeholder: generateTitle(),
            },
            description: {
              path: `page.${url_slug}.component.FeatureTabsList.description`,
              placeholder: generateDescription(),
            },
            items: new Array(product.featured_tabs_count).fill(null).map((i, k) => ({
              title: {
                path: `page.${url_slug}.component.FeatureTabsList.item.${k + 1}.title`,
                placeholder: generateTitle(2),
              },
              body: {
                path: `page.${url_slug}.component.FeatureTabsList.item.${k + 1}.body`,
                placeholder: generateBody(2),
              },
              icon: {
                path: `page.${url_slug}.component.FeatureTabsList.item.${k + 1}.icon`,
              },
              img: {
                path: `page.${url_slug}.component.FeatureTabsList.item.${k + 1}.img`,
              },
            })),
            defaultActiveKey: -1,
          },
        },
        {
          component: "Form",
          props: {
            className: "bg-light py-4 py-md-5",
            title: {
              path: `page.${url_slug}.component.Form.title`,
              placeholder: "Request more information",
            },
            formId: "98b1af95-4745-46ac-b426-edad7bd527d2",
          },
        },
      ],
    },
  };
}
export async function getStaticPaths() {
  return {
    paths: product_helper.toPaths(),
    fallback: false,
  };
}
