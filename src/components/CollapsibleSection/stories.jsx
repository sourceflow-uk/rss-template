import { CollapsibleSection } from "./index";
import { generateArrayOf } from "@/faker/generateArrayOf";
import { generateCollapsibleSectionItem } from "@/faker/generateCollapsibleSectionItem";
import { generateTitle } from "@/faker/generateTitle";
import { generateDescription } from "@/faker/generateDescription";

export default {
  title: "Components/New/CollapsibleSection",
  component: CollapsibleSection,
  parameters: {},
  tags: [],
  argTypes: {},
};

export const Default = {
  args: {
    title: generateTitle(),
    description: generateDescription(),
    items: generateArrayOf(generateCollapsibleSectionItem, { count: 3 }),
  },
};