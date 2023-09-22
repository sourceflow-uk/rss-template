import { JobCard } from "./index";
import { Col, Container, Row } from "react-bootstrap";
import { generateJobCard } from "@/faker/generateJobCard";

export default {
  title: "UI/JobCard",
  component: (props) => (
    <Container>
      <Row>
        <Col xs={4}>
          <JobCard {...props} />
        </Col>
      </Row>
    </Container>
  ),
  parameters: {},
  tags: [],
  argTypes: {},
};

export const Default = {
  args: generateJobCard(),
};
