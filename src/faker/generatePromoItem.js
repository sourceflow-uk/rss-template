import { fakerEN_GB as faker } from "@faker-js/faker";
import { generateTitle } from "@/faker/generateTitle";
import { generateDescription } from "@/faker/generateDescription";

export const generatePromoItem = () => ({
  title: generateTitle(),
  img: faker.image.urlPicsumPhotos({ width: 380, height: 220 }),
  description: generateDescription(),
  href: "#",
});
