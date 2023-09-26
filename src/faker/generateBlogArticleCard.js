import { fakerEN_GB as faker } from "@faker-js/faker";
import { generateArrayOf } from "@/faker/generateArrayOf";
import { generateTag } from "@/faker/generateTag";

export const generateBlogArticleCard = () => ({
  title: faker.lorem.words({ min: 3, max: 6 }),
  description: faker.lorem.paragraph(),
  img: faker.image.urlPicsumPhotos({ width: 373, height: 220 }),
  tags: generateArrayOf(generateTag, { count: 2 }),
  published_at: faker.date.past(),
});
