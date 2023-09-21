import { MultiTiles } from "./component";
import { fakerEN_GB as faker } from "@faker-js/faker";

const generateItems = () =>
  faker.helpers.multiple(
    () => ({
      title: faker.lorem.words({ min: 1, max: 3 }),
      img: faker.image.url({ width: 200, height: 200 }),
      href: "#",
    }),
    { count: 12 }
  );

export default {
  title: "Components/MultiTiles",
  component: MultiTiles,
  parameters: {},
  tags: ["autodocs"],
  argTypes: {},
};

export const Default = {
  args: {
    items: generateItems(),
  },
};
