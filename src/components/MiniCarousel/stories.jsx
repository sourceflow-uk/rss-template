import { MiniCarousel } from "./index";
import { generateArrayOf } from "@/faker/generateArrayOf";
import { generateMiniCarouselCard } from "@/faker/generateMiniCarouselCard";

export default {
  title: "Components/MiniCarousel",
  component: MiniCarousel,
  parameters: {},
  tags: ["autodocs"],
  argTypes: {},
};

export const Default = {
  args: {
    items: generateArrayOf(generateMiniCarouselCard, { count: 3 }),
  },
};
