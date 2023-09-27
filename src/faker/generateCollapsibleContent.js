import { fakerEN_GB as faker } from "@faker-js/faker";

export const generateCollapsibleContent = () => ({
  title: faker.lorem.words({
    min: 3,
    max: 6,
  }),
  body: `<p>${faker.lorem.paragraph({
    min: 4,
    max: 8,
  })}</p><p>${faker.lorem.paragraph({ min: 12, max: 16 })}</p><ul><li>${faker.lorem.words({
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
