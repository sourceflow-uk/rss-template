import { fakerEN_GB as faker } from "@faker-js/faker";

export const generateKeyTabListing = () => ({
  title: faker.lorem.words({ min: 1, max: 3 }),
  icon: faker.image.url({ width: 25, height: 25 }),
  body: faker.helpers.multiple(() => `<p>${faker.lorem.paragraph()}</p>`, { count: { min: 3, max: 10 } }).join(""),
});
