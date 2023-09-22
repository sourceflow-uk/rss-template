import { HeroButtonsGrid } from "./index";
import { generateArrayOf } from "@/faker/generateArrayOf";
import { generateHeroButton } from "@/faker/generateHeroButton";

export default {
  title: "Components/HeroButtonsGrid",
  component: HeroButtonsGrid,
  parameters: {},
  tags: [],
  argTypes: {},
};

export const Default = {
  args: {
    className: "",
    items: generateArrayOf(generateHeroButton, { count: 8 }),
  },
};
