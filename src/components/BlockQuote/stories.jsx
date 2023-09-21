import { BlockQuote } from "./component";
import { fakerEN_GB as faker } from "@faker-js/faker";

const generateItems = ({ count = 6 } = {}) =>
  faker.helpers.multiple(
    () => ({
      quote: `“${faker.lorem.paragraphs({ min: 2, max: 4 })}”`,
      author: {
        name: faker.person.fullName(),
        position: faker.person.jobTitle(),
      },
    }),
    { count }
  );

export default {
  title: "Components/BlockQuote",
  component: BlockQuote,
  parameters: {},
  tags: ["autodocs"],
  argTypes: {},
};

export const Carousel = {
  args: {
    title: "Block quote title",
    items: generateItems({ count: 3 }),
    carousel: true,
    visibleCount: 1,
  },
};

export const Static = {
  args: {
    title: "Block quote title",
    items: generateItems({ count: 1 }),
    carousel: false,
    visibleCount: 1,
  },
};

export const CarouselThreeCards = {
  args: {
    title: "Block quote title",
    items: generateItems({ count: 9 }),
    carousel: true,
    visibleCount: 3,
  },
};

export const StaticThreeCards = {
  args: {
    title: "Block quote title",
    items: generateItems({ count: 3 }),
    carousel: false,
    visibleCount: 3,
  },
};
