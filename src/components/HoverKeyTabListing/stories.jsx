import { HoverKeyTabListing } from "./component";

export default {
  title: "Components/HoverKeyTabListing",
  component: HoverKeyTabListing,
  parameters: {},
  tags: ["autodocs"],
  argTypes: {},
};

export const Default = {
  args: {
    items: [
      {
        title: "Tab 1",
        icon: "https://picsum.photos/25/25?random=1",
        body: "<p>Tab 1 content</p>",
      },
      {
        title: "Tab 2",
        icon: "https://picsum.photos/25/25?random=2",
        body: "<p>Tab 2 content</p>",
      },
      {
        title: "Tab 3",
        icon: "https://picsum.photos/25/25?random=3",
        body: "<p>Tab 3 content</p>",
      },
      {
        title: "Tab 4",
        icon: "https://picsum.photos/25/25?random=4",
        body: "<p>Tab 4 content</p>",
      },
    ],
  },
};
