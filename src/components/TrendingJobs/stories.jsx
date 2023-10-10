import TrendingJobs from "./index";
import { generateArrayOf } from "@/faker/generateArrayOf";
import { generateJob } from "@/faker/generateJob";

export default {
  title: "Components/TrendingJobs",
  component: TrendingJobs,
  parameters: {},
  tags: [],
  argTypes: {},
};

export const Default = {
  args: {
    items: generateArrayOf(generateJob, { count: 10 }),
  },
};
