import { flatten, uniq } from "lodash/array";

/**
 *
 * @param array
 * @param value
 */
export const generateOptionsArray = (array, value) => {
  return uniq(
    flatten(
      array.map((i) =>
        value in i ? (Array.isArray(i[value]) ? i[value] : i[value].split(",")).map((i) => i.trim()) : [],
      ),
    ),
  ).filter((i) => !!i);
};
