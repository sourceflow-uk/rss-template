import { LogoCarousel } from "./component";
import { fakerEN_GB as faker } from "@faker-js/faker";

const generateItems = () =>
  faker.helpers.multiple(
    () => ({
      name: faker.lorem.words({ min: 3, max: 6 }),
      logo: faker.image.url({ width: 120, height: 120 }),
      href: "#",
    }),
    { count: 15 }
  );

export default {
  title: "Components/LogoCarousel",
  component: LogoCarousel,
  parameters: {},
  tags: ["autodocs"],
  argTypes: {},
};

export const Default = {
  args: {
    items: generateItems(),
  },
};
