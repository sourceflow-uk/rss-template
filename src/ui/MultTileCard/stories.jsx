import { MultiTileCard } from "./index";
import { Col, Container, Row } from "react-bootstrap";
import { generateMultiTileCard } from "@/faker/generateMultiTileCard";

export default {
  title: "UI/MultiTileCard",
  component: (props) => (
    <Container>
      <Row>
        <Col xs={4}>
          <MultiTileCard {...props} />
        </Col>
      </Row>
    </Container>
  ),
  parameters: {},
  tags: ["autodocs"],
  argTypes: {},
};

export const Default = {
  args: generateMultiTileCard(),
};
