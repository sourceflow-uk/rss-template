import { isAfter } from "date-fns";

/**
 *
 * @param array
 * @param sortKey
 * @param latestFirst
 */
export const sortByDate = (array = [], sortKey = "created_at", latestFirst = true) => {
  // prettier-ignore
  array.sort((a, b) =>
    sortKey in a && sortKey in b && isAfter(new Date(a[sortKey]), new Date(b[sortKey]))
      ? (latestFirst ? -1 : 1)
      : (latestFirst ? 1 : -1)
  );

  return array; // return is not needed but supplied for flexibility
};
