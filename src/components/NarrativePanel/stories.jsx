import { NarrativePanel } from "./index";
import { generateNarrativePanel } from "@/faker/generateNarrativePanel";

export default {
  title: "Components/NarrativePanel",
  component: NarrativePanel,
  parameters: {},
  tags: ["autodocs"],
  argTypes: {},
};

export const Default = {
  args: generateNarrativePanel(),
};

export const Video = {
  args: generateNarrativePanel({ video: true }),
};

export const Reverse = {
  args: generateNarrativePanel({ reverse: true }),
};

export const VideoReverse = {
  args: generateNarrativePanel({ video: true, reverse: true }),
};
