import { PromotionalPanelCard } from "./index";
import { Col, Container, Row } from "react-bootstrap";
import { generatePromotionalPanelCard } from "@/faker/generatePromotionalPanelCard";

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
  tags: ["autodocs"],
  argTypes: {},
};

export const Default = {
  args: generatePromotionalPanelCard(),
};
