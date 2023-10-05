import { fakerEN_GB as faker } from "@faker-js/faker";
import { generateArrayOf } from "@/faker/generateArrayOf";
import { generateTag } from "@/faker/generateTag";
import { generateTitle } from "@/faker/generateTitle";

export const generateJob = () => ({
  title: generateTitle(),
  sectors: generateArrayOf(generateTag, { count: { min: 1, max: 3 } }),
  location: faker.location.city(),
  salary_package: `${faker.finance.amount({
    symbol: "£",
    min: 8,
    max: 12,
    dec: 0,
  })} - ${faker.finance.amount({
    symbol: "£",
    min: 13,
    max: 18,
    dec: 0,
  })} per hour`,
  role_type: "Permanent",
  published_at: faker.date.past().toISOString(),
  href: "#",
});
