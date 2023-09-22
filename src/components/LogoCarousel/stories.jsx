import { LogoCarousel } from "./index";
import { generateArrayOf } from "@/faker/generateArrayOf";
import { generateLogoCard } from "@/faker/generateLogoCard";

export default {
  title: "Components/LogoCarousel",
  component: LogoCarousel,
  parameters: {},
  tags: ["autodocs"],
  argTypes: {},
};

export const Default = {
  args: {
    items: generateArrayOf(generateLogoCard, { count: 15 }),
  },
};
