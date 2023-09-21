import { MiniCarousel } from "./component";
import { fakerEN_GB as faker } from "@faker-js/faker";

const generateItems = () =>
  faker.helpers.multiple(
    () => ({
      title: faker.lorem.words({ min: 3, max: 6 }),
      description: faker.lorem.sentence(),
      img: faker.image.url({ width: 703, height: 352 }),
      cta: {
        label: faker.lorem.words({ min: 1, max: 2 }),
        href: "#",
      },
    }),
    { count: 3 }
  );

export default {
  title: "Components/MiniCarousel",
  component: MiniCarousel,
  parameters: {},
  tags: ["autodocs"],
  argTypes: {},
};

export const Default = {
  args: {
    items: generateItems(),
  },
};
