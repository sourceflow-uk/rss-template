import { fakerEN_GB as faker } from "@faker-js/faker";

export const generateCTA = () => ({
  label: faker.lorem.words({ min: 1, max: 2 }),
  href: "#",
  variant: "dark",
});
