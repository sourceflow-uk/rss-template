import BlogArticleContent from "./index";
import { generateArrayOf } from "@/faker/generateArrayOf";
import { generateArticle } from "@/faker/generateArticle";

export default {
  title: "New/Components/BlogArticleContent",
  component: BlogArticleContent,
  parameters: {},
  tags: [],
  argTypes: {},
};

export const Default = {
  args: {
    ...generateArticle(),
    related: generateArrayOf(generateArticle, { count: 3 }),
  },
};
