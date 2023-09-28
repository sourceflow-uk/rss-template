import { generateCTA } from "@/faker/generateCTA";
import { generateTitle } from "@/faker/generateTitle";
import { generateDescription } from "@/faker/generateDescription";

export const generatePromotionalPanelCard = () => ({
  title: generateTitle(),
  description: generateDescription(),
  cta: generateCTA(),
});
