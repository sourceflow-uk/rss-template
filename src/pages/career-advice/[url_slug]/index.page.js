import { Content } from "@/ui";
import { career_advice_helper } from "@/helpers/career_advice_helper";

export default function CareerAdviceSubPage({ content }) {
  return (
    <>
      <Content items={content} />
    </>
  );
}

export async function getStaticProps({ params: { url_slug } }) {
  const page = career_advice_helper.find(url_slug);

  return {
    props: {
      meta: {},
      content: [],
    },
  };
}

export async function getStaticPaths() {
  return {
    paths: career_advice_helper.toPaths(),
    fallback: false,
  };
}
