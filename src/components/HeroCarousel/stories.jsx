import { HeroCarousel } from "./component";

export default {
  title: "Components/HeroCarousel",
  component: HeroCarousel,
  parameters: {},
  tags: ["autodocs"],
  argTypes: {},
};

export const Default = {
  args: {
    className: "",
    items: [
      {
        title: "Hero Title",
        img: "https://picsum.photos/1440/300?random=1",
        description: "Hero description",
      },
      {
        title: "Hero Title",
        img: "https://picsum.photos/1440/300?random=1",
        description: "Hero description",
      },
    ],
  },
};

export const TitleOnly = {
  args: {
    className: "",
    items: [
      {
        title: "Hero Title",
        img: "https://picsum.photos/1440/300?random=1",
      },
      {
        title: "Hero Title",
        img: "https://picsum.photos/1440/300?random=1",
      },
    ],
  },
};

export const NoControls = {
  args: {
    className: "",
    items: [
      {
        title: "Hero Title",
        img: "https://picsum.photos/1440/300?random=1",
        description: "Hero description",
      },
      {
        title: "Hero Title",
        img: "https://picsum.photos/1440/300?random=1",
        description: "Hero description",
      },
    ],
    controls: false,
  },
};

export const TitleOnlyNoControls = {
  args: {
    className: "",
    items: [
      {
        title: "Hero Title",
        img: "https://picsum.photos/1440/300?random=1",
      },
      {
        title: "Hero Title",
        img: "https://picsum.photos/1440/300?random=1",
      },
    ],
    controls: false,
  },
};

export const Video = {
  args: {
    items: [
      {
        img: "https://picsum.photos/1440/300?random=1",
        video: "video_embed_url",
      },
    ],
    controls: false,
  },
};
