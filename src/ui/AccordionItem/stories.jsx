import { AccordionItem } from "./index";
import { Container } from "react-bootstrap";
import { generateTitle } from "@/faker/generateTitle";
import { generateBody } from "@/faker/generateBody";

export default {
  title: "UI/AccordionItem",
  component: (props) => (
    <Container>
      <AccordionItem {...props} />
    </Container>
  ),
  parameters: {},
  tags: [],
  argTypes: {},
};

export const Default = {
  args: {
    title: generateTitle(),
    body: generateBody(),
    active: false,
  },
};
