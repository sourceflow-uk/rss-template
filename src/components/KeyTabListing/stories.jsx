import { KeyTabListing } from "./index";
import { generateArrayOf } from "@/faker/generateArrayOf";
import { generateKeyTabListing } from "@/faker/generateKeyTabListing";

export default {
  title: "Components/KeyTabListing",
  component: KeyTabListing,
  parameters: {},
  tags: [],
  argTypes: {},
};

export const Default = {
  args: {
    items: generateArrayOf(generateKeyTabListing, { count: 4 }),
  },
};
