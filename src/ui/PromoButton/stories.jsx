import PromoButton from "./index";
import { Col, Container, Row } from "react-bootstrap";
import { generatePromoButton } from "@/faker/generatePromoButton";

export default {
  title: "UI/PromoButton",
  component: (props) => (
    <Container>
      <Row>
        <Col xs={4}>
          <PromoButton {...props} />
        </Col>
      </Row>
    </Container>
  ),
  parameters: {},
  tags: [],
  argTypes: {},
};

export const Default = {
  args: generatePromoButton(),
};
