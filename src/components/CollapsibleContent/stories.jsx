import { CollapsibleContent } from "./index";
import { Col, Container, Row } from "react-bootstrap";
import { generateCollapsibleContent } from "@/faker/generateCollapsibleContent";

export default {
  title: "Components/New/CollapsibleContent",
  component: (props) => (
    <Container>
      <Row>
        <Col xs={12}>
          <CollapsibleContent {...props} />
        </Col>
      </Row>
    </Container>
  ),
  parameters: {},
  tags: [],
  argTypes: {},
};

export const Default = {
  args: generateCollapsibleContent(),
};
