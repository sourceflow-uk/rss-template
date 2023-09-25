import { fakerEN_GB as faker } from "@faker-js/faker";

export const generateRichText = () => ({
  body: `<h2>Rich text</h2><p><strong>${faker.lorem.paragraph({
    min: 4,
    max: 8,
  })}</strong></p><p>${faker.lorem.paragraph({ min: 12, max: 16 })}</p><ul><li>${faker.lorem.words({
    min: 6,
    max: 12,
  })}</li><li>${faker.lorem.words({
    min: 6,
    max: 12,
  })}</li><li>${faker.lorem.words({
    min: 6,
    max: 12,
  })}</li><li>${faker.lorem.words({
    min: 6,
    max: 12,
  })}</li></ul>`,
});
