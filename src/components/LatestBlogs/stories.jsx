import { LatestBlogs } from "./index";
import { generateArrayOf } from "@/faker/generateArrayOf";
import { generateBlogArticleCard } from "@/faker/generateBlogArticleCard";

export default {
  title: "Components/LatestBlogs",
  component: LatestBlogs,
  parameters: {},
  tags: [],
  argTypes: {},
};

export const Default = {
  args: {
    items: generateArrayOf(generateBlogArticleCard, { count: 3 }),
  },
};
