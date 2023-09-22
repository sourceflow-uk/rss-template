import { MultiTiles } from "./index";
import { generateArrayOf } from "@/faker/generateArrayOf";
import { generateMultiTileCard } from "@/faker/generateMultiTileCard";

export default {
  title: "Components/MultiTiles",
  component: MultiTiles,
  parameters: {},
  tags: ["autodocs"],
  argTypes: {},
};

export const Default = {
  args: {
    items: generateArrayOf(generateMultiTileCard, { count: 12 }),
  },
};
