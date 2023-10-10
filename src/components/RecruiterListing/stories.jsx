import RecruiterListing from "./index";
import { generateArrayOf } from "@/faker/generateArrayOf";
import { generateRecruiterListingItem } from "@/faker/generateRecruiterListingItem";

export default {
  title: "Components/RecruiterListing",
  component: RecruiterListing,
  parameters: {},
  tags: [],
  argTypes: {},
};

export const Default = {
  args: {
    items: generateArrayOf(generateRecruiterListingItem, { count: 3 }),
  },
};
