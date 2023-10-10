import SectionHeading from "./index";
import { generateTitle } from "@/faker/generateTitle";

export default {
  title: "Components/SectionHeading",
  component: SectionHeading,
  parameters: {},
  tags: [],
  argTypes: {},
};

export const Default = {
  args: {
    title: generateTitle(),
  },
};
