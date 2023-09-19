import { ButtonsGrid } from "./component";

export default {
  title: "Components/ButtonsGrid",
  component: ButtonsGrid,
  parameters: {},
  tags: ["autodocs"],
  argTypes: {},
};

export const Default = {
  args: {
    className: "",
    items: [
      { title: "Title", img: "https://picsum.photos/160?random=1", href: "#" },
      { title: "Title", img: "https://picsum.photos/160?random=2", href: "#" },
      { title: "Title", img: "https://picsum.photos/160?random=3", href: "#" },
      { title: "Title", img: "https://picsum.photos/160?random=4", href: "#" },
      { title: "Title", img: "https://picsum.photos/160?random=5", href: "#" },
      { title: "Title", img: "https://picsum.photos/160?random=6", href: "#" },
      { title: "Title", img: "https://picsum.photos/160?random=7", href: "#" },
      { title: "Title", img: "https://picsum.photos/160?random=8", href: "#" },
    ],
  },
};
