import { generateCTA } from "@/faker/generateCTA";
import { generateTitle } from "@/faker/generateTitle";
import { generateDescription } from "@/faker/generateDescription";
import { generateImage } from "@/faker/generateImage";

export const generateHeader = ({ description = false, video = false, cta = false } = {}) => ({
  title: generateTitle(),
  img: generateImage({ width: 1440, height: 300 }),
  description: description ? generateDescription() : null,
  video_embed_url: video ? "https://www.youtube-nocookie.com/embed/gIL2wQUBjdA?si=Cfpp7oDgxQ-vFZbq&controls=0" : null,
  cta: cta ? generateCTA() : null,
});
