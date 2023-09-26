import { HeroCarousel } from "./index";
import { generateArrayOf } from "@/faker/generateArrayOf";
import { generateHeroCarouselItem } from "@/faker/generateHeroCarouselItem";

export default {
  title: "Components/HeroCarousel",
  component: HeroCarousel,
  parameters: {},
  tags: [],
  argTypes: {},
};

export const Default = {
  args: {
    className: "",
    items: generateArrayOf(generateHeroCarouselItem, { count: 6 }, { description: true }),
  },
};

export const TitleOnly = {
  args: {
    className: "",
    items: generateArrayOf(generateHeroCarouselItem, { count: 6 }),
  },
};

export const NoControls = {
  args: {
    className: "",
    items: generateArrayOf(generateHeroCarouselItem, { count: 6 }, { description: true }),
    controls: false,
  },
};

export const TitleOnlyNoControls = {
  args: {
    className: "",
    items: generateArrayOf(generateHeroCarouselItem, { count: 6 }),
    controls: false,
  },
};

export const Video = {
  args: {
    items: generateArrayOf(generateHeroCarouselItem, { count: 6 }, { video: true }),
    controls: false,
  },
};
