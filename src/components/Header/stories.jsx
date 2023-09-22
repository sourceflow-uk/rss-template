import { Header } from "./index";
import { generateHeader } from "@/faker/generateHeader";

export default {
  title: "Components/Header",
  component: Header,
  parameters: {},
  tags: [],
  argTypes: {},
};

export const Default = {
  args: generateHeader({ description: true, cta: true }),
};

export const NoCTA = {
  args: generateHeader({ description: true }),
};

export const TitleOnly = {
  args: generateHeader(),
};

export const Video = {
  args: generateHeader({ video: true }),
};
