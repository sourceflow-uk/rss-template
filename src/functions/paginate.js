/**
 *
 * @param items
 * @param perPage
 * @param page
 * @returns {*}
 */
export const paginate = (items, perPage, page) => {
  return {
    items: items.slice(perPage * (page - 1), perPage * page),
    __metadata: {
      page,
      pages: Math.ceil(items.length / perPage)
    }
  }
}
