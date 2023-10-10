import BlogArticleCard from "./index";
import { Col, Container, Row } from "react-bootstrap";
import { generateArticle } from "@/faker/generateArticle";

export default {
  title: "UI/BlogArticleCard",
  component: (props) => (
    <Container>
      <Row>
        <Col xs={4}>
          <BlogArticleCard {...props} />
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
