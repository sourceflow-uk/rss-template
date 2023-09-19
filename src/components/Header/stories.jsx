import { Header } from "./component";

export default {
  title: "Components/Header",
  component: Header,
  parameters: {},
  tags: ["autodocs"],
  argTypes: {},
};

export const Default = {
  args: {
    title: "Header Title",
    img: "https://picsum.photos/1440/300?random=1",
    description:
      "Summary. Lorem ipsum dolor sit amet consectetur. Massa aliquet sed lorem ornare neque turpis aliquam dolor. Dui nisl sed mauris id morbi gravida. Risus sed hendrerit libero.",
    cta: {
      label: "CTA",
      href: "#",
    },
  },
};

export const NoCTA = {
  args: {
    title: "Header Title",
    img: "https://picsum.photos/1440/300?random=1",
    description:
      "Summary. Lorem ipsum dolor sit amet consectetur. Massa aliquet sed lorem ornare neque turpis aliquam dolor. Dui nisl sed mauris id morbi gravida. Risus sed hendrerit libero.",
  },
};

export const TitleOnly = {
  args: {
    title: "Header Title",
    img: "https://picsum.photos/1440/300?random=1",
  },
};

export const Video = {
  args: {
    title: "Header Title",
    img: "https://picsum.photos/1440/300?random=1",
    video: "video_embed_url",
  },
};
