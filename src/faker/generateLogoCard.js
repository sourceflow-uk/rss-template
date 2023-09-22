import { fakerEN_GB as faker } from "@faker-js/faker";

export const generateLogoCard = () => ({
  name: faker.lorem.words({ min: 3, max: 6 }),
  logo: faker.image.url({ width: 120, height: 120 }),
  href: "#",
});
