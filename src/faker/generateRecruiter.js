import { fakerEN_GB as faker } from "@faker-js/faker";
import { generateArrayOf } from "@/faker/generateArrayOf";
import { generateTag } from "@/faker/generateTag";

export const generateRecruiter = () => ({
  name: faker.lorem.words({ min: 2, max: 3 }),
  title: faker.lorem.words({ min: 1, max: 2 }),
  location: faker.location.city(),
  email: faker.internet.email(),
  linkedIn: "https://www.linkedin.com",
  phone: faker.phone.number(),
  profile_pic: faker.image.url({ width: 167, height: 167 }),
  description: faker.lorem.paragraph({ min: 3, max: 6 }),
  sectors: generateArrayOf(generateTag, { count: { min: 1, max: 3 } }),
});
