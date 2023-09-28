import { fakerEN_GB as faker } from "@faker-js/faker";
import { generateTitle } from "@/faker/generateTitle";

export const generateKeyTabListing = () => ({
  title: generateTitle(),
  icon: faker.image.urlPicsumPhotos({ width: 25, height: 25 }),
  body: `<h4>${faker.lorem.words(3)} <strong>${faker.lorem.words(3)}</strong></h4><p>${faker.lorem.sentence({
    min: 6,
    max: 12,
  })}</p>`,
});
