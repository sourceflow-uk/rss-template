import { Content } from "@/ui";
import { driving_jobs_pages_helper } from "@/helpers/driving_jobs_pages_helper";
import { getSectorPageStaticProps } from "@/functions/getSectorPageStaticProps";

export default function DrivingSectorPages({ content }) {
  return (
    <>
      <Content items={content} />
    </>
  );
}

export async function getStaticProps({ params: { url_slug } }) {
  return getSectorPageStaticProps({
    sector_id: "741e7908-0c11-4a62-91c1-dd23b02c8cd7",
    url_slug,
    pages_helper: driving_jobs_pages_helper,
  });
}

export async function getStaticPaths() {
  return {
    paths: driving_jobs_pages_helper.toPaths(),
    fallback: false,
  };
}
