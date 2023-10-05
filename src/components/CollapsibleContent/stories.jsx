import { CollapsibleContent } from "./index";
import { generateTitle } from "@/faker/generateTitle";
import { generateBody } from "@/faker/generateBody";

export default {
  title: "New/Components/CollapsibleContent",
  component: CollapsibleContent,
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
