import { fakerEN_GB as faker } from "@faker-js/faker";

export const generateTag = () => ({
  label: faker.lorem.words({ min: 1, max: 2 }),
  href: "#",
});
