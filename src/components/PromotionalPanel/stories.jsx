import PromotionalPanel from "./index";
import { generateArrayOf } from "@/faker/generateArrayOf";
import { generateTitle } from "@/faker/generateTitle";
import { generateDescription } from "@/faker/generateDescription";
import { generateCTA } from "@/faker/generateCTA";

export default {
  title: "Components/PromotionalPanel",
  component: PromotionalPanel,
  parameters: {},
  tags: [],
  argTypes: {},
};

export const Default = {
  args: {
    items: generateArrayOf(
      () => ({
        title: generateTitle(),
        description: generateDescription(),
        cta: generateCTA(),
      }),
      { count: 2 }
    ),
  },
};
