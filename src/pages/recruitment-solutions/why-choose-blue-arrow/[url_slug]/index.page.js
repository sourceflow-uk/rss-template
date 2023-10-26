import { Content } from "@/ui";
import { product_helper } from "@/helpers/product_helper";

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
      meta: {},
      content: [
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
