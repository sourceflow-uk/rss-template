import { fakerEN_GB as faker } from "@faker-js/faker";
import { generateTitle } from "@/faker/generateTitle";

export const generatePromoButton = () => ({
  title: generateTitle(),
  img: faker.image.urlPicsumPhotos({ width: 332, height: 332 }),
  href: "#",
});
