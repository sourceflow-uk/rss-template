import { fakerEN_GB as faker } from "@faker-js/faker";
import { generateDescription } from "@/faker/generateDescription";
import { generateImage } from "@/faker/generateImage";

export const generateRecruiterListingItem = () => ({
  name: faker.lorem.words({ min: 2, max: 3 }),
  title: faker.lorem.words({ min: 1, max: 2 }),
  email: faker.internet.email(),
  linkedIn: "https://www.linkedin.com",
  phone: faker.phone.number(),
  profile_pic: generateImage({ width: 167, height: 167 }),
  description: generateDescription(),
});
