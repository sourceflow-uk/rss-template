import BrandPositioning from "./index";
import { generateTitle } from "@/faker/generateTitle";
import { generateDescription } from "@/faker/generateDescription";

export default {
  title: "New/Components/BrandPositioning",
  component: BrandPositioning,
  parameters: {},
  tags: [],
  argTypes: {},
};

export const Default = {
  args: {
    title: generateTitle(),
    description: generateDescription(),
  },
};
