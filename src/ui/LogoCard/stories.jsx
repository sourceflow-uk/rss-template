import { LogoCard } from "./index";
import { Col, Container, Row } from "react-bootstrap";
import { generateLogoCard } from "@/faker/generateLogoCard";

export default {
  title: "UI/LogoCard",
  component: (props) => (
    <Container>
      <Row>
        <Col xs={4}>
          <LogoCard {...props} />
        </Col>
      </Row>
    </Container>
  ),
  parameters: {},
  tags: ["autodocs"],
  argTypes: {},
};

export const Default = {
  args: generateLogoCard(),
};
