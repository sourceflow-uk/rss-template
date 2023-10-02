import { RelatedArticles } from "./index";
import { generateArrayOf } from "@/faker/generateArrayOf";
import { generateArticle } from "@/faker/generateArticle";

export default {
  title: "New/Components/RelatedArticles",
  component: RelatedArticles,
  parameters: {},
  tags: [],
  argTypes: {},
};

export const Default = {
  args: {
    items: generateArrayOf(generateArticle, { count: 4 }),
  },
};
