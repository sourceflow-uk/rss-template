import { MiniCarouselCard } from "./index";
import { Container } from "react-bootstrap";
import { generateMiniCarouselCard } from "@/faker/generateMiniCarouselCard";

export default {
  title: "UI/MiniCarouselCard",
  component: (props) => (
    <Container>
      <MiniCarouselCard {...props} />
    </Container>
  ),
  parameters: {},
  tags: [],
  argTypes: {},
};

export const Default = {
  args: generateMiniCarouselCard(),
};
