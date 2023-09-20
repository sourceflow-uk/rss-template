import { LatestBlogs } from "./component";

export default {
  title: "Components/LatestBlogs",
  component: LatestBlogs,
  parameters: {},
  tags: ["autodocs"],
  argTypes: {},
};

export const Default = {
  args: {
    title: "Latest Blogs",
    items: [
      {
        title: "Article Title",
        description:
          "An excerpt of the article. Lorem ipsum dolor sit amet consectetur. Pellentesque integer scelerisque amet mauris dolor aliquam lobortis. Nisi magna.",
        img: "https://picsum.photos/373/220?random=1",
        tags: ["Tag 1", "Tag 2"],
        published_at: new Date(),
      },
      {
        title: "Article Title",
        description:
          "An excerpt of the article. Lorem ipsum dolor sit amet consectetur. Pellentesque integer scelerisque amet mauris dolor aliquam lobortis. Nisi magna.",
        img: "https://picsum.photos/373/220?random=2",
        tags: ["Tag 1", "Tag 2"],
        published_at: new Date(),
      },
      {
        title: "Article Title",
        description:
          "An excerpt of the article. Lorem ipsum dolor sit amet consectetur. Pellentesque integer scelerisque amet mauris dolor aliquam lobortis. Nisi magna.",
        img: "https://picsum.photos/373/220?random=3",
        tags: ["Tag 1", "Tag 2"],
        published_at: new Date(),
      },
    ],
    button: {
      label: "View more blogs",
      href: "#",
    },
  },
};
