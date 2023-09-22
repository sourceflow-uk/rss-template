import { fakerEN_GB as faker } from "@faker-js/faker";

export const generateHeader = ({ description = false, video = false, cta = false } = {}) => ({
  title: faker.lorem.words({ min: 1, max: 3 }),
  img: faker.image.url({ width: 1440, height: 300 }),
  description: description ? faker.lorem.words({ min: 4, max: 10 }) : undefined,
  video: video ? "#" : undefined,
  cta: cta ? { label: faker.lorem.words({ min: 1, max: 2 }), href: "#" } : undefined,
});
