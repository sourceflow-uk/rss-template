import PromoSection from "./index";
import { generateArrayOf } from "@/faker/generateArrayOf";
import { generatePromoItem } from "@/faker/generatePromoItem";

export default {
  title: "Components/PromoSection",
  component: PromoSection,
  parameters: {},
  tags: [],
  argTypes: {},
};

export const Default = {
  args: {
    items: generateArrayOf(generatePromoItem, { count: 3 }),
  },
};

export const FourCards = {
  args: {
    items: generateArrayOf(generatePromoItem, { count: 4 }),
  },
};
