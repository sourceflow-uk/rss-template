import data from "../../.sourceflow/jobs.json";
import CollectionHelper from "@/helpers/CollectionHelper";

class JobsCollectionHelper extends CollectionHelper {
  getCategoryValues(search, { categories }) {
    const category = categories.find((i) => i.id === search || i.name === search);

    if (!category) {
      return null;
    }

    return category.values;
  }
}

export const jobs_helper = new JobsCollectionHelper(data.jobs);
