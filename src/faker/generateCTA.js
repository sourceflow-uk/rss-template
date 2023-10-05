import { fakerEN_GB as faker } from "@faker-js/faker";

export const generateCTA = ({ variant } = {}) => ({
  label: faker.lorem.words({ min: 1, max: 2 }),
  href: "#",
  variant: variant ?? faker.helpers.arrayElement(["primary", "secondary", "tertiary", "quaternary"]),
});
