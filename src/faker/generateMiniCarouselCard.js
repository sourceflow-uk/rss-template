import { fakerEN_GB as faker } from "@faker-js/faker";

export const generateMiniCarouselCard = () => ({
  title: faker.lorem.words({ min: 3, max: 6 }),
  description: faker.lorem.sentence(),
  img: faker.image.url({ width: 703, height: 352 }),
  cta: {
    label: faker.lorem.words({ min: 1, max: 2 }),
    href: "#",
  },
});
