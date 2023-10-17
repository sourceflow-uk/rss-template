import { fakerEN_GB as faker } from "@faker-js/faker";
import { generateImage } from "@/faker/generateImage";

export const generateLogoCard = () => ({
  name: faker.lorem.words({ min: 3, max: 6 }),
  logo: generateImage({ width: 120, height: 120 }),
  href: "#",
});
