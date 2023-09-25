import { fakerEN_GB as faker } from "@faker-js/faker";

export const generateRecruiterListingItem = () => ({
  name: faker.lorem.words({ min: 2, max: 3 }),
  title: faker.lorem.words({ min: 1, max: 2 }),
  email: faker.internet.email(),
  linkedIn: "https://www.linkedin.com",
  phone: faker.phone.number(),
  profile_pic: faker.image.url({ width: 167, height: 167 }),
  description: faker.lorem.paragraph({ min: 3, max: 6 }),
});
