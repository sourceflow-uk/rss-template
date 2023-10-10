import BranchLocations from "./index";
import { generateArrayOf } from "@/faker/generateArrayOf";
import { generateBranch } from "@/faker/generateBranch";

export default {
  title: "Components/BranchLocations",
  component: BranchLocations,
  parameters: {},
  tags: [],
  argTypes: {},
};

export const Default = {
  args: {
    items: generateArrayOf(generateBranch, { count: 4 }),
  },
};
