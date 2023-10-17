import data from "../../.sourceflow/assets.json";
import BaseCollection from "@sourceflow-uk/sourceflow-sdk/base_collection";

export const getAsset = (props) => {
  const path = typeof props === "string" ? props : props.path;
  const size = typeof props === "string" ? null : props.size;
  const items = new BaseCollection(data, "en").getItems();
  const asset = items.find((i) => i.key === path);

  if (size) {
    return asset
      ? asset.file.replace("https://cdn.sourceflow.co.uk/", `https://cdn.sourceflow.co.uk/variant/${size}/`)
      : null;
  }

  return asset ? asset.file : null;
};
