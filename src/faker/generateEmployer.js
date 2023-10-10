import { fakerEN_GB as faker } from "@faker-js/faker";
import { generateTitle } from "@/faker/generateTitle";

export const generateEmployer = () => ({
  title: generateTitle(),
  img: faker.image.urlPicsumPhotos({ width: 120, height: 120 }),
  href: "#",
});
