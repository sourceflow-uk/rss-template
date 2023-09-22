import { fakerEN_GB as faker } from "@faker-js/faker";
import { generateCTA } from "@/faker/generateCTA";

export const generatePromotionalPanelCard = () => ({
  className: faker.helpers.arrayElement(["", "bg-light", "bg-white"]),
  title: faker.lorem.words({ min: 1, max: 3 }),
  description: faker.lorem.paragraphs({ min: 1, max: 2 }),
  cta: generateCTA(),
});
