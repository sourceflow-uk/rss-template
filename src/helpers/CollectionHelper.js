import BaseCollection from "@sourceflow-uk/sourceflow-sdk/base_collection";

export default class CollectionHelper {
  collection;
  constructor(data) {
    this.collection = new BaseCollection(data, "en");
  }

  find(value, key = "url_slug", includes = false) {
    if (includes) {
      return this.collection.getItems().find((i) => value.toLowerCase().includes(i[key].toLowerCase().trim()));
    }

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
