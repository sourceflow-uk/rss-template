import { HeroButtonsGrid } from "./index";
import { generateArrayOf } from "@/faker/generateArrayOf";
import { generateHeroButton } from "@/faker/generateHeroButton";
import { generateTitle } from "@/faker/generateTitle";

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
    title: generateTitle(),
    items: generateArrayOf(generateHeroButton, { count: 8 }),
  },
};
