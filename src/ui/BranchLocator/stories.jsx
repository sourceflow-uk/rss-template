import BranchLocator from "./index";
import { Col, Container, Row } from "react-bootstrap";
import { generateArrayOf } from "@/faker/generateArrayOf";
import { generateBranch } from "@/faker/generateBranch";

export default {
  title: "New/UI/BranchLocator",
  component: (props) => (
    <Container>
      <Row>
        <Col xs={12} md={3}>
          <BranchLocator {...props} />
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
    locations: generateArrayOf(generateBranch, { count: 20 }),
  },
};
