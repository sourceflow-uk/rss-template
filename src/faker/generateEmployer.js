import { generateTitle } from "@/faker/generateTitle";
import { generateImage } from "@/faker/generateImage";

export const generateEmployer = () => ({
  title: generateTitle(),
  img: generateImage({ width: 120, height: 120 }),
  href: "#",
});
