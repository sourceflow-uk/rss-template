import PropTypes from "prop-types";
import clsx from "classnames";
import { Col, Container, Row } from "react-bootstrap";
import { Description, Detail, DynamicHtml, DynamicText, Phone, SocialLinks, Title } from "@/ui";
import { getGlobal } from "@/getters/getGlobal";
import { getRoute } from "@/getters/getRoute";
import Location from "@/assets/Location.svg";
import Contact from "@/assets/Contact.svg";

export default function ContactPageContent({ className }) {
  const global = getGlobal();

  return (
    <div className={clsx(className)}>
      <Container className="mw-xxl">
        <Row>
          <Col xs={12} md={8}>
            <Title title={{ path: "page.contact.content.title" }} />
            <Description description={{ path: "page.contact.content.body" }} className="mb-4" />
            <Phone number={global["_theme.company.phone"]} />
            <Detail
              icon={<Location width={22} height={30} />}
              value={<a href={getRoute("branches")}>Branch finder</a>}
            />
            <Detail icon={<Contact width={22} height={22} />} value={<a href="#form">Send us a message (below)</a>} />
          </Col>
          <Col xs={12} md={4}>
            <SocialLinks className="mt-3 mt-md-0" />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

ContactPageContent.defaultProps = {
  className: "py-4 py-md-5",
};

ContactPageContent.propTypes = {
  className: PropTypes.string,
};
