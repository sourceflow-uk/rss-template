import { SidebarNavigation } from "./index";
import { fakerEN_GB as faker } from "@faker-js/faker";
import { generateArrayOf } from "@/faker/generateArrayOf";
import { generateSidebarNavigationItem } from "@/faker/generateSidebarNavigationItem";
import { Col, Container, Row } from "react-bootstrap";

export default {
  title: "Components/SidebarNavigation",
  component: (props) => (
    <Container>
      <Row>
        <Col xs={12} md={{ span: 3, offset: 9 }}>
          <SidebarNavigation {...props} />
        </Col>
      </Row>
    </Container>
  ),
  parameters: {},
  tags: [],
  argTypes: {},
};

export const Default = {
  args: {
    title: faker.lorem.words(2),
    items: generateArrayOf(generateSidebarNavigationItem, { count: 6 }),
  },
};
