import { SectionHeading } from "./index";
import { generateSectionHeading } from "@/faker/generateSectionHeading";

export default {
  title: "Components/SectionHeading",
  component: SectionHeading,
  parameters: {},
  tags: [],
  argTypes: {},
};

export const Default = {
  args: generateSectionHeading(),
};
