import BaseCollection from "@sourceflow-uk/sourceflow-sdk/base_collection";

export default class CollectionHelper {
  collection;
  constructor(data) {
    this.collection = new BaseCollection(data, "en");
  }

  find(value, key = "url_slug") {
    return this.collection.getItems().find((i) => i[key] === value);
  }

  fetch({ limit } = {}) {
    if (limit) {
      return this.collection.getItems().slice(0, limit);
    }

    return this.collection.getItems();
  }

  toPaths(iterator = (i) => ({ params: { url_slug: i.url_slug } })) {
    return this.collection.getItems().map(iterator);
  }
}
