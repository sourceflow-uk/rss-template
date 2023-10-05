import { fakerEN_GB as faker } from "@faker-js/faker";
import { generateCTA } from "@/faker/generateCTA";
import { generateTitle } from "@/faker/generateTitle";
import { generateDescription } from "@/faker/generateDescription";

export const generateMiniCarouselCard = () => ({
  title: generateTitle(),
  description: generateDescription(),
  img: faker.image.urlPicsumPhotos({ width: 703, height: 352 }),
  cta: generateCTA({ variant: "secondary" }),
});
