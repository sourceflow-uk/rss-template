import CaseStudyCard from "./index";
import { Col, Container, Row } from "react-bootstrap";
import { generateCaseStudy } from "@/faker/generateCaseStudy";

export default {
  title: "UI/CaseStudyCard",
  component: (props) => (
    <Container>
      <Row>
        <Col xs={4}>
          <CaseStudyCard {...props} />
        </Col>
      </Row>
    </Container>
  ),
  parameters: {},
  tags: [],
  argTypes: {},
};

export const Default = {
  args: generateCaseStudy(),
};
