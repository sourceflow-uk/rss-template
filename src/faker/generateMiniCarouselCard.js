import { fakerEN_GB as faker } from "@faker-js/faker";
import { generateCTA } from "@/faker/generateCTA";

export const generateMiniCarouselCard = () => ({
  title: faker.lorem.words({ min: 3, max: 6 }),
  description: faker.lorem.sentence(),
  img: faker.image.url({ width: 703, height: 352 }),
  cta: generateCTA(),
});
