import { RelatedArticleCard } from "./index";
import { Col, Container, Row } from "react-bootstrap";
import { generateArticle } from "@/faker/generateArticle";

export default {
  title: "New/UI/RelatedArticleCard",
  component: (props) => (
    <Container>
      <Row>
        <Col xs={4}>
          <RelatedArticleCard {...props} />
        </Col>
      </Row>
    </Container>
  ),
  parameters: {},
  tags: [],
  argTypes: {},
};

export const Default = {
  args: generateArticle(),
};
