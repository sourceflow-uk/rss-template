import { HorizontalListings } from "./component";
import { fakerEN_GB as faker } from "@faker-js/faker";

const generateItems = () =>
  faker.helpers.multiple(
    () => ({
      title: faker.lorem.words({ min: 1, max: 3 }),
      img: faker.image.url({ width: 64, height: 64 }),
      description: faker.lorem.paragraph(),
    }),
    { count: 3 }
  );

export default {
  title: "Components/HorizontalListings",
  component: HorizontalListings,
  parameters: {},
  tags: ["autodocs"],
  argTypes: {},
};

export const Default = {
  args: {
    title: faker.lorem.words(2),
    items: generateItems(),
  },
};
