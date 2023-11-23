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

export async function getStaticProps({ params: { url_slugs } }) {
  return getSectorPageStaticProps({
    sector_id: "42ee49b6-cfc2-4b42-a5b5-cf9a17009a6f",
    url_slugs,
    pages_helper: hospitality_and_catering_pages_helper,
  });
}

export async function getStaticPaths() {
  return {
    paths: hospitality_and_catering_pages_helper.toNestedPaths(),
    fallback: false,
  };
}
