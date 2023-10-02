import { SiteHeader } from "./index";
import { Container } from "react-bootstrap";
import { generateSiteHeader } from "@/faker/generateSiteHeader";

export default {
  title: "New/UI/SiteHeader",
  component: (props) => (
    <Container>
      <SiteHeader {...props} />
    </Container>
  ),
  parameters: {},
  tags: [],
  argTypes: {},
};

export const Default = {
  args: generateSiteHeader(),
};
