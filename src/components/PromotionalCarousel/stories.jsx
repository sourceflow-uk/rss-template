import { PromotionalCarousel } from "./index";
import { generateArrayOf } from "@/faker/generateArrayOf";
import { generatePromotionalCarouselItem } from "@/faker/generatePromotionalCarouselItem";

export default {
  title: "Components/New/PromotionalCarousel",
  component: PromotionalCarousel,
  parameters: {},
  tags: [],
  argTypes: {},
};

export const Default = {
  args: {
    className: "",
    items: generateArrayOf(generatePromotionalCarouselItem, { count: 3 }),
  },
};

export const Video = {
  args: {
    className: "",
    items: generateArrayOf(generatePromotionalCarouselItem, { count: 3 }, { video: true }),
  },
};
