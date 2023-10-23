import { fakerEN_GB as faker } from "@faker-js/faker";
import { generateArrayOf } from "@/faker/generateArrayOf";
import { generateTag } from "@/faker/generateTag";
import { generateTitle } from "@/faker/generateTitle";
import { generateBody } from "@/faker/generateBody";
import { generateImage } from "@/faker/generateImage";

export const generateJob = () => ({
  title: generateTitle(),
  sectors: generateArrayOf(generateTag, { count: { min: 1, max: 3 } }),
  location: faker.location.city(),
  img: generateImage({ width: 102, height: 40 }),
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
  job_type: "Permanent",
  description: generateBody(),
  published_at: faker.date.past().toISOString(),
  href: "#",
  external_reference: faker.database.mongodbObjectId(),
});
