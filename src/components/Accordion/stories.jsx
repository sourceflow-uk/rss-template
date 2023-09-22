import { Accordion } from "./index";
import { generateArrayOf } from "@/faker/generateArrayOf";
import { generateAccordionItem } from "@/faker/generateAccordionItem";

export default {
  title: "Components/Accordion",
  component: Accordion,
  parameters: {},
  tags: ["autodocs"],
  argTypes: {},
};

export const Default = {
  args: {
    className: "",
    items: generateArrayOf(generateAccordionItem, { count: 4 }),
    defaultActiveKey: 0,
  },
};
