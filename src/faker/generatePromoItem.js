import { fakerEN_GB as faker } from "@faker-js/faker";
import { generateArrayOf } from "@/faker/generateArrayOf";
import { generateTag } from "@/faker/generateTag";

export const generatePromoItem = () => ({
  title: faker.lorem.words({ min: 3, max: 6 }),
  description: faker.lorem.paragraph(),
  img: faker.image.url({ width: 380, height: 220 }),
});
