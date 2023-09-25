import { TeamBio } from "./index";
import { generateTeamBio } from "@/faker/generateTeamBio";

export default {
  title: "Components/TeamBio",
  component: TeamBio,
  parameters: {},
  tags: [],
  argTypes: {},
};

export const Default = {
  args: {
    ...generateTeamBio(),
  },
};

export const Reverse = {
  args: {
    reverse: true,
    ...generateTeamBio(),
  },
};
