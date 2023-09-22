import { HeroButton } from "./index";
import { Col, Container, Row } from "react-bootstrap";
import { generateHeroButton } from "@/faker/generateHeroButton";

export default {
  title: "UI/HeroButton",
  component: (props) => (
    <Container>
      <Row>
        <Col xs={4}>
          <HeroButton {...props} />
        </Col>
      </Row>
    </Container>
  ),
  parameters: {},
  tags: ["autodocs"],
  argTypes: {},
};

export const Default = {
  args: generateHeroButton(),
};
