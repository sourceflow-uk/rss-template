import { BreadcrumbNavigation } from "./index";
import { Container } from "react-bootstrap";

export default {
  title: "New/UI/BreadcrumbNavigation",
  component: (props) => (
    <Container>
      <BreadcrumbNavigation {...props} />
    </Container>
  ),
  parameters: {},
  tags: [],
  argTypes: {},
};

export const Default = {
  args: {
    items: [
      {
        label: "Page name",
        href: "#",
      },
    ],
  },
};
