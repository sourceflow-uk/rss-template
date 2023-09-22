import { fakerEN_GB as faker } from "@faker-js/faker";

export const generateBlockQuoteCard = () => ({
  quote: `“${faker.lorem.paragraphs({ min: 2, max: 4 })}”`,
  author: {
    name: faker.person.fullName(),
    position: faker.person.jobTitle(),
  },
});
