/**
 *
 * @param str
 * @returns {string}
 */
export const stripTags = (str = "") => str.replace(/(<([^>]+)>)/gi, "");
