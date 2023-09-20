import { HorizontalListings } from "./component";

export default {
  title: "Components/HorizontalListings",
  component: HorizontalListings,
  parameters: {},
  tags: ["autodocs"],
  argTypes: {},
};

export const Default = {
  args: {
    title: "Title",
    items: [
      {
        title: "Listing item title",
        img: "https://picsum.photos/64/64?random=1",
        description:
          "Description. Lorem ipsum dolor sit amet consectetur. Pellentesque integer scelerisque amet mauris dolor aliquam.",
      },
      {
        title: "Listing item title",
        img: "https://picsum.photos/64/64?random=1",
        description:
          "Description. Lorem ipsum dolor sit amet consectetur. Pellentesque integer scelerisque amet mauris dolor aliquam.",
      },
      {
        title: "Listing item title",
        img: "https://picsum.photos/64/64?random=1",
        description:
          "Description. Lorem ipsum dolor sit amet consectetur. Pellentesque integer scelerisque amet mauris dolor aliquam.",
      },
    ],
  },
};
