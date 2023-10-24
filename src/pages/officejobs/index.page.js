import { Content } from "@/ui";
import { office_jobs_pages_helper } from "@/helpers/office_jobs_pages_helper";
import { getSectorStaticProps } from "@/functions/getSectorStaticProps";

export default function OfficeSectorPage({ content }) {
  return (
    <>
      <Content items={content} />
    </>
  );
}

export async function getStaticProps() {
  return getSectorStaticProps({
    sector_id: "d5e71b93-2910-4cbf-84d4-a140d12a6d64",
    pages_helper: office_jobs_pages_helper,
  });
}
