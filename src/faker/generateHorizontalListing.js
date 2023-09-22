import { fakerEN_GB as faker } from "@faker-js/faker";

export const generateHorizontalListing = () => ({
  title: faker.lorem.words({ min: 1, max: 3 }),
  img: faker.image.url({ width: 64, height: 64 }),
  description: faker.lorem.paragraph(),
});
