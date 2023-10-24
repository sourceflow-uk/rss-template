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
  return getSectorStaticProps("741e7908-0c11-4a62-91c1-dd23b02c8cd7", driving_jobs_pages_helper);
}
