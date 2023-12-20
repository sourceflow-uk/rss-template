import BaseCollection from "@sourceflow-uk/sourceflow-sdk/base_collection";

export default class CollectionHelper {
  collection;
  constructor(data) {
    this.collection = new BaseCollection(data, "en");
  }

  pluck(key, find) {
    const items = this.find(find.value, find.key);

    if (!items || items.length === 0) {
      return null;
    }

    if (Array.isArray(items)) {
      return items.map((i) => i[key]);
    }

    return [items[key]];
  }

  nestedFind(values, key = "url_slug") {
    const [value, ...rest] = values.reverse();
    const pages = this.filter((i) => i[key] === value);

    // if only 1 result return it
    if (pages.length === 1) {
      return pages[0];
    }

    // if no parent find the result with no parent
    if (rest.length === 0) {
      return pages.find((i) => i.parent.id === null);
    }

    // find parent and return item with matching parent
    const parent = this.nestedFind(rest.reverse(), key);
    if (parent) {
      return pages.find((p) => p.parent.id === parent.id);
    }

    return null;
  }

  find(value, key = "url_slug") {
    return this.collection.getItems().find((i) => i[key] === value);
  }

  filter(filter) {
    return this.fetch({ filter });
  }

  fetch({ limit = null, featured = null, parent = false, exclude = null, filter = null } = {}) {
    let items = this.collection.getItems();

    if (filter) {
      items = items.filter(filter);
    }

    if (featured) {
      items = items.filter((i) => i.featured === featured);
    }

    if (parent !== false) {
      items = items.filter((i) => i.parent.id === parent);
    }

    if (exclude) {
      items = items.filter((i) => !exclude.includes(i.id));
    }

    if (limit) {
      items = items.slice(0, limit);
    }

    return items;
  }

  toPaths({ exclude = [], iterator = (i) => ({ params: { url_slug: i.url_slug } }) } = {}) {
    return this.collection
      .getItems()
      .filter((i) => !exclude.includes(i.id))
      .map(iterator);
  }

  toNestedPaths({
    exclude = [],
    iterator = (i) => {
      let url_slugs = [i.url_slug];
      let page = { ...i };

      while (page?.parent?.id) {
        page = this.find(page.parent.id, "id");
        url_slugs = [page.url_slug, ...url_slugs];
      }

      return { params: { url_slugs } };
    },
  } = {}) {
    return this.toPaths({ exclude, iterator });
  }
}
