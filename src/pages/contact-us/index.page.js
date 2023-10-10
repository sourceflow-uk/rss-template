import { Content } from "@/ui";

export default function Page({ content }) {
  return (
    <>
      <Content items={content} />
    </>
  );
}

export async function getStaticProps() {
  return {
    props: {
      meta: {},
      content: [
        { component: "BreadcrumbNavigation", props: { items: [{ label: "Contact us", href: "/contact-us" }] } },
      ],
    },
  };
}
