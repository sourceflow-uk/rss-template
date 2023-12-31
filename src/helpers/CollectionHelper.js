import BaseCollection from "@sourceflow-uk/sourceflow-sdk/base_collection";

export default class CollectionHelper {
  collection;
  constructor(data) {
    this.collection = new BaseCollection(data, "en");
  }

  find(value, key = "url_slug") {
    return this.collection.getItems().find((i) => i[key] === value);
  }

  fetch({ limit = null, featured = null, exclude = [] } = {}) {
    let items = this.collection.getItems();

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
}
