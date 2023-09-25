import { RichText } from "./index";
import { generateRichText } from "@/faker/generateRichText";

export default {
  title: "Components/RichText",
  component: RichText,
  parameters: {},
  tags: [],
  argTypes: {},
};

export const Default = {
  args: generateRichText(),
};
