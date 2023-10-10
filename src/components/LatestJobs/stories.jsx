import LatestJobs from "./index";
import { generateArrayOf } from "@/faker/generateArrayOf";
import { generateJob } from "@/faker/generateJob";

export default {
  title: "Components/LatestJobs",
  component: LatestJobs,
  parameters: {},
  tags: [],
  argTypes: {},
};

export const Default = {
  args: {
    items: generateArrayOf(generateJob, { count: 10 }),
  },
};

export const FourJobs = {
  args: {
    items: generateArrayOf(generateJob, { count: 10 }),
    visibleCount: 4,
  },
};
