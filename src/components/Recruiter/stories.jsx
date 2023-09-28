import { Recruiter } from "./index";
import { generateRecruiter } from "@/faker/generateRecruiter";

export default {
  title: "Components/New/Recruiter",
  component: Recruiter,
  parameters: {},
  tags: [],
  argTypes: {},
};

export const Default = {
  args: generateRecruiter(),
};
