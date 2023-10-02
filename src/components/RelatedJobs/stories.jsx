import { RelatedJobs } from "./index";
import { generateArrayOf } from "@/faker/generateArrayOf";
import { generateJob } from "@/faker/generateJob";

export default {
  title: "Components/RelatedJobs",
  component: RelatedJobs,
  parameters: {},
  tags: [],
  argTypes: {},
};

export const Default = {
  args: {
    items: generateArrayOf(generateJob, { count: 4 }),
  },
};

export const Column = {
  args: {
    items: generateArrayOf(generateJob, { count: 4 }),
    direction: "column",
  },
};
