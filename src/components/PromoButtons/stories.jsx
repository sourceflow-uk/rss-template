import { PromoButtons } from "./index";
import { generateArrayOf } from "@/faker/generateArrayOf";
import { generatePromoButton } from "@/faker/generatePromoButton";

export default {
  title: "Components/New/PromoButtons",
  component: PromoButtons,
  parameters: {},
  tags: [],
  argTypes: {},
};

export const Default = {
  args: {
    items: generateArrayOf(generatePromoButton, { count: 3 }),
  },
};
