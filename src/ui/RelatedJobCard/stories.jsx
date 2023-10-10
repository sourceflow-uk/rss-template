import RelatedJobCard from "./index";
import { Col, Container, Row } from "react-bootstrap";
import { generateJob } from "@/faker/generateJob";

export default {
  title: "UI/RelatedJobCard",
  component: (props) => (
    <Container>
      <Row>
        <Col xs={4}>
          <RelatedJobCard {...props} />
        </Col>
      </Row>
    </Container>
  ),
  parameters: {},
  tags: [],
  argTypes: {},
};

export const Default = {
  args: generateJob(),
};
