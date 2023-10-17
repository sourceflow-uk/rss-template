import { fakerEN_GB as faker } from "@faker-js/faker";

export const generateDescription = (paragraphCount = { min: 2, max: 4 }) => faker.lorem.paragraphs(paragraphCount);
