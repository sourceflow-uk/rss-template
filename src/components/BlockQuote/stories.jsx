import { BlockQuote } from "./component";

const items = [
  {
    quote:
      "“Lorem ipsum dolor sit amet consectetur. Scelerisque ornare euismod tortor commodo quis amet fermentum nulla. Ornare donec curabitur urna leo. Pharetra nunc et duis nec donec morbi id. Tellus netus lorem quis parturient nisi. Sit facilisi tempor a sed. Velit quis”",
    author: {
      name: "Name Surname",
      position: "Position",
    },
  },
  {
    quote:
      "“Lorem ipsum dolor sit amet consectetur. Scelerisque ornare euismod tortor commodo quis amet fermentum nulla. Ornare donec curabitur urna leo. Pharetra nunc et duis nec donec morbi id. Tellus netus lorem quis parturient nisi. Sit facilisi tempor a sed. Velit quis”",
    author: {
      name: "Name Surname",
      position: "Position",
    },
  },
  {
    quote:
      "“Lorem ipsum dolor sit amet consectetur. Scelerisque ornare euismod tortor commodo quis amet fermentum nulla. Ornare donec curabitur urna leo. Pharetra nunc et duis nec donec morbi id. Tellus netus lorem quis parturient nisi. Sit facilisi tempor a sed. Velit quis”",
    author: {
      name: "Name Surname",
      position: "Position",
    },
  },
  {
    quote:
      "“Lorem ipsum dolor sit amet consectetur. Scelerisque ornare euismod tortor commodo quis amet fermentum nulla. Ornare donec curabitur urna leo. Pharetra nunc et duis nec donec morbi id. Tellus netus lorem quis parturient nisi. Sit facilisi tempor a sed. Velit quis”",
    author: {
      name: "Name Surname",
      position: "Position",
    },
  },
  {
    quote:
      "“Lorem ipsum dolor sit amet consectetur. Scelerisque ornare euismod tortor commodo quis amet fermentum nulla. Ornare donec curabitur urna leo. Pharetra nunc et duis nec donec morbi id. Tellus netus lorem quis parturient nisi. Sit facilisi tempor a sed. Velit quis”",
    author: {
      name: "Name Surname",
      position: "Position",
    },
  },
  {
    quote:
      "“Lorem ipsum dolor sit amet consectetur. Scelerisque ornare euismod tortor commodo quis amet fermentum nulla. Ornare donec curabitur urna leo. Pharetra nunc et duis nec donec morbi id. Tellus netus lorem quis parturient nisi. Sit facilisi tempor a sed. Velit quis”",
    author: {
      name: "Name Surname",
      position: "Position",
    },
  },
];

export default {
  title: "Components/BlockQuote",
  component: BlockQuote,
  parameters: {},
  tags: ["autodocs"],
  argTypes: {},
};

export const Carousel = {
  args: {
    title: "Block quote title",
    items,
    carousel: true,
    visibleCount: 1,
  },
};

export const Static = {
  args: {
    title: "Block quote title",
    items: items.slice(0, 1),
    carousel: false,
    visibleCount: 1,
  },
};

export const CarouselThreeCards = {
  args: {
    title: "Block quote title",
    items,
    carousel: true,
    visibleCount: 3,
  },
};

export const StaticThreeCards = {
  args: {
    title: "Block quote title",
    items: items.slice(0, 3),
    carousel: false,
    visibleCount: 3,
  },
};
