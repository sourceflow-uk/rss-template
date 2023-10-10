import clsx from "classnames";
import { Col, Container, Row } from "react-bootstrap";
import PropTypes from "prop-types";
import { OfficeLocationCard } from "@/ui";

export default function OfficeLocations({ className, items }) {
  return (
    <div className={clsx(className)}>
      <Container className="mw-xl">
        <Row>
          {items.map(({ address, phone, email, map_embed_url, opening_hours }, k) => (
            <Col key={k} xs={12} md={3}>
              <OfficeLocationCard
                address={address}
                phone={phone}
                email={email}
                map_embed_url={map_embed_url}
                opening_hours={opening_hours}
              />
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
}

OfficeLocations.defaultProps = {
  className: "py-5",
  items: [],
};

OfficeLocations.propTypes = {
  className: PropTypes.string,
  items: PropTypes.arrayOf(
    PropTypes.shape({
      className: PropTypes.string,
      address: PropTypes.string,
      phone_number: PropTypes.string,
      email: PropTypes.string,
      map_embed_url: PropTypes.string,
      opening_hours: PropTypes.string,
    })
  ),
};
