import { BlogArticleCard } from "./index";
import { Col, Container, Row } from "react-bootstrap";
import { generateBlogArticleCard } from "@/faker/generateBlogArticleCard";

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
  tags: ["autodocs"],
  argTypes: {},
};

export const Default = {
  args: generateBlogArticleCard(),
};
