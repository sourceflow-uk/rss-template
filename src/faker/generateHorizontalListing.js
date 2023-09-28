import { fakerEN_GB as faker } from "@faker-js/faker";
import { generateTitle } from "@/faker/generateTitle";
import { generateDescription } from "@/faker/generateDescription";

export const generateHorizontalListing = () => ({
  title: generateTitle(),
  img: faker.image.urlPicsumPhotos({ width: 64, height: 64 }),
  description: generateDescription(),
});
