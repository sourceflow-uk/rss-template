import { generateTitle } from "@/faker/generateTitle";
import { generateImage } from "@/faker/generateImage";

export const generatePromoButton = () => ({
  title: generateTitle(),
  img: generateImage({ width: 332, height: 332 }),
  href: "#",
});
