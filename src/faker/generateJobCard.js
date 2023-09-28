import { fakerEN_GB as faker } from "@faker-js/faker";
import { generateArrayOf } from "@/faker/generateArrayOf";
import { generateTag } from "@/faker/generateTag";
import { generateTitle } from "@/faker/generateTitle";

export const generateJobCard = () => ({
  title: generateTitle(),
  sectors: generateArrayOf(generateTag, { count: { min: 1, max: 3 } }),
  location: faker.location.city(),
  salary_package: faker.finance.amount({ symbol: "£", min: 12000, max: 100000, dec: 0 }),
  role_type: "Permanent",
  published_at: faker.date.past(),
  href: "#",
});
