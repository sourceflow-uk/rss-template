import { fakerEN_GB as faker } from "@faker-js/faker";

export const generateOfficeLocatorLocations = () => ({
  id: faker.string.uuid(),
  title: faker.location.city(),
  lat: faker.location.latitude(),
  lng: faker.location.longitude(),
});
