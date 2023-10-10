import BranchLocationCard from "./index";
import { Col, Container, Row } from "react-bootstrap";
import { generateBranch } from "@/faker/generateBranch";

export default {
  title: "UI/BranchLocationCard",
  component: (props) => (
    <Container>
      <Row>
        <Col xs={4}>
          <BranchLocationCard {...props} />
        </Col>
      </Row>
    </Container>
  ),
  parameters: {},
  tags: [],
  argTypes: {},
};

export const Default = {
  args: generateBranch(),
};
