import { OfficeLocations } from "./index";
import { generateArrayOf } from "@/faker/generateArrayOf";
import { generateOfficeLocationCard } from "@/faker/generateOfficeLocationCard";

export default {
  title: "Components/OfficeLocations",
  component: OfficeLocations,
  parameters: {},
  tags: ["autodocs"],
  argTypes: {},
};

export const Default = {
  args: {
    items: generateArrayOf(generateOfficeLocationCard, { count: 4 }),
  },
};
