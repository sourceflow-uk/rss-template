import { fakerEN_GB as faker } from "@faker-js/faker";
import { generateDescription } from "@/faker/generateDescription";

export const generateTeamBio = () => ({
  name: faker.lorem.words({ min: 2, max: 3 }),
  role: faker.person.jobTitle(),
  email: faker.internet.email(),
  linkedIn: "https://www.linkedin.com",
  qualification: faker.lorem.words({ min: 2, max: 3 }),
  photo: faker.image.urlPicsumPhotos({ width: 291, height: 291 }),
  description: generateDescription(),
});
