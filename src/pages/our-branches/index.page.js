import { Content } from "@/ui";
import { getRoute } from "@/getters/getRoute";
import { createTitle } from "@/functions/createTitle";
import { branch_helper } from "@/helpers/branch_helper";

export default function BranchesPage({ content }) {
  return (
    <>
      <Content items={content} />
    </>
  );
}

export async function getStaticProps() {
  const title = "Our Branches";
  const branches = branch_helper.fetch();

  return {
    props: {
      meta: {
        title: createTitle(title),
      },
      content: [
        {
          component: "BreadcrumbNavigation",
          props: {
            items: [
              { label: "Contact us", href: getRoute("contact") },
              { label: title, href: getRoute("branches") },
            ],
          },
        },
        {
          component: "Header",
          props: {
            className: "text-tertiary",
            title: { path: "page.branches.component.Header.title", placeholder: title },
            description: {
              path: "page.branches.component.Header.title",
              placeholder:
                "<p>We are currently seeing visitors by appointment; to book your place with a specialist consultant please search for your local branch below and contact them on the contact details provided.</p><p>We look forward to speaking with you.</p>",
            },
          },
        },
        {
          component: "BranchLookupPanel",
          props: { branches },
        },
      ],
    },
  };
}
