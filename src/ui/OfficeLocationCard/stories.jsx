import { OfficeLocationCard } from "./index";
import { Col, Container, Row } from "react-bootstrap";
import { generateOfficeLocationCard } from "@/faker/generateOfficeLocationCard";

export default {
  title: "UI/OfficeLocationCard",
  component: (props) => (
    <Container>
      <Row>
        <Col xs={4}>
          <OfficeLocationCard {...props} />
        </Col>
      </Row>
    </Container>
  ),
  parameters: {},
  tags: ["autodocs"],
  argTypes: {},
};

export const Default = {
  args: generateOfficeLocationCard(),
};
