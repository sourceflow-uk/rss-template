import { SimilarJobs } from "./index";
import { generateArrayOf } from "@/faker/generateArrayOf";
import { generateJob } from "@/faker/generateJob";

export default {
  title: "New/Components/SimilarJobs",
  component: SimilarJobs,
  parameters: {},
  tags: [],
  argTypes: {},
};

export const Default = {
  args: {
    items: generateArrayOf(generateJob, { count: 4 }),
  },
};

export const FourJobs = {
  args: {
    items: generateArrayOf(generateJob, { count: 10 }),
    visibleCount: 4,
  },
};
