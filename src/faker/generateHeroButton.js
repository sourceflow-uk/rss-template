import { fakerEN_GB as faker } from "@faker-js/faker";
import { generateTitle } from "@/faker/generateTitle";

export const generateHeroButton = () => ({
  title: generateTitle(),
  img: faker.image.urlPicsumPhotos({ width: 160, height: 160 }),
  href: "#",
});
