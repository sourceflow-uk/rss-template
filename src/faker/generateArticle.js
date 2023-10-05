import { fakerEN_GB as faker } from "@faker-js/faker";
import { generateArrayOf } from "@/faker/generateArrayOf";
import { generateTag } from "@/faker/generateTag";
import { generateTitle } from "@/faker/generateTitle";
import { generateDescription } from "@/faker/generateDescription";
import { generateBody } from "@/faker/generateBody";

export const generateArticle = () => ({
  title: generateTitle(),
  description: generateDescription(),
  img: faker.image.urlPicsumPhotos({ width: 373, height: 220 }),
  tags: generateArrayOf(generateTag, { count: 1 }),
  body: generateBody(),
  published_at: faker.date.past().toISOString(),
  href: "#",
});
