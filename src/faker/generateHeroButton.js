import { fakerEN_GB as faker } from "@faker-js/faker";

export const generateHeroButton = () => ({
  title: faker.lorem.words({ min: 1, max: 3 }),
  img: faker.image.urlPicsumPhotos({ width: 160, height: 160 }),
  href: "#",
});
