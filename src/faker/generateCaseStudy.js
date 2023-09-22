import { fakerEN_GB as faker } from "@faker-js/faker";

export const generateCaseStudy = () => ({
  title: faker.lorem.words({ min: 1, max: 3 }),
  img: faker.image.url({ width: 300, height: 300 }),
  description: faker.lorem.words({ min: 2, max: 10 }),
  href: "#",
});
