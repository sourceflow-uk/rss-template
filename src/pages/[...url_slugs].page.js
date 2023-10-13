import { Content } from "@/ui";
import { getRoute } from "@/getters/getRoute";
import unslug from "unslug";

export default function Page({ content }) {
  return (
    <>
      <Content items={content} />
    </>
  );
}

export async function getStaticProps({ params: { url_slugs } }) {
  const pages = url_slugs.map((url_slug, k) => ({
    url_slug,
    label: unslug(url_slug),
    href: getRoute("dynamic", { url_slugs: url_slugs.slice(0, k + 1) }),
  }));
  const [page, prevPage] = [...pages].reverse();

  return {
    props: {
      meta: {},
      content: [
        {
          component: "BreadcrumbNavigation",
          props: {
            items: pages,
          },
        },
        {
          component: "Header",
          props: {
            title: page.label,
            back: prevPage
              ? {
                  path: `page.${prevPage.url_slug}.component.Header.back`,
                  placeholder: `Back to ${prevPage.label}`,
                  href: prevPage.href,
                }
              : {
                  label: `Back to Home`,
                  href: getRoute("home"),
                },
          },
        },
      ],
    },
  };
}

export async function getStaticPaths() {
  return { paths: [], fallback: true };
}
