import FeatureTabsList from "./index";
import { generateArrayOf } from "@/faker/generateArrayOf";
import { generateFeaturedTabListItem } from "@/faker/generateFeaturedTabListItem";

export default {
  title: "New/Components/FeatureTabsList",
  component: FeatureTabsList,
  parameters: {},
  tags: [],
  argTypes: {},
};

export const Default = {
  args: {
    items: generateArrayOf(generateFeaturedTabListItem, { count: 5 }),
  },
};

export const Vertical = {
  args: {
    items: generateArrayOf(generateFeaturedTabListItem, { count: 5 }),
    vertical: true,
  },
};
