import { LatestJobs } from "./index";
import { generateArrayOf } from "@/faker/generateArrayOf";
import { generateJobCard } from "@/faker/generateJobCard";

export default {
  title: "Components/LatestJobs",
  component: LatestJobs,
  parameters: {},
  tags: [],
  argTypes: {},
};

export const Default = {
  args: {
    items: generateArrayOf(generateJobCard, { count: 10 }),
  },
};

export const FourJobs = {
  args: {
    items: generateArrayOf(generateJobCard, { count: 10 }),
    visibleCount: 4,
  },
};
