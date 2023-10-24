import { Content } from "@/ui";
import { hospitality_and_catering_pages_helper } from "@/helpers/hospitality_and_catering_pages_helper";
import { getSectorStaticProps } from "@/functions/getSectorStaticProps";

export default function CateringSectorPage({ content }) {
  return (
    <>
      <Content items={content} />
    </>
  );
}

export async function getStaticProps() {
  return getSectorStaticProps("42ee49b6-cfc2-4b42-a5b5-cf9a17009a6f", hospitality_and_catering_pages_helper);
}
