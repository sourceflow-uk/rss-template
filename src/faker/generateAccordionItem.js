import { fakerEN_GB as faker } from "@faker-js/faker";

export const generateAccordionItem = () => ({
  title: faker.lorem.words({ min: 4, max: 10 }),
  body: faker.helpers.multiple(() => `<p>${faker.lorem.paragraph()}</p>`, { count: { min: 3, max: 10 } }).join(""),
});
