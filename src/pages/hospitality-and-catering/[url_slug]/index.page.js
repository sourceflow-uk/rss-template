import { Content } from "@/ui";
import { getSectorPageStaticProps } from "@/functions/getSectorPageStaticProps";
import { hospitality_and_catering_pages_helper } from "@/helpers/hospitality_and_catering_pages_helper";

export default function CateringSectorPages({ content }) {
  return (
    <>
      <Content items={content} />
    </>
  );
}

export async function getStaticProps({ params: { url_slug } }) {
  const page = hospitality_and_catering_pages_helper.find(url_slug);

  return getSectorPageStaticProps("42ee49b6-cfc2-4b42-a5b5-cf9a17009a6f", page);
}

export async function getStaticPaths() {
  return {
    paths: hospitality_and_catering_pages_helper.toPaths(),
    fallback: false,
  };
}
