import SiteFooter from "./index";
import { generateSiteFooter } from "@/faker/generateSiteFooter";

export default {
  title: "New/UI/SiteFooter",
  component: SiteFooter,
  parameters: {},
  tags: [],
  argTypes: {},
};

export const Default = {
  args: generateSiteFooter(),
};
