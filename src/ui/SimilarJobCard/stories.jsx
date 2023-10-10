import SimilarJobCard from "./index";
import { Col, Container, Row } from "react-bootstrap";
import { generateJob } from "@/faker/generateJob";

export default {
  title: "UI/SimilarJobCard",
  component: (props) => (
    <Container>
      <Row>
        <Col xs={4}>
          <SimilarJobCard {...props} />
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
