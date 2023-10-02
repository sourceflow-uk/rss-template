import { CollapsibleContent } from "./index";
import { Col, Container, Row } from "react-bootstrap";
import { generateTitle } from "@/faker/generateTitle";
import { generateBody } from "@/faker/generateBody";

export default {
  title: "New/Components/CollapsibleContent",
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
  args: {
    title: generateTitle(),
    body: generateBody(),
  },
};
