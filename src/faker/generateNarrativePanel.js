import { fakerEN_GB as faker } from "@faker-js/faker";
import { generateCTA } from "@/faker/generateCTA";

export const generateNarrativePanel = ({ video = false, reverse = false } = {}) => ({
  title: faker.lorem.words({ min: 1, max: 3 }),
  img: faker.image.url({ width: 540, height: 291 }),
  description: faker.lorem.paragraphs({ min: 1, max: 3 }),
  video_embed_url: video
    ? "https://www.youtube-nocookie.com/embed/gIL2wQUBjdA?si=Cfpp7oDgxQ-vFZbq&amp;controls=0"
    : undefined,
  cta: generateCTA(),
  reverse,
});
