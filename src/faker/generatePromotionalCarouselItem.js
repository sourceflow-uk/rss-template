import { generateCTA } from "@/faker/generateCTA";
import { generateTitle } from "@/faker/generateTitle";
import { generateDescription } from "@/faker/generateDescription";
import { generateImage } from "@/faker/generateImage";

export const generatePromotionalCarouselItem = ({ video = false } = {}) => ({
  title: generateTitle(),
  img: generateImage({ width: 540, height: 291 }),
  description: generateDescription(),
  cta: generateCTA(),
  video_embed_url: video ? "https://www.youtube-nocookie.com/embed/gIL2wQUBjdA?si=Cfpp7oDgxQ-vFZbq&controls=0" : null,
});
