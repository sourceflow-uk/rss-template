import { SocialVideo } from "./index";
import { generateSocialVideo } from "@/faker/generateSocialVideo";

export default {
  title: "Components/SocialVideo",
  component: SocialVideo,
  parameters: {},
  tags: [],
  argTypes: {},
};

export const Default = {
  args: generateSocialVideo(),
};
