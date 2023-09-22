import { PromoCard } from "./index";
import { Col, Container, Row } from "react-bootstrap";
import { generatePromoCard } from "@/faker/generatePromoCard";

export default {
  title: "UI/PromoCard",
  component: (props) => (
    <Container>
      <Row>
        <Col xs={4}>
          <PromoCard {...props} />
        </Col>
      </Row>
    </Container>
  ),
  parameters: {},
  tags: ["autodocs"],
  argTypes: {},
};

export const Default = {
  args: generatePromoCard(),
};
