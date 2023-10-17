import { fakerEN_GB as faker } from "@faker-js/faker";
import { generateArrayOf } from "@/faker/generateArrayOf";
import { generateTag } from "@/faker/generateTag";
import { generateDescription } from "@/faker/generateDescription";
import { generateImage } from "@/faker/generateImage";

export const generateRecruiter = () => ({
  name: faker.lorem.words({ min: 2, max: 3 }),
  title: faker.lorem.words({ min: 1, max: 2 }),
  location: faker.location.city(),
  email: faker.internet.email(),
  linkedIn: "https://www.linkedin.com",
  phone: faker.phone.number(),
  profile_pic: generateImage({ width: 167, height: 167 }),
  description: generateDescription(),
  sectors: generateArrayOf(generateTag, { count: { min: 1, max: 3 } }),
});
