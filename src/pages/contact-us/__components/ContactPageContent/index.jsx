import PropTypes from "prop-types";
import clsx from "classnames";
import { Col, Container, Row } from "react-bootstrap";
import { Detail, DynamicHtml, DynamicText, Phone, SocialLinks } from "@/ui";
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
            <DynamicText path="page.contact.content.title" tag="h2">
              Lorem ipsum dolor sit amet consectetur.
            </DynamicText>
            <DynamicHtml path="page.contact.content.body" className="mb-4">
              <p>
                Fames elementum facilisis vestibulum sed. At nulla turpis faucibus adipiscing. Cursus gravida eros ipsum
                maecenas porta accumsan. Enim mauris montes at et mattis condimentum libero lorem.
              </p>
            </DynamicHtml>
            <Phone number={global["_theme.company.phone"]} />
            <Detail
              icon={<Location width={22} height={30} />}
              value={<a href={getRoute("branches")}>Branch finder</a>}
            />
            <Detail
              icon={<Contact width={22} height={22} />}
              value={<a href="#getInTouch">Send us a message (below)</a>}
            />
          </Col>
          <Col xs={12} md={4}>
            <SocialLinks />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

ContactPageContent.defaultProps = {
  className: "py-5",
};

ContactPageContent.propTypes = {
  className: PropTypes.string,
};
