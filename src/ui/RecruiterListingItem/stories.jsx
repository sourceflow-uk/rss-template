import RecruiterListingItem from "./index";
import { Container } from "react-bootstrap";
import { generateRecruiterListingItem } from "@/faker/generateRecruiterListingItem";

export default {
  title: "UI/RecruiterListingItem",
  component: (props) => (
    <Container>
      <RecruiterListingItem {...props} />
    </Container>
  ),
  parameters: {},
  tags: [],
  argTypes: {},
};

export const Default = {
  args: generateRecruiterListingItem(),
};
