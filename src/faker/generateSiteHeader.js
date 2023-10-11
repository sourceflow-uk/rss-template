import { fakerEN_GB as faker } from "@faker-js/faker";
import { generateImage } from "@/faker/generateImage";

export const generateSiteHeader = () => ({
  nav: faker.helpers.multiple(
    () => ({
      label: faker.lorem.words({ min: 1, max: 2 }),
      children: faker.helpers.multiple(
        () => ({
          label: faker.lorem.words({ min: 1, max: 3 }),
          href: "#",
        }),
        { count: { min: 5, max: 10 } }
      ),
    }),
    { count: { min: 3, max: 4 } }
  ),
  company_name: faker.company.name(),
  company_logo: generateImage({ width: 182, height: 40 }),
});
