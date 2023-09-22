import { AccordionItem } from "./index";
import { Container } from "react-bootstrap";
import { generateAccordionItem } from "@/faker/generateAccordionItem";

export default {
  title: "UI/AccordionItem",
  component: (props) => (
    <Container>
      <AccordionItem {...props} />
    </Container>
  ),
  parameters: {},
  tags: ["autodocs"],
  argTypes: {},
};

export const Default = {
  args: generateAccordionItem(),
};
