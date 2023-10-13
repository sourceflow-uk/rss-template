import "@/scss/styles.scss";
import { ParallaxProvider } from "react-scroll-parallax";
import { getGlobal } from "@/getters/getGlobal";
import { getHeaderMenu } from "@/getters/getHeaderMenu";
import { getFooterMenu } from "@/getters/getFooterMenu";
import { Suspense } from "react";
import { SiteFooter, SiteHeader } from "@/ui";
import { getAsset } from "@/getters/getAsset";

export default function App({ Component, pageProps }) {
  const global = getGlobal();

  const headerProps = {
    className: global["_theme.header.classes"],
    company_logo: getAsset("_theme.company.logo"),
    company_name: global["_theme.company.name"],
    nav: getHeaderMenu(),
  };

  const footerProps = {
    className: global["_theme.footer.classes"],
    social_links: {
      facebook: global["_theme.social.facebook"],
      twitter: global["_theme.social.twitter"],
      linkedin: global["_theme.social.linkedin"],
      youtube: global["_theme.social.youtube"],
    },
    website: global["_theme.company.website"],
    phone: global["_theme.company.phone"],
    address: global["_theme.company.address"],
    company_name: global["_theme.company.name"],
    company_number: global["_theme.company.number"],
    company_logo: getAsset("_theme.company.logo.white"),
    vat_number: global["_theme.company.vat.number"],
    nav: getFooterMenu(),
  };

  return (
    <Suspense>
      <ParallaxProvider>
        {/*<SiteHead meta={pageProps?.meta} />*/}
        <SiteHeader {...headerProps} />
        <main className="flex-grow-1">
          <Component {...pageProps} />
        </main>
        <SiteFooter {...footerProps} />
      </ParallaxProvider>
    </Suspense>
  );
}
