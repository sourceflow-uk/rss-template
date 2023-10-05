import { Content } from "@/ui/Content";

export default function Page({ content }) {
  return (
    <>
      <Content items={content} />
    </>
  );
}

export async function getStaticProps({ params: { url_slug } }) {
  console.log({ url_slug });

  return {
    props: {
      meta: {},
      content: [],
    },
  };
}

export async function getStaticPaths() {
  return { paths: [], fallback: false };
}
