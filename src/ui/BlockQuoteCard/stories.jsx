import BlockQuoteCard from "./index";
import { Col, Container, Row } from "react-bootstrap";
import { generateBlockQuoteCard } from "@/faker/generateBlockQuoteCard";

export default {
  title: "UI/BlockQuoteCard",
  component: (props) => (
    <Container>
      <Row>
        <Col xs={4}>
          <BlockQuoteCard {...props} />
        </Col>
      </Row>
    </Container>
  ),
  parameters: {},
  tags: [],
  argTypes: {},
};

export const Default = {
  args: generateBlockQuoteCard(),
};
