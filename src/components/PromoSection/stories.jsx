import { PromoSection } from "./index";
import { generateArrayOf } from "@/faker/generateArrayOf";
import { generatePromoCard } from "@/faker/generatePromoCard";

export default {
  title: "Components/PromoSection",
  component: PromoSection,
  parameters: {},
  tags: ["autodocs"],
  argTypes: {},
};

export const Default = {
  args: {
    items: generateArrayOf(generatePromoCard, { count: 3 }),
  },
};

export const FourCards = {
  args: {
    items: generateArrayOf(generatePromoCard, { count: 4 }),
  },
};
