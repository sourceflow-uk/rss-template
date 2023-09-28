import { CollapsibleSectionItem } from "./index";
import { generateCollapsibleSectionItem } from "@/faker/generateCollapsibleSectionItem";

export default {
  title: "UI/CollapsibleSectionItem",
  component: CollapsibleSectionItem,
  parameters: {},
  tags: [],
  argTypes: {},
};

export const Default = {
  args: generateCollapsibleSectionItem(),
};
