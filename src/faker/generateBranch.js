import { fakerEN_GB as faker } from "@faker-js/faker";

export const generateBranch = () => ({
  id: faker.string.uuid(),
  title: faker.location.city(),
  address: `${faker.location.streetAddress()}<br/>${faker.location.city()}<br/>${faker.location.county()}<br/>${faker.location.zipCode()}`,
  phone: faker.phone.number(),
  email: faker.internet.email(),
  map_embed_url: `https://www.google.com/maps/embed?pb=!1m10!1m8!1m3!1d54527.025896626925!2d-1.9255620491565688!3d52.90008904698599!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2suk!4v1695374464581!5m2!1sen!2suk`,
  opening_hours: `Monday - Friday 8:00am - 5:30pm`,
  lat: faker.location.latitude(),
  lng: faker.location.longitude(),
});
