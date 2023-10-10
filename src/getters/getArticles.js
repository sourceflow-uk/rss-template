import { generateArrayOf } from "@/faker/generateArrayOf";
import { generateArticle } from "@/faker/generateArticle";

export const getArticles = () => generateArrayOf(generateArticle, { count: 20 });
