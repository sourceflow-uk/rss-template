import { HeroCarousel } from "./component";
import { fakerEN_GB as faker } from "@faker-js/faker";

const generateItems = ({ description = false, video = false } = {}) =>
  faker.helpers.multiple(
    () => ({
      title: faker.lorem.words({ min: 1, max: 3 }),
      img: faker.image.url({ width: 1440, height: 300 }),
      description: description ? faker.lorem.words({ min: 2, max: 10 }) : undefined,
      video: video ? "#" : undefined,
    }),
    { count: 6 }
  );

export default {
  title: "Components/HeroCarousel",
  component: HeroCarousel,
  parameters: {},
  tags: ["autodocs"],
  argTypes: {},
};

export const Default = {
  args: {
    className: "",
    items: generateItems({ description: true }),
  },
};

export const TitleOnly = {
  args: {
    className: "",
    items: generateItems(),
  },
};

export const NoControls = {
  args: {
    className: "",
    items: generateItems({ description: true }),
    controls: false,
  },
};

export const TitleOnlyNoControls = {
  args: {
    className: "",
    items: generateItems(),
    controls: false,
  },
};

export const Video = {
  args: {
    items: generateItems({ video: true }),
    controls: false,
  },
};
