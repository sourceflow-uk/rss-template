import { fakerEN_GB as faker } from "@faker-js/faker";
import { generateCTA } from "@/faker/generateCTA";
import { generateTitle } from "@/faker/generateTitle";
import { generateDescription } from "@/faker/generateDescription";

export const generatePromotionalCarouselItem = ({ video = false } = {}) => ({
  title: generateTitle(),
  img: faker.image.urlPicsumPhotos({ width: 540, height: 291 }),
  description: generateDescription(),
  cta: generateCTA(),
  video_embed_url: video
    ? "https://www.youtube-nocookie.com/embed/gIL2wQUBjdA?si=Cfpp7oDgxQ-vFZbq&amp;controls=0"
    : undefined,
});
