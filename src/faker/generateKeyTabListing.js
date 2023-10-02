import { fakerEN_GB as faker } from "@faker-js/faker";
import { generateTitle } from "@/faker/generateTitle";
import { generateBody } from "@/faker/generateBody";

export const generateKeyTabListing = () => ({
  title: generateTitle(),
  icon: faker.image.urlPicsumPhotos({ width: 25, height: 25 }),
  body: generateBody(),
});
