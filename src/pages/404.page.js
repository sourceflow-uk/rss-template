import { BreadcrumbNavigation, Header } from "@/components";
import { getRoute } from "@/getters/getRoute";

export default function ErrorPage() {
  return (
    <>
      <BreadcrumbNavigation items={[{ label: "404" }]} />
      <Header
        className="bg-light text-tertiary"
        back={{
          path: `page.home.component.Header.back`,
          placeholder: `Back to Home`,
          href: getRoute("home"),
        }}
        title={{
          path: `page.error.title`,
          placeholder: "404 - Page Not Found",
        }}
      />
    </>
  );
}
