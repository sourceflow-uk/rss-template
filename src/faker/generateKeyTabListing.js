import { fakerEN_GB as faker } from "@faker-js/faker";
import { generateTitle } from "@/faker/generateTitle";

export const generateKeyTabListing = () => ({
  title: generateTitle(),
  icon: faker.image.urlPicsumPhotos({ width: 25, height: 25 }),
  body: `<h6>${faker.lorem.words(6)}</h6><p>${faker.lorem.words(6)}</p>`,
});
