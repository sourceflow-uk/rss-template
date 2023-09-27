import { fakerEN_GB as faker } from "@faker-js/faker";

export const generatePromoButton = () => ({
  title: faker.lorem.words({ min: 1, max: 3 }),
  img: faker.image.urlPicsumPhotos({ width: 332, height: 332 }),
  href: "#",
});
