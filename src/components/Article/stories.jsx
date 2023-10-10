import Article from "./index";
import { generateArrayOf } from "@/faker/generateArrayOf";
import { generateArticle } from "@/faker/generateArticle";

export default {
  title: "New/Components/Article",
  component: Article,
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
