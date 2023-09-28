import { fakerEN_GB as faker } from "@faker-js/faker";
import { generateTitle } from "@/faker/generateTitle";
import { generateDescription } from "@/faker/generateDescription";

export const generateCaseStudy = () => ({
  title: generateTitle(),
  img: faker.image.urlPicsumPhotos({ width: 300, height: 300 }),
  description: generateDescription(),
  href: "#",
});
