import { BlockQuote } from "./index";
import { generateArrayOf } from "@/faker/generateArrayOf";
import { generateBlockQuoteCard } from "@/faker/generateBlockQuoteCard";

export default {
  title: "Components/BlockQuote",
  component: BlockQuote,
  parameters: {},
  tags: ["autodocs"],
  argTypes: {},
};

export const Carousel = {
  args: {
    title: "Block quote title",
    items: generateArrayOf(generateBlockQuoteCard, { count: 3 }),
    carousel: true,
    visibleCount: 1,
  },
};

export const Static = {
  args: {
    title: "Block quote title",
    items: generateArrayOf(generateBlockQuoteCard, { count: 1 }),
    carousel: false,
    visibleCount: 1,
  },
};

export const CarouselThreeCards = {
  args: {
    title: "Block quote title",
    items: generateArrayOf(generateBlockQuoteCard, { count: 9 }),
    carousel: true,
    visibleCount: 3,
  },
};

export const StaticThreeCards = {
  args: {
    title: "Block quote title",
    items: generateArrayOf(generateBlockQuoteCard, { count: 3 }),
    carousel: false,
    visibleCount: 3,
  },
};
