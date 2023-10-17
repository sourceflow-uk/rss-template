import { Content } from "@/ui";
import { getRoute } from "@/getters/getRoute";
import unslug from "unslug";
import { simple_pages_helper } from "@/helpers/simple_pages_helper";

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
  const item = simple_pages_helper.find(page.url_slug);

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
            title: item.title,
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
          },
        },
        {
          component: "RichText",
          props: { body: item.body },
        },
      ],
    },
  };
}

export async function getStaticPaths() {
  return {
    paths: simple_pages_helper.toNestedPaths(),
    fallback: false,
  };
}
