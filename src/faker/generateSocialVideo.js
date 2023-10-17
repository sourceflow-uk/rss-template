import { generateImage } from "@/faker/generateImage";

export const generateSocialVideo = () => ({
  video_embed_url: "https://www.youtube-nocookie.com/embed/gIL2wQUBjdA?si=Cfpp7oDgxQ-vFZbq&controls=0",
  img: generateImage({ width: 1440, height: 300 }),
});
