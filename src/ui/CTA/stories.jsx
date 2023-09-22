import { CTA } from "./index";
import { Col, Container, Row } from "react-bootstrap";
import { generateCTA } from "@/faker/generateCTA";

export default {
  title: "UI/CTA",
  component: (props) => (
    <Container>
      <Row>
        <Col xs={4}>
          <CTA {...props} />
        </Col>
      </Row>
    </Container>
  ),
  parameters: {},
  tags: [],
  argTypes: {},
};

export const Default = {
  args: generateCTA(),
};
