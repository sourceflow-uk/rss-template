import { Html, Head, Main, NextScript } from "next/document";
import Script from "next/script";
import { getGlobal } from "@/getters/getGlobal";
import { hexToRgb } from "@/functions/hexToRgb";

export default function Document() {
  const global = getGlobal();
  const gtag = global["_theme.google.gtag"];
  const reciteme = global["_theme.reciteme.key"];

  return (
    <Html lang="en">
      <Head>
        {gtag && (
          <>
            <Script id="gtm" src={`https://www.googletagmanager.com/gtag/js?id=${gtag}`} strategy="beforeInteractive" />
            <Script id="gtm_script" strategy="beforeInteractive">
              {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${gtag}');
              `}
            </Script>
            <Script id="reciteme">
              {`
                var serviceUrl = "//api.reciteme.com/asset/js?key=";
                var serviceKey = "${reciteme}";
                var options = {};  // Options can be added as needed
                var autoLoad = false;
                var enableFragment = "#reciteEnable";
                var loaded = [], frag = !1; window.location.hash === enableFragment && (frag = !0); function loadScript(c, b) { var a = document.createElement("script"); a.type = "text/javascript"; a.readyState ? a.onreadystatechange = function () { if ("loaded" == a.readyState || "complete" == a.readyState) a.onreadystatechange = null, void 0 != b && b() } : void 0 != b && (a.onload = function () { b() }); a.src = c; document.getElementsByTagName("head")[0].appendChild(a) } function _rc(c) { c += "="; for (var b = document.cookie.split(";"), a = 0; a < b.length; a++) { for (var d = b[a]; " " == d.charAt(0);)d = d.substring(1, d.length); if (0 == d.indexOf(c)) return d.substring(c.length, d.length) } return null } function loadService(c) { for (var b = serviceUrl + serviceKey, a = 0; a < loaded.length; a++)if (loaded[a] == b) return; loaded.push(b); loadScript(serviceUrl + serviceKey, function () { "function" === typeof _reciteLoaded && _reciteLoaded(); "function" == typeof c && c(); Recite.load(options); Recite.Event.subscribe("Recite:load", function () { Recite.enable() }) }) } "true" == _rc("Recite.Persist") && loadService(); if (autoLoad && "false" != _rc("Recite.Persist") || frag) document.addEventListener ? document.addEventListener("DOMContentLoaded", function (c) { loadService() }) : loadService();
              `}
            </Script>
          </>
        )}
        <style key="theme">
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
