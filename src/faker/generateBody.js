import { fakerEN_GB as faker } from "@faker-js/faker";

export const generateBody = ({ title = false } = {}) => {
  const body = `<p><strong>${faker.lorem.paragraph({
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
  })}</li></ul>`;

  if (title) {
    return `<h2>${faker.lorem.words({
      min: 2,
      max: 3,
    })}</h2>${body}`;
  }

  return body;
};
