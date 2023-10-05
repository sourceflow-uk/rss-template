// import global from "@/../.sourceflow/global.json";
import BaseObject from "@sourceflow-uk/sourceflow-sdk/base_object";

/**
 *
 * @param locale
 * @returns BaseObject
 */
export const getGlobal = (locale = "en") => {
  return {
    "_theme.google.gtag": null,
    "_theme.color.primary": "#009EE3",
    "_theme.color.primary.active": "#0084BD",
    "_theme.color.secondary": "#EE721C",
    "_theme.color.secondary.active": "#BE5B16",
    "_theme.color.tertiary": "#1B1464",
    "_theme.color.tertiary.active": "#161153",
    "_theme.color.quaternary": "#E50B7E",
    "_theme.color.quaternary.active": "#B70965",
    "_theme.color.light": "#DFF1FD",
    "_theme.color.dark": "#6F6F6F",
    "_theme.header.classes": "bg-white text-dark",
    "_theme.footer.classes": "bg-primary text-white",
    "_theme.border.radius.sm": "6px",
    "_theme.border.radius": "10px",
    "_theme.font.family.default": "Helvetica Neue, sans-serif",
    "_theme.font.family.heading": "Arial Black, Helvetica Neue, sans-serif",
    "_theme.font.family.heading.small": "Arial, Helvetica Neue, sans-serif",
    "_theme.company.name": "Blue Arrow Ltd",
    "_theme.company.number": "641659",
    "_theme.company.logo": "",
    "_theme.company.logo.white": "",
    "_theme.vat.number": "108252831",
    "_theme.address": "33 Soho Square, London, W1D 3QU, United Kingdom",
    "_theme.phone": "0800 085 5777",
    "_theme.website": "bluearrow.co.uk",
    "_theme.social.facebook": "https://www.facebook.com/BlueArrowJobs",
    "_theme.social.twitter": "https://twitter.com/bluearrowgroup",
    "_theme.social.linkedin": "https://www.linkedin.com/company/blue-arrow",
    "_theme.social.youtube": "https://www.youtube.com/channel/UCN1X-rcqNOXv0fLbhtNnJJQ",
  };

  // return new BaseObject(global, locale).toJson();
};
