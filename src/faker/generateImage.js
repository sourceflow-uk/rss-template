import { fakerEN_GB as faker } from "@faker-js/faker";

export const generateImage = (options) => faker.image.urlPicsumPhotos(options);
