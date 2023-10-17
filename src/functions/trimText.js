import { stripTags } from "@/functions/stripTags";
/**
 *
 * @param str
 * @param length
 * @param ellipses
 */

export const trimText = (str, length = 120, ellipses = true) => {
  const s = stripTags(str).slice(0, length);

  if (s.length < length) {
    return `${s}`;
  }

  const lastIndex = s.lastIndexOf(" ");

  return `${s.slice(0, lastIndex)}${ellipses ? "..." : ""}`;
};
