import Tag from "./index";
import { Col, Container, Row } from "react-bootstrap";
import { generateTag } from "@/faker/generateTag";

export default {
  title: "UI/Tag",
  component: (props) => (
    <Container>
      <Row>
        <Col xs={4}>
          <Tag {...props} />
        </Col>
      </Row>
    </Container>
  ),
  parameters: {},
  tags: [],
  argTypes: {},
};

export const Default = {
  args: generateTag(),
};
