import { HeroButtonsGrid } from "./component";
import { fakerEN_GB as faker } from "@faker-js/faker";

const generateItems = () =>
  faker.helpers.multiple(
    () => ({
      title: faker.lorem.words({ min: 1, max: 3 }),
      img: faker.image.url({ width: 160, height: 160 }),
      href: "#",
    }),
    { count: 8 }
  );

export default {
  title: "Components/HeroButtonsGrid",
  component: HeroButtonsGrid,
  parameters: {},
  tags: ["autodocs"],
  argTypes: {},
};

export const Default = {
  args: {
    className: "",
    items: generateItems(),
  },
};
