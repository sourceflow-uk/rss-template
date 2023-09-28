import { OfficeLocator } from "./index";
import { Col, Container, Row } from "react-bootstrap";
import { generateArrayOf } from "@/faker/generateArrayOf";
import { generateOfficeLocatorLocations } from "@/faker/generateOfficeLocatorLocations";

export default {
  title: "Components/New/OfficeLocator",
  component: (props) => (
    <Container>
      <Row>
        <Col xs={12} md={3}>
          <OfficeLocator {...props} />
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
    locations: generateArrayOf(generateOfficeLocatorLocations, { count: 20 }),
  },
};
