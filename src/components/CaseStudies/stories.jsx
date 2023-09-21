import { CaseStudies } from "./component";
import { fakerEN_GB as faker } from "@faker-js/faker";

const generateItems = () =>
  faker.helpers.multiple(
    () => ({
      title: faker.lorem.words({ min: 1, max: 3 }),
      img: faker.image.url({ width: 300, height: 300 }),
      description: faker.lorem.words({ min: 2, max: 10 }),
      href: "#",
    }),
    { count: 6 }
  );

export default {
  title: "Components/CaseStudies",
  component: CaseStudies,
  parameters: {},
  tags: ["autodocs"],
  argTypes: {},
};

export const Default = {
  args: {
    items: generateItems(),
  },
};
