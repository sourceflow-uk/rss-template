import LatestBlogs from "./index";
import { generateArrayOf } from "@/faker/generateArrayOf";
import { generateArticle } from "@/faker/generateArticle";

export default {
  title: "Components/LatestBlogs",
  component: LatestBlogs,
  parameters: {},
  tags: [],
  argTypes: {},
};

export const Default = {
  args: {
    items: generateArrayOf(generateArticle, { count: 3 }),
  },
};
