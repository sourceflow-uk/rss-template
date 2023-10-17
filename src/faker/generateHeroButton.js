import { generateTitle } from "@/faker/generateTitle";
import { generateImage } from "@/faker/generateImage";

export const generateHeroButton = () => ({
  title: generateTitle(),
  img: generateImage({ width: 160, height: 160 }),
  href: "#",
});
