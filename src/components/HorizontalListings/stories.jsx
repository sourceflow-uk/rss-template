import HorizontalListings from "./index";
import { fakerEN_GB as faker } from "@faker-js/faker";
import { generateArrayOf } from "@/faker/generateArrayOf";
import { generateHorizontalListing } from "@/faker/generateHorizontalListing";

export default {
  title: "Components/HorizontalListings",
  component: HorizontalListings,
  parameters: {},
  tags: [],
  argTypes: {},
};

export const Default = {
  args: {
    title: faker.lorem.words(2),
    items: generateArrayOf(generateHorizontalListing, { count: 3 }),
  },
};
