import PromotionalPanelCard from "./index";
import { Col, Container, Row } from "react-bootstrap";
import { generateTitle } from "@/faker/generateTitle";
import { generateDescription } from "@/faker/generateDescription";
import { generateCTA } from "@/faker/generateCTA";

export default {
  title: "UI/PromotionalPanelCard",
  component: (props) => (
    <Container>
      <Row>
        <Col xs={4}>
          <PromotionalPanelCard {...props} />
        </Col>
      </Row>
    </Container>
  ),
  parameters: {},
  tags: [],
  argTypes: {},
};

export const Default = {
  args: {
    title: generateTitle(),
    description: generateDescription(),
    cta: generateCTA(),
  },
};
