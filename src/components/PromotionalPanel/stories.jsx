import { PromotionalPanel } from "./index";
import { generateArrayOf } from "@/faker/generateArrayOf";
import { generatePromotionalPanelCard } from "@/faker/generatePromotionalPanelCard";

export default {
  title: "Components/PromotionalPanel",
  component: PromotionalPanel,
  parameters: {},
  tags: [],
  argTypes: {},
};

export const Default = {
  args: {
    items: generateArrayOf(generatePromotionalPanelCard, { count: 2 }),
  },
};
