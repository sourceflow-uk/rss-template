import { NarrativePanel } from "./component";
import { fakerEN_GB as faker } from "@faker-js/faker";

const generateItem = ({ video = false, reverse = false } = {}) => ({
  title: faker.lorem.words({ min: 1, max: 3 }),
  img: faker.image.url({ width: 540, height: 291 }),
  description: faker.lorem.paragraphs({ min: 1, max: 3 }),
  video: video ? "#" : undefined,
  cta: { label: faker.lorem.words({ min: 1, max: 2 }), href: "#" },
  reverse,
});

export default {
  title: "Components/NarrativePanel",
  component: NarrativePanel,
  parameters: {},
  tags: ["autodocs"],
  argTypes: {},
};

export const Default = {
  args: generateItem(),
};

export const Video = {
  args: generateItem({ video: true }),
};

export const Reverse = {
  args: generateItem({ reverse: true }),
};

export const VideoReverse = {
  args: generateItem({ video: true, reverse: true }),
};
