import { Header } from "./component";
import { fakerEN_GB as faker } from "@faker-js/faker";

const generateItem = ({ description = false, video = false, cta = false } = {}) => ({
  title: faker.lorem.words({ min: 1, max: 3 }),
  img: faker.image.url({ width: 1440, height: 300 }),
  description: description ? faker.lorem.words({ min: 4, max: 10 }) : undefined,
  video: video ? "#" : undefined,
  cta: cta ? { label: faker.lorem.words({ min: 1, max: 2 }), href: "#" } : undefined,
});

export default {
  title: "Components/Header",
  component: Header,
  parameters: {},
  tags: ["autodocs"],
  argTypes: {},
};

export const Default = {
  args: generateItem({ description: true, cta: true }),
};

export const NoCTA = {
  args: generateItem({ description: true }),
};

export const TitleOnly = {
  args: generateItem(),
};

export const Video = {
  args: generateItem({ video: true }),
};
