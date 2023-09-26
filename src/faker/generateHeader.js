import { fakerEN_GB as faker } from "@faker-js/faker";
import { generateCTA } from "@/faker/generateCTA";

export const generateHeader = ({ description = false, video = false, cta = false } = {}) => ({
  title: faker.lorem.words({ min: 1, max: 3 }),
  img: faker.image.urlPicsumPhotos({ width: 1440, height: 300 }),
  description: description ? faker.lorem.words({ min: 4, max: 10 }) : undefined,
  video_embed_url: video
    ? "https://www.youtube-nocookie.com/embed/gIL2wQUBjdA?si=Cfpp7oDgxQ-vFZbq&amp;controls=0"
    : undefined,
  cta: cta ? generateCTA() : undefined,
});
