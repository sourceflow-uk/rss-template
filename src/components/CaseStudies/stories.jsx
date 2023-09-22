import { CaseStudies } from "./index";
import { generateCaseStudy } from "@/faker/generateCaseStudy";
import { generateArrayOf } from "@/faker/generateArrayOf";

export default {
  title: "Components/CaseStudies",
  component: CaseStudies,
  parameters: {},
  tags: ["autodocs"],
  argTypes: {},
};

export const Default = {
  args: {
    items: generateArrayOf(generateCaseStudy, { count: 6 }),
  },
};
