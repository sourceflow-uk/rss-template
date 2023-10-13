import { Content } from "@/ui";
import unslug from "unslug";
import { getRoute } from "@/getters/getRoute";
import { generateImage } from "@/faker/generateImage";

export default function EmployerSubPage({ content }) {
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
    href: getRoute("employers", { url_slugs: url_slugs.slice(0, k + 1) }),
  }));
  const [page, prevPage] = [...pages].reverse();

  return {
    props: {
      meta: {},
      content: [
        {
          component: "BreadcrumbNavigation",
          props: {
            items: [
              { label: "Find a Job", href: getRoute("jobs") },
              { label: "Great Places To Work", href: getRoute("employers") },
              ...pages,
            ],
          },
        },
        {
          component: "Header",
          props: {
            title: {
              path: `page.${url_slugs.join(".")}.component.Header.title`,
              placeholder: `Working with ${page.label}`,
            },
            img: generateImage({ width: 1440, height: 365 }),
          },
        },
      ],
    },
  };
}

export async function getStaticPaths() {
  return { paths: [], fallback: true };
}
