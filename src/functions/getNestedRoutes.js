import unslug from "unslug";

/**
 *
 * @param url_slugs - array of url_slugs to iterate over
 * @param routePrefix - first part of the returned href value
 * @param overwrites - add additional or overwrite existing values { [key]: { ...values_to_overwrite } }
 * 
 * @returns {*}
 */
export const getNestedRoutes = ({ url_slugs, routePrefix = "/", overwrites = {} }) =>
  url_slugs.map((url_slug, k) => ({
    url_slug,
    label: unslug(url_slug),
    href: `${routePrefix}${url_slugs.slice(0, k + 1).join("/")}`,
    ...overwrites[url_slug],
  }));
