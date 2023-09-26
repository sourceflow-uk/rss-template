import { fakerEN_GB as faker } from "@faker-js/faker";

export const generateArrayOf = (generator, options, generatorOptions = {}) =>
  faker.helpers.multiple(() => generator(generatorOptions), options);
