import CollapsibleSectionItem from "./index";
import { generateTitle } from "@/faker/generateTitle";
import { generateBody } from "@/faker/generateBody";

export default {
  title: "UI/CollapsibleSectionItem",
  component: CollapsibleSectionItem,
  parameters: {},
  tags: [],
  argTypes: {},
};

export const Default = {
  args: {
    title: generateTitle(),
    body: generateBody(),
  },
};
