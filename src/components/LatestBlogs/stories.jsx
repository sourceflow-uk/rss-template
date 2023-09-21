import { LatestBlogs } from "./component";
import { fakerEN_GB as faker } from "@faker-js/faker";

const generateItems = () =>
  faker.helpers.multiple(
    () => ({
      title: faker.lorem.words({ min: 3, max: 6 }),
      description: faker.lorem.paragraph(),
      img: faker.image.url({ width: 373, height: 220 }),
      tags: [faker.lorem.words({ min: 1, max: 2 }), faker.lorem.words({ min: 1, max: 2 })],
      published_at: faker.date.past(),
    }),
    { count: 3 }
  );

export default {
  title: "Components/LatestBlogs",
  component: LatestBlogs,
  parameters: {},
  tags: ["autodocs"],
  argTypes: {},
};

export const Default = {
  args: {
    items: generateItems(),
  },
};
