import data from "../../.sourceflow/jobs.json";
import CollectionHelper from "@/helpers/CollectionHelper";

class JobsCollectionHelper extends CollectionHelper {
  fetch({ limit = null, featured = null, sector = null, employer = null, exclude = null, filter = null } = {}) {
    let items = this.collection.getItems();

    if (filter) {
      items = items.filter(filter);
    }

    if (sector) {
      items = items.filter((i) => JSON.stringify(i.categories).includes(sector));
    }

    if (employer) {
      items = items.filter((i) => JSON.stringify(i.categories).includes(employer));
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
  getCategoryValues(search, { categories }) {
    const category = categories.find((i) => i.id === search || i.name === search);

    if (!category) {
      return [];
    }

    return category.values;
  }

  getCategoryValueIds(search, { categories }) {
    return this.getCategoryValues(search, { categories }).map((i) => i.id);
  }
}

export const jobs_helper = new JobsCollectionHelper(data.jobs);
