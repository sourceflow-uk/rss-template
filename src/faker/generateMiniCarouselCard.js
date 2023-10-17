import { generateCTA } from "@/faker/generateCTA";
import { generateTitle } from "@/faker/generateTitle";
import { generateDescription } from "@/faker/generateDescription";
import { generateImage } from "@/faker/generateImage";

export const generateMiniCarouselCard = () => ({
  title: generateTitle(),
  description: generateDescription(),
  img: generateImage({ width: 703, height: 352 }),
  cta: generateCTA({ variant: "secondary" }),
});
