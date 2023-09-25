import { RelatedJobCard } from "./index";
import { Col, Container, Row } from "react-bootstrap";
import { generateRelatedJob } from "@/faker/generateRelatedJob";

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
  args: generateRelatedJob(),
};
