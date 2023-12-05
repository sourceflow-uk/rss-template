import data from "../../.sourceflow/blog.json";
import CollectionHelper from "@/helpers/CollectionHelper";
import { sortByDate } from "@/functions/sortByDate";

class BlogCollectionHelper extends CollectionHelper {
  fetch({ limit = null, featured = null, parent = false, exclude = null, filter = null } = {}) {
    let items = this.collection.getItems();

    sortByDate(items, "publish_date");

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
}

export const blog_helper = new BlogCollectionHelper(data);
