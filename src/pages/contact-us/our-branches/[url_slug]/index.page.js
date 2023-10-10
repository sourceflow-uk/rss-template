import { Content } from "@/ui";
import unslug from "unslug";
import { generateArrayOf } from "@/faker/generateArrayOf";
import { generateJob } from "@/faker/generateJob";

export default function Page({ content }) {
  return (
    <>
      <Content items={content} />
    </>
  );
}

export async function getStaticProps({ params: { url_slug } }) {
  return {
    props: {
      meta: {},
      content: [
        {
          component: "BreadcrumbNavigation",
          props: {
            items: [
              { label: "Contact us", href: "/contact-us" },
              { label: "Our Branches", href: "/contact-us/our-branches" },
              { label: unslug(url_slug), href: `/contact-us/our-branches/${url_slug}` },
            ],
          },
        },
        {
          component: "LatestJobs",
          props: {
            title: `Latest Jobs in ${unslug(url_slug)}`,
            items: generateArrayOf(generateJob, { count: 8 }),
            visibleCount: 4,
          },
        },
      ],
    },
  };
}

export async function getStaticPaths() {
  return { paths: [], fallback: false };
}
