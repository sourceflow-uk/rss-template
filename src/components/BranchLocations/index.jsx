import clsx from "classnames";
import { Col, Container, Row } from "react-bootstrap";
import PropTypes from "prop-types";
import { BranchLocationCard } from "@/ui";

export default function BranchLocations({ className, branches }) {
  return (
    <div className={clsx(className)}>
      <Container className="mw-xl">
        <Row>
          {branches.map(({ address, phone, email, map_embed_url, opening_hours }, k) => (
            <Col key={k} xs={12} md={3}>
              <BranchLocationCard
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

BranchLocations.defaultProps = {
  className: "py-5",
  branches: [],
};

BranchLocations.propTypes = {
  className: PropTypes.string,
  branches: PropTypes.arrayOf(
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
