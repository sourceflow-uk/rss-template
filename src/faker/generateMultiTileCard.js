import { generateTitle } from "@/faker/generateTitle";
import { generateImage } from "@/faker/generateImage";

export const generateMultiTileCard = () => ({
  title: generateTitle(),
  img: generateImage({ width: 200, height: 200 }),
  href: "#",
});
