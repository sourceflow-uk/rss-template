import { fakerEN_GB as faker } from "@faker-js/faker";
import { generateTitle } from "@/faker/generateTitle";
import { generateDescription } from "@/faker/generateDescription";

export const generateFeaturedTabListItem = () => ({
  title: generateTitle(),
  icon: faker.image.urlPicsumPhotos({ width: 75, height: 75 }),
  img: faker.image.urlPicsumPhotos({ width: 420, height: 291 }),
  body: `<h2>${generateTitle()}</h2><p>${generateDescription()}</p>`,
});
