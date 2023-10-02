import { CollapsibleSection } from "./index";
import { generateArrayOf } from "@/faker/generateArrayOf";
import { generateTitle } from "@/faker/generateTitle";
import { generateDescription } from "@/faker/generateDescription";
import { generateBody } from "@/faker/generateBody";

export default {
  title: "New/Components/CollapsibleSection",
  component: CollapsibleSection,
  parameters: {},
  tags: [],
  argTypes: {},
};

export const Default = {
  args: {
    title: generateTitle(),
    description: generateDescription(),
    items: generateArrayOf(
      () => ({
        title: generateTitle(),
        body: generateBody(),
      }),
      { count: 3 }
    ),
  },
};
