import { Content } from "@/ui";
import { getSectorPageStaticProps } from "@/functions/getSectorPageStaticProps";
import { office_jobs_pages_helper } from "@/helpers/office_jobs_pages_helper";

export default function OfficeSectorPages({ content }) {
  return (
    <>
      <Content items={content} />
    </>
  );
}

export async function getStaticProps({ params: { url_slug } }) {
  return getSectorPageStaticProps({
    sector_id: "d5e71b93-2910-4cbf-84d4-a140d12a6d64",
    url_slug,
    pages_helper: office_jobs_pages_helper,
  });
}

export async function getStaticPaths() {
  return {
    paths: office_jobs_pages_helper.toPaths(),
    fallback: false,
  };
}
