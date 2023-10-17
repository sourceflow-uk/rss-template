import { fakerEN_GB as faker } from "@faker-js/faker";

export const generateTitle = (wordCount = { min: 2, max: 6 }) => faker.lorem.words(wordCount);
