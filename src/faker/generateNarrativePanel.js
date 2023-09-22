import { fakerEN_GB as faker } from "@faker-js/faker";

export const generateNarrativePanel = ({ video = false, reverse = false } = {}) => ({
  title: faker.lorem.words({ min: 1, max: 3 }),
  img: faker.image.url({ width: 540, height: 291 }),
  description: faker.lorem.paragraphs({ min: 1, max: 3 }),
  video: video ? "#" : undefined,
  cta: { label: faker.lorem.words({ min: 1, max: 2 }), href: "#" },
  reverse,
});
