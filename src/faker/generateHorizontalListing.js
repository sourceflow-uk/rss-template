import { generateTitle } from "@/faker/generateTitle";
import { generateDescription } from "@/faker/generateDescription";
import { generateImage } from "@/faker/generateImage";

export const generateHorizontalListing = () => ({
  title: generateTitle(),
  img: generateImage({ width: 64, height: 64 }),
  description: generateDescription(),
});
