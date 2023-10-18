import BaseCollection from "@sourceflow-uk/sourceflow-sdk/base_collection";

export default class CollectionHelper {
  collection;
  constructor(data) {
    this.collection = new BaseCollection(data, "en");
  }

  find(value, key = "url_slug") {
    return this.collection.getItems().find((i) => i[key] === value);
  }

  filter(filter) {
    return this.fetch({ filter });
  }

  fetch({ limit = null, featured = null, exclude = [], filter = null } = {}) {
    let items = this.collection.getItems();

    if (filter) {
      items = items.filter(filter);
    }

    if (featured) {
      items = items.filter((i) => i.featured === featured);
    }

    if (exclude) {
      items = items.filter((i) => !exclude.includes(i.id));
    }

    if (limit) {
      items = items.slice(0, limit);
    }

    return items;
  }

  toPaths(iterator = (i) => ({ params: { url_slug: i.url_slug } })) {
    return this.collection.getItems().map(iterator);
  }

  toNestedPaths(
    iterator = (i) => {
      let url_slugs = [i.url_slug];
      let page = { ...i };

      while (page?.parent?.id) {
        page = this.find(page.parent.id, "id");
        url_slugs = [page.url_slug, ...url_slugs];
      }

      return { params: { url_slugs } };
    },
  ) {
    return this.toPaths(iterator);
  }
}
