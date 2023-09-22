import { PromoItem } from "./index";
import { Col, Container, Row } from "react-bootstrap";
import { generatePromoItem } from "@/faker/generatePromoItem";

export default {
  title: "UI/PromoItem",
  component: (props) => (
    <Container>
      <Row>
        <Col xs={4}>
          <PromoItem {...props} />
        </Col>
      </Row>
    </Container>
  ),
  parameters: {},
  tags: [],
  argTypes: {},
};

export const Default = {
  args: generatePromoItem(),
};
