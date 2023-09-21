import { Accordion } from "./component";
import { fakerEN_GB as faker } from "@faker-js/faker";

const generateItems = () =>
  faker.helpers.multiple(
    () => ({
      title: faker.lorem.words({ min: 4, max: 10 }),
      body: faker.helpers.multiple(() => `<p>${faker.lorem.paragraph()}</p>`, { count: { min: 3, max: 10 } }).join(""),
    }),
    { count: 4 }
  );

export default {
  title: "Components/Accordion",
  component: Accordion,
  parameters: {},
  tags: ["autodocs"],
  argTypes: {},
};

export const Default = {
  args: {
    className: "",
    items: generateItems(),
    defaultActiveKey: 0,
  },
};
