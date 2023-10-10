import { Html, Head, Main, NextScript } from "next/document";
import Script from "next/script";
import { RootStyleOverrides } from "@/ui";
import { getGlobal } from "@/getters/getGlobal";

export default function Document() {
  const global = getGlobal();

  return (
    <Html lang="en">
      <Head>
        {global["_theme.google.gtag"] && (
          <>
            <Script
              id="gtm"
              src={`https://www.googletagmanager.com/gtag/js?id=${global["_theme.google.gtag"]}`}
              strategy="beforeInteractive"
            />
            <Script id="gtm_script" strategy="beforeInteractive">
              {`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '${global["_theme.google.gtag"]}');
        `}
            </Script>
          </>
        )}
        <RootStyleOverrides />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
