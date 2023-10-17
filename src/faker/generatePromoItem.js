import { generateTitle } from "@/faker/generateTitle";
import { generateDescription } from "@/faker/generateDescription";
import { generateImage } from "@/faker/generateImage";

export const generatePromoItem = () => ({
  title: generateTitle(),
  img: generateImage({ width: 380, height: 220 }),
  description: generateDescription(),
  href: "#",
});
