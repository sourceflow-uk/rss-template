import { fakerEN_GB as faker } from "@faker-js/faker";

export const generateArrayOf = (generator, options) => faker.helpers.multiple(() => generator(), options);
