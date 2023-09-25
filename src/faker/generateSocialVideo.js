import { fakerEN_GB as faker } from "@faker-js/faker";
import { generateCTA } from "@/faker/generateCTA";

export const generateSocialVideo = () => ({
  embed_url: "https://www.youtube-nocookie.com/embed/gIL2wQUBjdA?si=Cfpp7oDgxQ-vFZbq&amp;controls=0",
  img: faker.image.url({ width: 1440, height: 300 }),
});
