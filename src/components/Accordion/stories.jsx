import Accordion from "./index";
import { generateArrayOf } from "@/faker/generateArrayOf";
import { generateTitle } from "@/faker/generateTitle";
import { generateBody } from "@/faker/generateBody";

export default {
  title: "Components/Accordion",
  component: Accordion,
  parameters: {},
  tags: [],
  argTypes: {},
};

export const Default = {
  args: {
    className: "",
    items: generateArrayOf(
      () => ({
        title: generateTitle(),
        body: generateBody(),
        active: false,
      }),
      { count: 4 }
    ),
    defaultActiveKey: 0,
  },
};
