import { Content } from "@/ui";
import { driving_jobs_pages_helper } from "@/helpers/driving_jobs_pages_helper";
import { getSectorStaticProps } from "@/functions/getSectorStaticProps";

export default function DrivingSectorPage({ content }) {
  return (
    <>
      <Content items={content} />
    </>
  );
}

export async function getStaticProps() {
  return getSectorStaticProps({
    sector_id: "df0bc90d-b2a9-408a-9665-107e91a556a4",
  });
}
