import { fakerEN_GB as faker } from "@faker-js/faker";

export const generateSectionHeading = () => ({
  title: faker.lorem.words({ min: 2, max: 3 }),
});
