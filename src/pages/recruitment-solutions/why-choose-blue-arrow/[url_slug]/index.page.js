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
        ...(Array.isArray(product.narrative_panels)
          ? product.narrative_panels.map((i, k) => ({
              component: "NarrativePanel",
              id: `NarrativePanel-${k}`,
              props: {
                className: `py-4 py-md-5 ${k % 2 === 0 ? "bg-white" : "bg-light"}`,
                title: i["Title"] ?? null,
                description: i["Description"] ?? null,
                img: i["Image"] ?? null,
                video_embed_url: i["Video Embed Url"] ?? null,
                cta: {
                  label: i["Button Label"] ?? "Read more",
                  href: i["Button Link"] ?? "#",
                  variant: k % 2 === 0 ? "quaternary" : "primary",
                },
                reverse: k % 2 === 0,
              },
            }))
          : []),
        ...(product.featured_tabs_items
          ? [
              {
                component: "FeatureTabsList",
                props: {
                  className: "text-center py-4 py-md-5",
                  title: product.featured_tabs_title ?? null,
                  description: product.featured_tabs_description ?? null,
                  items: product.featured_tabs_items.map((i, k) => ({
                    title: i["Title"] ?? null,
                    body: i["Body"] ?? null,
                    icon: i["Icon"] ?? null,
                  })),
                  defaultActiveKey: -1,
                },
              },
            ]
          : []),
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
