import { isAfter } from "date-fns";

/**
 *
 * @param array
 * @param sortKey
 */
export const sortByDate = (array, sortKey) => {
  array.sort((a, b) => (sortKey in a && sortKey in b && isAfter(new Date(a[sortKey]), new Date(b[sortKey])) ? -1 : 1));
};
