import { fakerEN_GB as faker } from "@faker-js/faker";
import { generateTitle } from "@/faker/generateTitle";

export const generateKeyTabListing = () => ({
  title: generateTitle(),
  icon: faker.image.urlPicsumPhotos({ width: 25, height: 25 }),
  body: faker.helpers.multiple(() => `<p>${faker.lorem.paragraph()}</p>`, { count: { min: 3, max: 10 } }).join(""),
});
