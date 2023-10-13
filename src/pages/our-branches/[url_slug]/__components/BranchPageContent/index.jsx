import PropTypes from "prop-types";
import clsx from "classnames";
import { Card, Col, Container, Row } from "react-bootstrap";
import { Detail } from "@/ui";
import Phone from "@/assets/Phone.svg";
import Contact from "@/assets/Contact.svg";
import Location from "@/assets/Location.svg";

export default function BranchPageContent({ className, content, address, email, phone, opening_hours }) {
  return (
    <div className={clsx(className)}>
      <Container className="mw-xxl">
        <Row>
          <Col xs={12} md={8} dangerouslySetInnerHTML={{ __html: content }} />
          <Col xs={12} md={4}>
            <Card>
              <Card.Header>Contact this branch</Card.Header>
              <Card.Body>
                {[email, phone, opening_hours].some((i) => !!i) ? (
                  <>
                    <Detail
                      icon={<Phone width={24} height={24} />}
                      value={<a href={`tel:${phone.replaceAll(" ", "")}`}>{phone}</a>}
                      label="Phone"
                    />
                    <Detail
                      icon={<Contact width={24} height={24} />}
                      value={<a href={`mailto:${email}`}>{email}</a>}
                      label="Email"
                    />
                    <Detail
                      icon={<Location width={24} height={24} />}
                      value={<span dangerouslySetInnerHTML={{ __html: address }} />}
                      label="Address"
                    />
                  </>
                ) : (
                  <div dangerouslySetInnerHTML={{ __html: address }} />
                )}
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

BranchPageContent.defaultProps = {
  className: "py-5",
};

BranchPageContent.propTypes = {
  className: PropTypes.string,
  content: PropTypes.string,
  address: PropTypes.string,
  email: PropTypes.string,
  phone: PropTypes.string,
  opening_hours: PropTypes.string,
};
