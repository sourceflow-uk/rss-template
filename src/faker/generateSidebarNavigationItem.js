import { fakerEN_GB as faker } from "@faker-js/faker";

export const generateSidebarNavigationItem = () => ({
  label: faker.lorem.words({ min: 1, max: 3 }),
  href: "#",
});
