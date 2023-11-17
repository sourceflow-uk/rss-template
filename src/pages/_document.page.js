import { Html, Head, Main, NextScript } from "next/document";
import Script from "next/script";
import { getGlobal } from "@/getters/getGlobal";
import { hexToRgb } from "@/functions/hexToRgb";

export default function Document() {
  const global = getGlobal();
  const gtag = global["_theme.google.gtag"];

  return (
    <Html lang="en">
      <Head>
        {gtag && (
          <Script id="gtm" src={`https://www.googletagmanager.com/gtag/js?id=${gtag}`} strategy="beforeInteractive" />
        )}
        {gtag && (
          <Script id="gtm_script" strategy="beforeInteractive">
            {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${gtag}');
              `}
          </Script>
        )}
        <Script
          id="leadoo"
          async
          src="https://bot.leadoo.com/bot/visual.js?code=9f570568#seamless"
          strategy="beforeInteractive"
        />
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
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
