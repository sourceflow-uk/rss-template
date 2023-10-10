import { Content } from "@/ui";

export default function Page({ content }) {
  return (
    <>
      <Content items={content} demoMode={true} />
    </>
  );
}

export async function getStaticProps({}) {
  return {
    props: {
      meta: {},
      content: [],
    },
  };
}
