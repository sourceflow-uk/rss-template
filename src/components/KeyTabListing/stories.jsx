import { KeyTabListing } from "./component";
import { fakerEN_GB as faker } from "@faker-js/faker";

const generateItems = () =>
  faker.helpers.multiple(
    () => ({
      title: faker.lorem.words({ min: 1, max: 3 }),
      icon: faker.image.url({ width: 25, height: 25 }),
      body: faker.helpers.multiple(() => `<p>${faker.lorem.paragraph()}</p>`, { count: { min: 3, max: 10 } }).join(""),
    }),
    { count: { min: 3, max: 4 } }
  );

export default {
  title: "Components/KeyTabListing",
  component: KeyTabListing,
  parameters: {},
  tags: ["autodocs"],
  argTypes: {},
};

export const Default = {
  args: {
    items: generateItems(),
  },
};
