import { fakerEN_GB as faker } from "@faker-js/faker";

export const generatePromoItem = () => ({
  title: faker.lorem.words({ min: 3, max: 6 }),
  img: faker.image.urlPicsumPhotos({ width: 380, height: 220 }),
  description: faker.lorem.paragraph(),
  href: "#",
});
