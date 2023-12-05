import { Html, Head, Main, NextScript } from "next/document";
import Script from "next/script";
import { getGlobal } from "@/getters/getGlobal";
import { hexToRgb } from "@/functions/hexToRgb";

export default function Document() {
  const global = getGlobal();

  return (
    <Html lang="en">
      <Head>
        <meta name="google-site-verification" content="AWapnNPK2OndyLbQa9vw6Q2NuF0sIWUWl2WigEzrbuQ" />
        <Script id="gtm" strategy="beforeInteractive">
          {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);})(window,document,'script','dataLayer','GTM-W9BK8R');`}
        </Script>

        <script type="text/javascript" src="https://cdn-ukwest.onetrust.com/consent/46f87f51-ab3c-42b9-98e3-cf5afa5c5335/OtAutoBlock.js" />
        <script src="https://cdn-ukwest.onetrust.com/scripttemplates/otSDKStub.js" type="text/javascript" charset="UTF-8" data-domain-script="46f87f51-ab3c-42b9-98e3-cf5afa5c5335" />
        <script type="text/javascript" dangerouslySetInnerHTML={{
            __html: `function OptanonWrapper() {}`
          }}
        />

        <link rel="icon" type="image/ico" sizes="32x32" href="/favicon.png" />
        <style id="theme">
          {`
            :root {
              --bs-primary: ${global["_theme.color.primary"]} !important;
              --bs-primary-rgb: ${hexToRgb(global["_theme.color.primary"])} !important;
              --bs-primary-active: ${global["_theme.color.primary.active"]} !important;
              --bs-secondary: ${global["_theme.color.secondary"]} !important;
              --bs-secondary-rgb: ${hexToRgb(global["_theme.color.secondary"])} !important;
              --bs-secondary-active: ${global["_theme.color.secondary.active"]} !important;
              --bs-tertiary: ${global["_theme.color.tertiary"]} !important;
              --bs-tertiary-rgb: ${hexToRgb(global["_theme.color.tertiary"])} !important;
              --bs-tertiary-active: ${global["_theme.color.tertiary.active"]} !important;
              --bs-quaternary: ${global["_theme.color.quaternary"]} !important;
              --bs-quaternary-rgb: ${hexToRgb(global["_theme.color.quaternary"])} !important;
              --bs-quaternary-active: ${global["_theme.color.quaternary.active"]} !important;
              --bs-light: ${global["_theme.color.light"]} !important;
              --bs-light-rgb: ${hexToRgb(global["_theme.color.light"])} !important;
              --bs-dark: ${global["_theme.color.dark"]} !important;
              --bs-dark-rgb: ${hexToRgb(global["_theme.color.dark"])} !important;
              --bs-border-radius: ${global["_theme.border.radius"]} !important;
              --bs-border-radius-sm: ${global["_theme.border.radius.sm"]} !important;
              --bs-font-family: ${global["_theme.font.family.default"]} !important;
              --bs-font-family-button: ${global["_theme.font.family.button"]} !important;
              --bs-font-family-h1: ${global["_theme.font.family.h1"]} !important;
              --bs-font-family-h2: ${global["_theme.font.family.h2"]} !important;
              --bs-font-family-h3: ${global["_theme.font.family.h3"]} !important;
              --bs-font-family-h4: ${global["_theme.font.family.h4"]} !important;
              --bs-font-family-h5: ${global["_theme.font.family.h5"]} !important;
              --bs-font-family-h6: ${global["_theme.font.family.h6"]} !important;
              --bs-font-weight-h1: ${global["_theme.font.weight.h1"]} !important;
              --bs-font-weight-h2: ${global["_theme.font.weight.h2"]} !important;
              --bs-font-weight-h3: ${global["_theme.font.weight.h3"]} !important;
              --bs-font-weight-h4: ${global["_theme.font.weight.h4"]} !important;
              --bs-font-weight-h5: ${global["_theme.font.weight.h5"]} !important;
              --bs-font-weight-h6: ${global["_theme.font.weight.h6"]} !important;
            }
          `}
        </style>
      </Head>
      <body>
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-W9BK8R"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
