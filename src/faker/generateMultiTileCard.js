import { fakerEN_GB as faker } from "@faker-js/faker";

export const generateMultiTileCard = () => ({
  title: faker.lorem.words({ min: 1, max: 3 }),
  img: faker.image.url({ width: 200, height: 200 }),
  href: "#",
});
