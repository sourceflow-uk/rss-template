import "@/scss/styles.scss";
import { getGlobal } from "@/getters/getGlobal";
import { Suspense } from "react";
import { SiteFooter, SiteHeader } from "@/ui";
import SourceFlowHead from "@sourceflow-uk/sourceflow-head";
import metaObject from "../../.sourceflow/metadata.json";
import ReciteMeWidget from "@/ui/ReciteMeWidget";

export default function App({ Component, pageProps }) {
  const global = getGlobal();

  return (
    <Suspense>
      <SourceFlowHead metaObject={metaObject} addTracker={true} cookieExpiryTime={3000}>
        {pageProps.meta?.title && <title>{pageProps.meta.title}</title>}
      </SourceFlowHead>
      <SiteHeader className={global["_theme.header.classes"]} />
      <main className="flex-grow-1">
        <Component {...pageProps} />
      </main>
      <SiteFooter className={global["_theme.footer.classes"]} />
      <ReciteMeWidget />
    </Suspense>
  );
}
