import { fakerEN_GB as faker } from "@faker-js/faker";
import { generateTitle } from "@/faker/generateTitle";

export const generateMultiTileCard = () => ({
  title: generateTitle(),
  img: faker.image.urlPicsumPhotos({ width: 200, height: 200 }),
  href: "#",
});
