import { Content } from "@/ui";
import { generateArrayOf } from "@/faker/generateArrayOf";
import { generateBranch } from "@/faker/generateBranch";
import { getRoute } from "@/getters/getRoute";

export default function BranchesPage({ content }) {
  return (
    <>
      <Content items={content} />
    </>
  );
}

export async function getStaticProps() {
  return {
    props: {
      meta: {},
      content: [
        {
          component: "BreadcrumbNavigation",
          props: {
            items: [
              { label: "Contact us", href: getRoute("contact") },
              { label: "Our Branches", href: getRoute("branches") },
            ],
          },
        },
        {
          component: "Header",
          props: {
            title: "Our Branches",
            description:
              "<p>We are currently seeing visitors by appointment; to book your place with a specialist consultant please search for your local branch below and contact them on the contact details provided.</p><p>We look forward to speaking with you.</p>",
          },
        },
        {
          component: "BranchLookupPanel",
          props: {
            branches: generateArrayOf(generateBranch, { count: 20 }),
          },
        },
      ],
    },
  };
}