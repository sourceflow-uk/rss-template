import { fakerEN_GB as faker } from "@faker-js/faker";
import { generateCTA } from "@/faker/generateCTA";

export const generatePromotionalCarouselItem = ({ video = false } = {}) => ({
  title: faker.lorem.words({ min: 1, max: 3 }),
  img: faker.image.urlPicsumPhotos({ width: 540, height: 291 }),
  description: faker.lorem.paragraph({ min: 2, max: 10 }),
  cta: generateCTA(),
  video_embed_url: video
    ? "https://www.youtube-nocookie.com/embed/gIL2wQUBjdA?si=Cfpp7oDgxQ-vFZbq&amp;controls=0"
    : undefined,
});
