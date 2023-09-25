import { RelatedJobs } from "./index";
import { generateArrayOf } from "@/faker/generateArrayOf";
import { generateRelatedJob } from "@/faker/generateRelatedJob";

export default {
  title: "Components/RelatedJobs",
  component: RelatedJobs,
  parameters: {},
  tags: [],
  argTypes: {},
};

export const Default = {
  args: {
    items: generateArrayOf(generateRelatedJob, { count: 4 }),
  },
};

export const Column = {
  args: {
    items: generateArrayOf(generateRelatedJob, { count: 4 }),
    direction: "column",
  },
};
