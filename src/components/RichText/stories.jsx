import RichText from "./index";
import { generateBody } from "@/faker/generateBody";

export default {
  title: "Components/RichText",
  component: RichText,
  parameters: {},
  tags: [],
  argTypes: {},
};

export const Default = {
  args: {
    body: generateBody(),
  },
};
